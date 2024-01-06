import { expect, test } from "@playwright/test";

test.only("Verify the Register page User elements", async ({ page }) => {

    // goto register page and locate to the email input feild
    await page.goto("https://onlinelibrary.wiley.com/action/registration?acdl-redirect=true");

    // Expect a title "Register for a new account - Wiley Online Library" a substring.
    await expect(page).toHaveTitle("Register for a new account - Wiley Online Library", { timeout: 10000 });

    // Check the “Email” input field
    const emailInputLocator = '//*[@id="login.email"]';

    // The placeholder should be “ex. user@institution.edu”.
    const emailInput = await page.locator(emailInputLocator);
    const placeholderValue = await emailInput.getAttribute('placeholder');
    await expect(placeholderValue).toBe('ex. user@institution.edu');
})