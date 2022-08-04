import { test as base,expect } from '@playwright/test';

// edit lại fixture page
 const test = base.extend({
  page: async ({ page }, use) => {
    await page.goto('https://www.shopbase.com/');
    await page.locator('text=Login').click();
    await page.type('#email', 'dinh.truong@qa.team');
    await page.type('#password', 'Test@cc123');
    await page.locator('.is-fullwidth').click();
    await expect(page.locator('.word-break')).toContainText('Welcome');
    await use(page);
  },
});

test('demo', async ({ page }) => {
    await page.locator('.help-docs-image-icon').click();
})
