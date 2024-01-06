import { test, expect } from '@playwright/test';

const SEARCH_BOX = '//*[@id="searchField1"]';

const ISBN = '9781405125772';

test('Verify the publications/articles search functionality of onlinelibrary.wiley.com', async ({ page }) => {
  await page.goto('https://onlinelibrary.wiley.com/');

  // Expect a title "Wiley Online Library | Scientific research articles, journals, books, and reference works" a substring.
  await expect(page).toHaveTitle("Wiley Online Library | Scientific research articles, journals, books, and reference works", {timeout: 10000});

  //search ISBN 9781405125772
  await page.locator(SEARCH_BOX).pressSequentially(ISBN);

  await page.keyboard.press('Enter');

  
});




