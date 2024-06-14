// const puppeteer = require('puppeteer');

// test('popover toggles on click', async () => {
//   const browser = await puppeteer.launch();
//   const page = await browser.newPage();
//   await page.goto('http://localhost:9000');

//   const button = await page.$('#popover-btn');
//   await button.click();

//   const popoverVisible = await page.$eval('.popover', (el) => el.classList.contains('show'));
//   expect(popoverVisible).toBe(true);

//   await browser.close();
// });
// const puppeteer = require('puppeteer');

// test('popover toggles on click', async () => {
//   const browser = await puppeteer.launch({ headless: true });
//   const page = await browser.newPage();
//   await page.goto('http://localhost:9000');

//   const button = await page.$('#popover-btn');
//   await button.click();

//   const popoverVisible = await page.$eval('.popover', (el) => el.classList.contains('show'));
//   expect(popoverVisible).toBe(true);

//   await browser.close();
// });

const puppeteer = require('puppeteer');

test('popover toggles on click', async () => {
  const browser = await puppeteer.launch({
    headless: true,
    args: ['--disable-features=NetworkService'],
  });
  const page = await browser.newPage();
  await page.goto('http://localhost:9000');

  const button = await page.$('#popover-btn');
  await button.click();

  const popoverVisible = await page.$eval('.popover', (el) => el.classList.contains('show'));
  expect(popoverVisible).toBe(true);

  await browser.close();
});
