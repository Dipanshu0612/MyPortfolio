import { NextRequest, NextResponse } from "next/server";
import sharp from "sharp";

const ALLOWED_HOST = "image.dipanshuu.in";

// In-memory cache: key → { buffer, timestamp }
const cache = new Map<string, { data: Buffer; timestamp: number }>();
const MAX_CACHE_SIZE = 100;
const CACHE_TTL = 60 * 60 * 1000; // 1 hour

function getCached(key: string): Buffer | null {
  const entry = cache.get(key);
  if (!entry) return null;
  if (Date.now() - entry.timestamp > CACHE_TTL) {
    cache.delete(key);
    return null;
  }
  return entry.data;
}

function setCached(key: string, data: Buffer) {
  // Evict oldest entries if cache is full
  if (cache.size >= MAX_CACHE_SIZE) {
    const oldest = cache.keys().next().value!;
    cache.delete(oldest);
  }
  cache.set(key, { data, timestamp: Date.now() });
}

export async function GET(req: NextRequest) {
  const { searchParams } = req.nextUrl;
  const url = searchParams.get("url");
  const width = Math.min(Number(searchParams.get("w")) || 1920, 3840);
  const quality = Math.min(Number(searchParams.get("q")) || 80, 100);

  if (!url) {
    return NextResponse.json({ error: "Missing url parameter" }, { status: 400 });
  }

  let parsed: URL;
  try {
    parsed = new URL(url);
  } catch {
    return NextResponse.json({ error: "Invalid url" }, { status: 400 });
  }

  if (parsed.hostname !== ALLOWED_HOST) {
    return NextResponse.json({ error: "URL not allowed" }, { status: 400 });
  }

  const cacheKey = `${url}|${width}|${quality}`;
  const cached = getCached(cacheKey);
  if (cached) {
    return new NextResponse(new Uint8Array(cached), {
      headers: {
        "Content-Type": "image/webp",
        "Cache-Control": "public, max-age=31536000, immutable",
      },
    });
  }

  try {
    const upstream = await fetch(url);
    if (!upstream.ok) {
      return NextResponse.json(
        { error: "Failed to fetch image" },
        { status: 502 }
      );
    }

    const buffer = Buffer.from(await upstream.arrayBuffer());
    const optimized = await sharp(buffer)
      .resize({ width, withoutEnlargement: true })
      .webp({ quality })
      .toBuffer();

    setCached(cacheKey, optimized);

    return new NextResponse(new Uint8Array(optimized), {
      headers: {
        "Content-Type": "image/webp",
        "Cache-Control": "public, max-age=31536000, immutable",
      },
    });
  } catch {
    return NextResponse.json(
      { error: "Image processing failed" },
      { status: 500 }
    );
  }
}
