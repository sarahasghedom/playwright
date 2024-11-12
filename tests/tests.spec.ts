import { test, expect } from '@playwright/test';

test.beforeEach(async ({ page }) => {
    await page.goto('https://automationintesting.online/');
});

test('Open test page', async({page}) => {
    //check page title
    await expect(page).toHaveTitle(/Restful-booker-platform demo/);
})

test('Book a room', async({page}) => {
    //Use the booking form
    await page.getByRole('button', { name: 'Book this room' }).click();
    await page.getByPlaceholder('Firstname').fill('John');
    await page.getByPlaceholder('Lastname').fill('Doe');
    await page.locator('input[name="email"]').fill('john.doe@test.abc');
    await page.locator('input[name="phone"]').fill('00123456789011');
    await page.getByRole('button', { name: 'Today' }).click();
    await page.getByRole('button', { name: 'Book' }).click();
});

test('Send a message through the contact form', async({page}) => {
    //Use the contact form
    await page.getByTestId('ContactName').fill('Contact name');
    await page.getByTestId('ContactEmail').fill('info@test.abc');
    await page.getByTestId('ContactPhone').fill('0012345678900');
    await page.getByTestId('ContactSubject').fill('Subject of message');
    await page.getByTestId('ContactDescription').fill('The entire message will be written and send from here.');
    await page.getByRole('button', { name: 'Submit' }).click();
    //Check Thank you message
    await expect(page.getByRole('heading', { name: 'Thanks for getting in touch' })).toBeVisible();

})
