import { test, expect } from '@playwright/test';

test.describe('Поиск вкладок и уведомлений по ролям', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('https://osstep.github.io/locator_getbyrole');
  });

  // Задание 1: Работа с вкладками
  // 1. Найди вкладку "Настройки" по роли tab
  // 2. Проверь что она не выбрана (aria-selected="false")
  // 3. Кликни на вкладку
  // 4. Проверь что она стала выбранной
  // 5. Найди содержимое вкладки по роли tabpanel и проверь его видимость
  test('Переключение между вкладками', async ({ page }) => {
    const settingsTab = page.locator('button[role="tab"][aria-controls="settings-tab"]'); // локатор
    console.log(await settingsTab.getAttribute('aria-selected'));
    await expect(settingsTab).toHaveAttribute('aria-selected', 'false', { timeout: 10000 });
    await settingsTab.click();
    await expect(settingsTab).toHaveAttribute('aria-selected', 'true', { timeout: 10000 });
    const settingsPanel = page.locator('text=Настройки аккаунта'); // локатор
    await settingsPanel.click();
    await expect(settingsPanel).toBeVisible();
  });

  // Задание 2: Проверка уведомлений
  // 1. Найди все уведомления на странице по роли alert
  // 2. Отфильтруй уведомление с текстом "Успех!"
  // 3. Проверь что оно видимо и имеет класс alert-success
  test('Проверить уведомления на странице', async ({ page }) => {
    const successAlert = page.locator('div.alert.alert-success', {
      hasText: 'Успех! Действие выполнено успешно',
    }); // локатор
    await expect(successAlert).toBeVisible();
    await expect(successAlert).toHaveClass(/alert-success/);
  });
});
