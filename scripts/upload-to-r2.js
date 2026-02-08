import * as fs from "fs";
import * as path from "path";
import { fileURLToPath } from "url";
import { S3Client, PutObjectCommand } from "@aws-sdk/client-s3";
import { cloudflare } from "../config/cloudflare.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const useOptimized = process.argv.includes("--optimized");
const IMAGES_DIR = path.join(
  __dirname,
  "..",
  "public",
  useOptimized ? "images-optimized" : "images"
);

const MIME_TYPES = {
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".png": "image/png",
  ".gif": "image/gif",
  ".webp": "image/webp",
  ".svg": "image/svg+xml",
  ".ico": "image/x-icon",
  ".heic": "image/heic",
  ".dng": "image/x-adobe-dng",
};

const s3 = new S3Client({
  region: "auto",
  endpoint: `https://${cloudflare.r2.accountId}.r2.cloudflarestorage.com`,
  credentials: {
    accessKeyId: cloudflare.r2.accessKeyId,
    secretAccessKey: cloudflare.r2.secretAccessKey,
  },
});

function getAllFiles(dir, fileList = []) {
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      getAllFiles(fullPath, fileList);
    } else if (!entry.name.startsWith(".")) {
      fileList.push(fullPath);
    }
  }
  return fileList;
}

async function uploadFile(filePath) {
  // Key preserves structure: images/gallery-images/vsf/vsf-1.webp
  const relativePath = path.relative(IMAGES_DIR, filePath);
  const key = `images/${relativePath}`;
  const ext = path.extname(filePath).toLowerCase();
  const contentType = MIME_TYPES[ext] || "application/octet-stream";
  const body = fs.readFileSync(filePath);

  const command = new PutObjectCommand({
    Bucket: cloudflare.r2.bucketName,
    Key: key,
    Body: body,
    ContentType: contentType,
  });

  await s3.send(command);
  console.log(`Uploaded: ${key}`);
  return key;
}

async function main() {
  const requiredVars = [
    "CLOUDFLARE_ACCOUNT_ID",
    "CLOUDFLARE_R2_ACCESS_KEY_ID",
    "CLOUDFLARE_R2_SECRET_ACCESS_KEY",
    "CLOUDFLARE_R2_BUCKET_NAME",
  ];

  const missing = requiredVars.filter((v) => !process.env[v]);
  if (missing.length > 0) {
    console.error("Missing environment variables:", missing.join(", "));
    console.error("Add them to your .env file.");
    process.exit(1);
  }

  const files = getAllFiles(IMAGES_DIR);
  console.log(
    `Source: ${useOptimized ? "images-optimized" : "images"} (${files.length} files)\n`
  );

  let success = 0;
  let failed = 0;

  for (const file of files) {
    try {
      await uploadFile(file);
      success++;
    } catch (err) {
      console.error(`Failed: ${file} - ${err.message}`);
      failed++;
    }
  }

  console.log(`\nDone! ${success} uploaded, ${failed} failed.`);

  if (cloudflare.r2.publicUrl) {
    console.log(`\nPublic base URL: ${cloudflare.r2.publicUrl}/images/`);
  }
}

main();
