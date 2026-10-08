/**
 * Tell Bing, Yandex and other IndexNow search engines that your pages changed,
 * so they re-crawl them within minutes instead of weeks. (Bing also powers
 * ChatGPT search and Copilot results.)
 *
 * Usage, AFTER deploying:  npm run indexnow
 *
 * The key file public/65025f7c1cad4e25ab6cd098f2b9b144.txt must be live at https://2xdev.com/65025f7c1cad4e25ab6cd098f2b9b144.txt
 * Google does not use IndexNow — use Search Console for Google.
 */
const SITE = 'https://2xdev.com';
const KEY = '65025f7c1cad4e25ab6cd098f2b9b144';

const sitemap = await (await fetch(`${SITE}/sitemap.xml`)).text();
const urlList = [...sitemap.matchAll(/<loc>(.*?)<\/loc>/g)].map((match) => match[1]);

const response = await fetch('https://api.indexnow.org/indexnow', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json; charset=utf-8' },
  body: JSON.stringify({ host: new URL(SITE).host, key: KEY, keyLocation: `${SITE}/${KEY}.txt`, urlList }),
});

console.log(`IndexNow: submitted ${urlList.length} URLs → HTTP ${response.status}`);
if (!response.ok && response.status !== 202) console.log(await response.text());
