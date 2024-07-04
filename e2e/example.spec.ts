import { test, expect } from '@playwright/test';

// test('has title', async ({ page }) => {
//   await page.goto('https://playwright.dev/');

//   // Expect a title "to contain" a substring.
//   await expect(page).toHaveTitle(/Playwright/);
// });

// test('get started link', async ({ page }) => {
//   await page.goto('https://playwright.dev/');

//   // Click the get started link.
//   await page.getByRole('link', { name: 'Get started' }).click();

//   // Expects page to have a heading with the name of Installation.
//   await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();
// });

// test('test', async ({ page }) => {
//   await page.goto('http://localhost:5173/');
//   await page.getByRole('button', { name: 'Tout refuser' }).click();
//   await page.getByLabel('Rech.').click();
//   await page.getByLabel('Rech.').press('CapsLock');
//   await page.getByLabel('Rech.').fill('B');
//   await page.getByLabel('Rech.').press('CapsLock');
//   await page.getByLabel('Rech.').fill('Bonjour');
//   await page.goto('https://www.google.com/search?q=Bonjour&sca_esv=997805547b584ef0&sca_upv=1&source=hp&ei=gViGZuymAq-JkdUP3e-GkAU&iflsig=AL9hbdgAAAAAZoZmkRJ3DfC8NHBNrfZSwuWtuuHmlVQW&ved=0ahUKEwis69uf94yHAxWvRKQEHd23AVIQ4dUDCA0&uact=5&oq=Bonjour&gs_lp=Egdnd3Mtd2l6IgdCb25qb3VyMg0QABiABBixAxhGGPkBMggQABiABBixAzIIEAAYgAQYsQMyCBAAGIAEGLEDMggQABiABBixAzIIEAAYgAQYsQMyDhAAGIAEGLEDGIMBGIoFMggQABiABBixAzIIEAAYgAQYsQMyCBAAGIAEGLEDSNntAlC0G1jLI3ACeACQAQCYAVugAZkEqgEBN7gBA8gBAPgBAZgCCaAC5wSoAgrCAhAQLhgDGOUCGOoCGIwDGI8BwgIQEAAYAxjlAhjqAhiMAxiPAcICERAuGIAEGLEDGNEDGIMBGMcBwgILEAAYgAQYsQMYgwHCAgsQLhiABBixAxiDAcICCxAuGIAEGNEDGMcBwgIFEAAYgATCAggQABiABBjJA8ICDRAAGIAEGLEDGIMBGArCAgUQLhiABMICDhAAGIAEGJIDGLgEGIoFmAMSkgcBOaAHk0c&sclient=gws-wiz');
//   await page.getByLabel('Écouter').click();
// });

test('test 0 value', async ({ page }) => {
  await page.goto('http://localhost:5173/');

  await expect(page.getByRole('button', { name: 'count is' })).toContainText('0');
});

test('test 2 value', async({page}) => {
  await page.goto('http://localhost:5173/');

  const button = page.getByRole('button', { name: 'count is' })
  await button.click();
  await button.click();
  await expect(page.getByRole('button', { name: 'count is' })).toContainText('2');
})