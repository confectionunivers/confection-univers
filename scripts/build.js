import { execFileSync } from 'node:child_process';
import { existsSync } from 'node:fs';

console.log('🏗️ Starting production build...');

try {
  execFileSync('npm', ['run', 'build'], { stdio: 'inherit' });

  if (!existsSync('dist/index.html')) {
    throw new Error('Astro build completed without generating dist/index.html');
  }

  console.log('✅ Production build completed. Static files are ready in dist/.');
} catch (error) {
  console.error('❌ Production build failed.');
  process.exitCode = 1;
}
