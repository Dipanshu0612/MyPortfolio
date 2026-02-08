import * as fs from "fs";
import * as path from "path";
import { fileURLToPath } from "url";
import sharp from "sharp";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const INPUT_DIR = path.join(__dirname, "..", "public", "images");
const OUTPUT_DIR = path.join(__dirname, "..", "public", "images-optimized");

const SKIP_EXTENSIONS = new Set([".ico", ".svg"]);
const IMAGE_EXTENSIONS = new Set([
  ".jpg",
  ".jpeg",
  ".png",
  ".webp",
  ".heic",
  ".dng",
]);

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

function formatBytes(bytes) {
  if (bytes < 1024) return `${bytes} B`;
  if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} KB`;
  return `${(bytes / (1024 * 1024)).toFixed(1)} MB`;
}

async function optimizeImage(inputPath) {
  const relativePath = path.relative(INPUT_DIR, inputPath);
  const ext = path.extname(inputPath).toLowerCase();

  // Skip non-image or special files — copy as-is
  if (SKIP_EXTENSIONS.has(ext)) {
    const outputPath = path.join(OUTPUT_DIR, relativePath);
    fs.mkdirSync(path.dirname(outputPath), { recursive: true });
    fs.copyFileSync(inputPath, outputPath);
    return { file: relativePath, skipped: true };
  }

  if (!IMAGE_EXTENSIONS.has(ext)) {
    return { file: relativePath, skipped: true };
  }

  // Change extension to .webp
  const webpRelativePath =
    relativePath.replace(/\.[^.]+$/, "") + ".webp";
  const outputPath = path.join(OUTPUT_DIR, webpRelativePath);
  fs.mkdirSync(path.dirname(outputPath), { recursive: true });

  const originalSize = fs.statSync(inputPath).size;

  // PNG screenshots get slightly higher quality
  const quality = ext === ".png" ? 85 : 80;

  await sharp(inputPath)
    .resize({ width: 1920, withoutEnlargement: true })
    .webp({ quality })
    .toFile(outputPath);

  const optimizedSize = fs.statSync(outputPath).size;
  const savings = ((1 - optimizedSize / originalSize) * 100).toFixed(1);

  return {
    file: relativePath,
    output: webpRelativePath,
    originalSize,
    optimizedSize,
    savings: `${savings}%`,
  };
}

async function main() {
  console.log("Optimizing images with Sharp...\n");

  // Clean output directory
  if (fs.existsSync(OUTPUT_DIR)) {
    fs.rmSync(OUTPUT_DIR, { recursive: true });
  }
  fs.mkdirSync(OUTPUT_DIR, { recursive: true });

  const files = getAllFiles(INPUT_DIR);
  console.log(`Found ${files.length} files.\n`);

  let totalOriginal = 0;
  let totalOptimized = 0;
  let optimized = 0;
  let skipped = 0;

  for (const file of files) {
    try {
      const result = await optimizeImage(file);
      if (result.skipped) {
        console.log(`  SKIP  ${result.file}`);
        skipped++;
      } else {
        console.log(
          `  OK    ${result.file} → ${result.output}  (${formatBytes(result.originalSize)} → ${formatBytes(result.optimizedSize)}, -${result.savings})`
        );
        totalOriginal += result.originalSize;
        totalOptimized += result.optimizedSize;
        optimized++;
      }
    } catch (err) {
      console.error(`  FAIL  ${path.relative(INPUT_DIR, file)} — ${err.message}`);
    }
  }

  console.log(`\nDone! ${optimized} optimized, ${skipped} skipped.`);
  if (totalOriginal > 0) {
    const totalSavings = ((1 - totalOptimized / totalOriginal) * 100).toFixed(1);
    console.log(
      `Total: ${formatBytes(totalOriginal)} → ${formatBytes(totalOptimized)} (-${totalSavings}%)`
    );
  }
  console.log(`\nOutput: ${OUTPUT_DIR}`);
}

main();
