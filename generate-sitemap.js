import puppeteer from 'puppeteer';
import path from 'path';
import fs from 'fs';
import { fileURLToPath } from 'url';
const SITE_URL = 'https://crewsphere.io/';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const generateSitemap = async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  const visitedUrls = new Set();
  const urlsToVisit = [SITE_URL];

  while (urlsToVisit.length > 0) {
    const url = urlsToVisit.pop();
    if (visitedUrls.has(url)) continue;
    await page.goto(url);
    visitedUrls.add(url);

    const links = await page.evaluate(() => {
      return Array.from(document.querySelectorAll('a'))
        .map(a => a.href)
        .filter(href => href.startsWith(window.location.origin));
    });

    for (const link of links) {
      if (!visitedUrls.has(link)) {
        urlsToVisit.push(link);
      }
    }
  }

  await browser.close();

  const priority = '0.8'; // Default priority
  const changefreq = 'weekly'; // Default frequency
  const lastmod = new Date().toISOString().split('T')[0]; // Current date in YYYY-MM-DD format

  const sitemap = `
    <?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      ${Array.from(visitedUrls)
        .map(url => `
          <url>
            <loc>${url}</loc>
            <priority>${priority}</priority>
            <changefreq>${changefreq}</changefreq>
            <lastmod>${lastmod}</lastmod>
          </url>
        `).join('')}
    </urlset>
  `;

  fs.writeFileSync(path.join(__dirname, 'public', 'sitemap.xml'), sitemap.trim());
  console.log('Sitemap created!');
};

generateSitemap().catch(console.error);