import { test, expect } from '@playwright/test';

test('Make Appointment - Login and verify URL and page heading', async ({ page }) => {

  // Step 1: Navigate to the home page
  await page.goto('https://katalon-demo-cura.herokuapp.com/');

  // Step 2: Click the "Make Appointment" button on the home page
  await page.click('#btn-make-appointment');

  // Step 3: Enter username and password on the login page
  await page.fill('#txt-username', 'John Doe');
  await page.fill('#txt-password', 'ThisIsNotAPassword');

  // Step 4: Click the Login button
  await page.click('#btn-login');

  // Step 5: Verify the URL has changed to the appointment page
  await expect(page).toHaveURL('https://katalon-demo-cura.herokuapp.com/#appointment');

  // Step 6: Verify the page heading "Make Appointment" is visible
  await expect(page.locator('h2', { hasText: 'Make Appointment' })).toBeVisible();

});
