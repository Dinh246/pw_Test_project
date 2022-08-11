import { test, expect } from '@playwright/test';

test('PLaywright inspector', async ({ page }) => {
    await page.goto("https://playwright.dev/");
    await page.locator('a:has-text("Navigations")').click();
})
