import { chromium } from "playwright";

export const getSolution = async (): Promise<string[]> => {
  const browser = await chromium.launch({ headless: true });

  const page = await browser.newPage();
  await page.goto("https://www.vilaweb.cat/paraulogic/");

  const result = await page.evaluate(() => {
    // @ts-ignore
    const { p: words } = t;
    return words;
  });
  await browser.close();

  return Object.values(result);
};
