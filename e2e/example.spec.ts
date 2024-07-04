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

// test('test 0 value', async ({ page }) => {
//   await page.goto('http://localhost:5173/');

//   await expect(page.getByRole('button', { name: 'count is' })).toContainText('0');
// });

// test('test 2 value', async({page}) => {
//   await page.goto('http://localhost:5173/');

//   const button = page.getByRole('button', { name: 'count is' })
//   await button.click();
//   await button.click();
//   await expect(page.getByRole('button', { name: 'count is' })).toContainText('2');
// })


test.beforeEach(async ({ page }) => {
  // Navigue vers la page et s'assure que le bouton est dans l'état initial
  await page.goto('http://localhost:5173/');

  await expect(page.locator('#screen')).toContainText('0');
});

test.describe('numbers', () => {

  test('number 0 show correct value', async ({ page }) => {
  
    await page.getByRole('button', { name: '0' }).click();
    await expect(page.locator('#screen')).toContainText('0');
  });
  
  test('number 1 show correct value', async ({ page }) => {
    
    await page.getByRole('button', { name: '1' }).click();
    await expect(page.locator('#screen')).toContainText('1');
  });
  
  test('number 2 show correct value', async ({ page }) => {
    
    await page.getByRole('button', { name: '2' }).click();
    await expect(page.locator('#screen')).toContainText('2');
  });
  
  test('number 3 show correct value', async ({ page }) => {
    
    await page.getByRole('button', { name: '3' }).click();
    await expect(page.locator('#screen')).toContainText('3');
  });
  
  test('number 4 show correct value', async ({ page }) => {
    
    await page.getByRole('button', { name: '4' }).click();
    await expect(page.locator('#screen')).toContainText('4');
  });
  
  test('number 5 show correct value', async ({ page }) => {
    
    await page.getByRole('button', { name: '5' }).click();
    await expect(page.locator('#screen')).toContainText('5');
  });
  
  test('number 6 show correct value', async ({ page }) => {
    
    await page.getByRole('button', { name: '6' }).click();
    await expect(page.locator('#screen')).toContainText('6');
  });
  
  test('number 7 show correct value', async ({ page }) => {
    
    await page.getByRole('button', { name: '7' }).click();
    await expect(page.locator('#screen')).toContainText('7');
  });
  
  test('number 8 show correct value', async ({ page }) => {
    
    await page.getByRole('button', { name: '8' }).click();
    await expect(page.locator('#screen')).toContainText('8');
  });
  
  test('number 9 show correct value', async ({ page }) => {
    
    await page.getByRole('button', { name: '9' }).click();
    await expect(page.locator('#screen')).toContainText('9');
  });

})


test('show operator + on click', async ({ page }) => {

  await page.getByRole('button', { name: 'sum' }).click();
  await expect(page.locator('#screen')).toContainText('+');
});

test('show operator - on click', async ({ page }) => {

  await page.getByRole('button', { name: 'soustraction' }).click();
  await expect(page.locator('#screen')).toContainText('-');
});

test('show operator * on click', async ({ page }) => {

  await page.getByRole('button', { name: 'multiplication' }).click();
  await expect(page.locator('#screen')).toContainText('*');
});

test('show operator = on click', async ({ page }) => {

  await page.getByRole('button', { name: '=' }).click();
  await expect(page.locator('#screen')).toContainText('=');
});

test('sum', async ({ page }) => {

  await page.getByRole('button', { name: '1' }).click();
  await page.getByRole('button', { name: 'sum' }).click();
  await page.getByRole('button', { name: '1' }).click();
  await page.getByRole('button', { name: '=' }).click();
  await expect(page.locator('#screen')).toContainText('2');

})

test('soustract', async ({ page }) => {

  await page.getByRole('button', { name: '1' }).click();
  await page.getByRole('button', { name: '2' }).click();
  await page.getByRole('button', { name: 'soustraction' }).click();
  await page.getByRole('button', { name: '5' }).click();
  await page.getByRole('button', { name: '=' }).click();
  await expect(page.locator('#screen')).toContainText('7');
})

test('multiply', async ({ page }) => {

  await page.getByRole('button', { name: '2' }).click();
  await page.getByRole('button', { name: 'multiplication' }).click();
  await page.getByRole('button', { name: '3' }).click();
  await page.getByRole('button', { name: '=' }).click();
  await expect(page.locator('#screen')).toContainText('6');
})

test('reset screen value', async ({ page }) => {

  await page.locator('#reset').click();
  await expect(page.locator('#screen')).toContainText('0');
})

test('change operator when other operator selected', async ({ page }) => {
  await page.getByRole('button', { name: '2' }).click();
  await page.getByRole('button', { name: 'multiplication' }).click();
  await page.getByRole('button', { name: '2' }).click();
  await page.getByRole('button', { name: 'sum' }).click();
  await expect(page.locator('#screen')).toContainText('+');

})


test('test', async ({ page }) => {
  await page.getByRole('button', { name: '0' }).click();
  await page.getByRole('button', { name: '1' }).click();
  await page.getByRole('button', { name: '2' }).click();
  await page.getByRole('button', { name: '3' }).click();
  await page.getByRole('button', { name: '4' }).click();
  await page.getByRole('button', { name: '5' }).click();
  await page.getByRole('button', { name: '6' }).click();
  await page.getByRole('button', { name: '7' }).click();
  await page.getByRole('button', { name: '8' }).click();
  await page.getByRole('button', { name: '9' }).click();
  await page.getByRole('button', { name: 'sum' }).click();
  await page.getByRole('button', { name: 'soustraction' }).click();
  await page.getByRole('button', { name: 'multiplication' }).click();
  await page.getByText('0').first().click();
  await page.getByRole('button', { name: '=' }).click();
});