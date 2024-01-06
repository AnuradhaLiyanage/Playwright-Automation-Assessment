import { expect, test } from "@playwright/test";

test("Verify the Register page User elements", async ({ page }) => {

    // goto register page
    await page.goto("https://onlinelibrary.wiley.com/action/registration?acdl-redirect=true");

    // Expect a title "Register for a new account - Wiley Online Library" a substring.
    await expect(page).toHaveTitle("Register for a new account - Wiley Online Library", { timeout: 10000 });

    // Check the input fields 
    const emailInputLocator = '//*[@id="login.email"]';
    const retypeEmailInputLocator = '//*[@id="login.email2"]';
    const passwordInputLocator = '//*[@id="login.password"]';
    const confirmPasswordInputLocator = '//*[@id="login.password2"]';


    // Check the input field placeholders
    const emailInput = await page.locator(emailInputLocator);
    const placeholderValue1 = await emailInput.getAttribute('placeholder');
    await expect(placeholderValue1).toBe('ex. user@institution.edu');

    const retypeEmailInput = await page.locator(retypeEmailInputLocator);
    const placeholderValue2 = await retypeEmailInput.getAttribute('placeholder');
    await expect(placeholderValue2).toBe('ex. user@institution.edu');

    const passwordInput = await page.locator(passwordInputLocator);
    const placeholderValue3 = await passwordInput.getAttribute('placeholder');
    await expect(placeholderValue3).toBe('Type your password');

    const confirmPasswordInput = await page.locator(confirmPasswordInputLocator);
    const placeholderValue4 = await confirmPasswordInput.getAttribute('placeholder');
    await expect(placeholderValue4).toBe('Re-type your password');

    

    // The email and password hint text is being visible
    await expect(page.getByText('A one-time confirmation email will be sent to this address. Your email address will serve as your login name.')).toBeVisible();
    await expect(page.getByText('Must be at least 10 characters long, and contain at least three of following: Lowercase letter (a-z) | Uppercase letter (A-Z) | Number (0-9) | Special Character')).toBeVisible();


    // Assert the "Let's stay in touch", "Terms of use", and "Verify registration " checked state
    const checkbox1 = page.getByLabel("Yes, please sign me up for the latest Wiley research news, event announcements, surveys and offers for my areas of interest. I agree to Wiley's Privacy Policy");
    await expect(checkbox1).not.toBeChecked();

    const checkbox2 = page.getByLabel('I have read and accept the Wiley Online Library Terms & Conditions of Use and Wiley Privacy Policy');
    await expect(checkbox2).not.toBeChecked();

    const checkbox3 = page.getByLabel("I'm not a robot");
    await expect(checkbox3).not.toBeChecked();
})