import { execSync } from 'child_process';
import { copyFileSync, mkdirSync, existsSync, readdirSync, copyFileSync as fsCopyFileSync } from 'fs';
import path from 'path';

console.log('🏗️  Starting custom build process...');

// Step 1: Run Astro build
console.log('📦 Running Astro build...');
try {
  execSync('npm run build:astro', { stdio: 'inherit' });
} catch (error) {
  console.error('❌ Astro build failed:', error);
  process.exit(1);
}

// Step 2: Create dist/server directory
console.log('📁 Creating dist/server directory...');
const distServerDir = path.join(process.cwd(), 'dist', 'server');
if (!existsSync(distServerDir)) {
  mkdirSync(distServerDir, { recursive: true });
}

// Step 3: Copy files from .vercel/output/_functions/ to dist/server/
console.log('📋 Copying build files to dist/server/...');
const sourceDir = path.join(process.cwd(), '.vercel', 'output', '_functions');

function copyDirectory(src, dest) {
  if (!existsSync(dest)) {
    mkdirSync(dest, { recursive: true });
  }

  const entries = readdirSync(src, { withFileTypes: true });

  for (const entry of entries) {
    const srcPath = path.join(src, entry.name);
    const destPath = path.join(dest, entry.name);

    if (entry.isDirectory()) {
      copyDirectory(srcPath, destPath);
    } else {
      fsCopyFileSync(srcPath, destPath);
    }
  }
}

// Copy main files
const filesToCopy = ['entry.mjs', 'renderers.mjs', '_@astrojs-ssr-adapter.mjs', '_noop-middleware.mjs'];
filesToCopy.forEach(file => {
  const srcPath = path.join(sourceDir, file);
  const destPath = path.join(distServerDir, file);
  if (existsSync(srcPath)) {
    fsCopyFileSync(srcPath, destPath);
    console.log(`✓ Copied ${file}`);
  }
});

// Copy manifest file
const manifestFiles = readdirSync(sourceDir).filter(f => f.startsWith('manifest_'));
if (manifestFiles.length > 0) {
  const srcPath = path.join(sourceDir, manifestFiles[0]);
  const destPath = path.join(distServerDir, 'manifest.mjs');
  fsCopyFileSync(srcPath, destPath);
  console.log(`✓ Copied manifest.mjs`);
}

// Copy directories
const dirsToCopy = ['chunks', 'pages'];
dirsToCopy.forEach(dir => {
  const srcPath = path.join(sourceDir, dir);
  const destPath = path.join(distServerDir, dir);
  if (existsSync(srcPath)) {
    copyDirectory(srcPath, destPath);
    console.log(`✓ Copied ${dir}/`);
  }
});

console.log('✅ Build completed successfully!');
console.log('📂 dist/server/ directory is ready for Vercel deployment');
