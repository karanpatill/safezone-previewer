// Rasterises public/og-image.svg to public/og-image.png. Facebook, X, LinkedIn and most chat apps
// ignore SVG social cards, so the PNG is what og:image points at. Re-run after editing the SVG:
//   npm run og
import sharp from 'sharp';

await sharp('public/og-image.svg', { density: 144 })
  .resize(1200, 630)
  .png({ compressionLevel: 9 })
  .toFile('public/og-image.png');

console.log('public/og-image.png written (1200 × 630)');
