const puppeteer = require('puppeteer');

(async () => {
  // Запуск браузера
  const browser = await puppeteer.launch({ headless: false });
  const page = await browser.newPage();

  // Загрузка HTML-файла
  await page.goto(`http://localhost:9000`);

  // Нажатие на кнопку и проверка появления поповера
  const triggerSelector = 'popover';
  await page.waitForSelector(triggerSelector);
  await page.click(triggerSelector);

  // Проверка, что поповер виден
  const popoverVisible = await page.evaluate(() => {
    const popover = document.querySelector('.popover');
    return popover && popover.classList.contains('show');
  });

  if (popoverVisible) {
    console.log('Popover is visible');
  } else {
    console.log('Popover is not visible');
  }

  // Закрытие браузера
  await browser.close();
})();

// const puppeteer = require('puppeteer');

// test('popover toggles on click', async () => {
//   const browser = await puppeteer.launch();
//   const page = await browser.newPage();
//   await page.goto('http://localhost:9000');

//   const button = await page.$('popover-body');
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

// const puppeteer = require('puppeteer');

// test('popover toggles on click', async () => {
//   const browser = await puppeteer.launch({
//     headless: true,
//     args: ['--disable-features=NetworkService'],
//   });
//   const page = await browser.newPage();
//   await page.goto('http://localhost:9000');

//   const button = await page.$('#popover-btn');
//   await button.click();

//   const popoverVisible = await page.$eval('.popover', (el) => el.classList.contains('show'));
//   expect(popoverVisible).toBe(true);

//   await browser.close();
// });
// const puppeteer = require('puppeteer-core');

// test('popover toggles on click', async () => {
//   const browser = await puppeteer.launch({
//     headless: true,
//     args: ['--disable-features=NetworkService'],
//     executablePath: '/usr/bin/firefox',
//   });

//   const page = await browser.newPage();
//   await page.goto('http://localhost:9000'); // Замените на ваш URL

//   const button = await page.$('#popover-btn');
//   await button.click();

//   const popoverVisible = await page.$eval('.popover', (el) => el.classList.contains('show'));
//   expect(popoverVisible).toBe(true);

//   await browser.close();
// });
