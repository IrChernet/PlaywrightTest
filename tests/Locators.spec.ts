import { test, expect } from '@playwright/test';

test.describe('Поиск элементов по роли "button"', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('https://osstep.github.io/locator_getbyrole');
  });

  // Задание 1: Найди кнопку "Основное действие" используя getByRole с указанием роли и текста
  // После нахождения кнопки проверь что она видима и имеет класс primary-btn
  test('Найти основную кнопку по роли и тексту', async ({ page }) => {
    const primaryButton = page.getByRole('button', { name: 'Основное действие' }); // локатор

    await expect(primaryButton).toBeVisible();
    await expect(primaryButton).toHaveClass(/primary-btn/);
  });

  // Задание 2: Найди неактивную кнопку используя getByRole с указанием disabled состояния
  // Проверь что кнопка видима и действительно disabled
  test('Найти неактивную кнопку по роли и состоянию', async ({ page }) => {
    const disabledButton = page.getByRole('button', {
      disabled: true,
    }); // локатор

    await expect(disabledButton).toBeVisible({ timeout: 10000 });
    await expect(disabledButton).toBeDisabled();
  });

  // Задание 3: Найди элемент div с ролью button (не настоящую кнопку)
  // Проверь что элемент видим и содержит текст "Div как кнопка"
  test('Найти div с ролью кнопки', async ({ page }) => {
    const divButton = page.locator('div[role="button"]');

    // const divButton = page.getByRole('button', { name: 'Div как кнопка' }); // локатор
    await expect(divButton).toBeVisible({ timeout: 10000 });
    await expect(divButton).toHaveText('Div как кнопка');
  });
});
