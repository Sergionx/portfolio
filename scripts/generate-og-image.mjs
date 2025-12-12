import { chromium } from 'playwright';
import path from 'path';
import fs from 'fs';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function generateOgImage() {
  const browser = await chromium.launch();
  const page = await browser.newPage();
  
  // Viewport size for Open Graph images
  await page.setViewportSize({ width: 1200, height: 630 });

  const url = 'http://localhost:4173/portfolio/';
  console.log(`Navigating to ${url}...`);
  
  try {
    await page.goto(url, { waitUntil: 'networkidle' });
    
    // Wait a bit more for any animations or lazy loaded images
    await page.waitForTimeout(1000);

    const outputDir = path.join(__dirname, '../dist');
    if (!fs.existsSync(outputDir)) {
      fs.mkdirSync(outputDir, { recursive: true });
    }

    const outputPath = path.join(outputDir, 'og-home.png');
    await page.screenshot({ path: outputPath });
    
    console.log(`OG image generated at ${outputPath}`);
  } catch (error) {
    console.error('Error generating OG image:', error);
    process.exit(1);
  } finally {
    await browser.close();
  }
}

generateOgImage();
