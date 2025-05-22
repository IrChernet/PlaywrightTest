import { test, expect } from '@playwright/test';

test.describe('Поиск элементов форм по ролям', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('https://osstep.github.io/locator_getbyrole');
  });

  // Задание 1: Найди поле "Имя пользователя" по роли textbox и связанному label
  // Заполни поле текстом "тестовый_пользователь" и проверь значение
  test('Найти поля формы по их ролям', async ({ page }) => {
    const usernameInput = page.locator('#username'); // локатор
    await expect(usernameInput).toBeVisible();
    await usernameInput.fill('тестовый_пользователь');
    await expect(usernameInput).toHaveValue('тестовый_пользователь');
  });

  // Задание 2: Найди чекбокс "Подписаться на рассылку" по роли checkbox
  // Проверь что он не выбран, затем выбери его и проверь снова
  test('Найти чекбоксы по роли checkbox', async ({ page }) => {
    const newsletterCheckbox = page.getByRole('checkbox', { name: 'Подписаться на рассылку' }); // локатор
    await expect(newsletterCheckbox).toBeVisible();
    await expect(newsletterCheckbox).not.toBeChecked();
    await newsletterCheckbox.check();
    await expect(newsletterCheckbox).toBeChecked();
  });

  // Задание 3: Заполни форму и отправь её:
  // 1. Найди и заполни поле имени
  // 2. Найди и заполни поле пароля
  // 3. Найди и выбери страну из выпадающего списка
  // 4. Найди и нажми кнопку отправки
  test('Заполнить и отправить форму', async ({ page }) => {
    await page.locator('#username').fill('тест');
    await page.locator('#password').fill('пароль123');
    await page.locator('#country').selectOption('ru');
    await page.getByRole('button', { name: 'Отправить' }).click();
  });
});
