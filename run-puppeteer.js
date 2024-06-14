const puppeteer = require('puppeteer');
const server = require('http-server');

// Запускаем сервер
const app = server.createServer({ root: './public' });
app.listen(9000);

// Функция для выполнения теста
(async () => {
  const browser = await puppeteer.launch({ headless: true });
  const page = await browser.newPage();

  // Ожидание загрузки страницы
  await page.goto('http://localhost:9000', { waitUntil: 'networkidle2' });

  // Вывод содержимого страницы для отладки
  const content = await page.content();
  console.log(content);

  // Ожидание появления элемента
  await page.waitForSelector('#popover-btn');

  // Найти элемент и кликнуть по нему
  const button = await page.$('#popover-btn');
  if (!button) {
    console.error('Button not found!');
    process.exit(1); // Выход с ошибкой
  }

  await button.click();

  // Проверка видимости popover
  const popoverVisible = await page.$eval('.popover', (el) => el.classList.contains('show'));
  console.log(`Popover visibility: ${popoverVisible}`);

  await browser.close();
  process.exit();
})();
