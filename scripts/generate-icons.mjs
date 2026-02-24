import sharp from 'sharp';
import fs from 'fs';
import path from 'path';

const publicDir = path.join(process.cwd(), 'public');

// Tarot-themed SVG icon: a mystical star/pentacle with moon
const svgIcon = `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
  <defs>
    <linearGradient id="bg" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#4f46e5"/>
      <stop offset="50%" style="stop-color:#6366f1"/>
      <stop offset="100%" style="stop-color:#818cf8"/>
    </linearGradient>
    <linearGradient id="star" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#fbbf24"/>
      <stop offset="100%" style="stop-color:#f59e0b"/>
    </linearGradient>
  </defs>
  <rect width="512" height="512" rx="96" fill="url(#bg)"/>
  <!-- Outer circle -->
  <circle cx="256" cy="256" r="180" fill="none" stroke="#a5b4fc" stroke-width="3" opacity="0.5"/>
  <!-- Inner decorative circle -->
  <circle cx="256" cy="256" r="140" fill="none" stroke="#c7d2fe" stroke-width="1.5" opacity="0.3"/>
  <!-- Five-pointed star (pentacle) -->
  <polygon points="256,90 296,198 410,198 318,268 346,376 256,308 166,376 194,268 102,198 216,198" fill="url(#star)" opacity="0.95"/>
  <!-- Center circle -->
  <circle cx="256" cy="240" r="40" fill="#4f46e5" stroke="#fbbf24" stroke-width="3"/>
  <!-- Moon crescent in center -->
  <path d="M248,220 A25,25 0 1,0 248,260 A18,18 0 1,1 248,220" fill="#fbbf24"/>
  <!-- Small dots around the circle -->
  <circle cx="256" cy="76" r="4" fill="#fbbf24" opacity="0.8"/>
  <circle cx="436" cy="256" r="4" fill="#fbbf24" opacity="0.8"/>
  <circle cx="76" cy="256" r="4" fill="#fbbf24" opacity="0.8"/>
  <circle cx="256" cy="436" r="4" fill="#fbbf24" opacity="0.8"/>
  <!-- Text -->
  <text x="256" y="420" text-anchor="middle" fill="white" font-family="serif" font-size="48" font-weight="bold" opacity="0.9">TAROT</text>
</svg>`;

// OG Image SVG (1200x630)
const ogSvg = `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 630">
  <defs>
    <linearGradient id="ogbg" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#312e81"/>
      <stop offset="50%" style="stop-color:#4338ca"/>
      <stop offset="100%" style="stop-color:#6366f1"/>
    </linearGradient>
    <linearGradient id="gold" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#fbbf24"/>
      <stop offset="100%" style="stop-color:#f59e0b"/>
    </linearGradient>
  </defs>
  <rect width="1200" height="630" fill="url(#ogbg)"/>
  <!-- Decorative circles -->
  <circle cx="200" cy="315" r="200" fill="none" stroke="#a5b4fc" stroke-width="1" opacity="0.2"/>
  <circle cx="200" cy="315" r="160" fill="none" stroke="#a5b4fc" stroke-width="1" opacity="0.15"/>
  <circle cx="200" cy="315" r="120" fill="none" stroke="#a5b4fc" stroke-width="1" opacity="0.1"/>
  <!-- Pentacle on left -->
  <polygon points="200,140 230,220 320,220 248,270 270,350 200,305 130,350 152,270 80,220 170,220" fill="url(#gold)" opacity="0.3"/>
  <!-- Stars decoration -->
  <circle cx="100" cy="100" r="2" fill="#fbbf24" opacity="0.6"/>
  <circle cx="300" cy="80" r="1.5" fill="#fbbf24" opacity="0.5"/>
  <circle cx="500" cy="120" r="2" fill="#fbbf24" opacity="0.4"/>
  <circle cx="700" cy="90" r="1.5" fill="#fbbf24" opacity="0.5"/>
  <circle cx="900" cy="150" r="2" fill="#fbbf24" opacity="0.6"/>
  <circle cx="1100" cy="100" r="1.5" fill="#fbbf24" opacity="0.4"/>
  <circle cx="150" cy="500" r="2" fill="#fbbf24" opacity="0.5"/>
  <circle cx="400" cy="550" r="1.5" fill="#fbbf24" opacity="0.4"/>
  <circle cx="800" cy="520" r="2" fill="#fbbf24" opacity="0.5"/>
  <circle cx="1050" cy="500" r="1.5" fill="#fbbf24" opacity="0.4"/>
  <!-- Main title -->
  <text x="680" y="250" text-anchor="middle" fill="white" font-family="Georgia, serif" font-size="72" font-weight="bold">AI Tarot Reading</text>
  <!-- Subtitle -->
  <text x="680" y="330" text-anchor="middle" fill="#c7d2fe" font-family="Georgia, serif" font-size="32">Free Online Tarot Card Predictions</text>
  <!-- Divider line -->
  <line x1="500" y1="370" x2="860" y2="370" stroke="#fbbf24" stroke-width="2" opacity="0.6"/>
  <!-- Features -->
  <text x="680" y="420" text-anchor="middle" fill="#a5b4fc" font-family="Arial, sans-serif" font-size="24">78 Cards  |  5 Spreads  |  AI Interpretation</text>
  <!-- URL -->
  <text x="680" y="480" text-anchor="middle" fill="#fbbf24" font-family="Arial, sans-serif" font-size="22" opacity="0.8">rndomi.space</text>
</svg>`;

async function generateIcons() {
  const svgBuffer = Buffer.from(svgIcon);
  const ogBuffer = Buffer.from(ogSvg);

  // Generate favicon sizes
  const sizes = [
    { name: 'favicon-16x16.png', size: 16 },
    { name: 'favicon-32x32.png', size: 32 },
    { name: 'apple-touch-icon.png', size: 180 },
    { name: 'android-chrome-192x192.png', size: 192 },
    { name: 'android-chrome-512x512.png', size: 512 },
  ];

  for (const { name, size } of sizes) {
    await sharp(svgBuffer)
      .resize(size, size)
      .png()
      .toFile(path.join(publicDir, name));
    console.log(`Generated ${name}`);
  }

  // Generate favicon.ico (using 32x32 PNG as .ico)
  await sharp(svgBuffer)
    .resize(32, 32)
    .png()
    .toFile(path.join(publicDir, 'favicon.ico'));
  console.log('Generated favicon.ico');

  // Generate OG image
  await sharp(ogBuffer)
    .resize(1200, 630)
    .jpeg({ quality: 90 })
    .toFile(path.join(publicDir, 'og-image.jpg'));
  console.log('Generated og-image.jpg');

  console.log('\nAll icons generated successfully!');
}

generateIcons().catch(console.error);
