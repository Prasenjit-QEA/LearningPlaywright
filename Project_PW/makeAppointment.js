const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch({ headless: false, slowMo: 500 });
  const page = await browser.newPage();

  // Step 1: Navigate to the home page
  console.log('Step 1: Navigating to CURA Healthcare home page...');
  await page.goto('https://katalon-demo-cura.herokuapp.com/');

  // Step 2: Click the "Make Appointment" button on the home page
  console.log('Step 2: Clicking "Make Appointment" button...');
  await page.click('#btn-make-appointment');

  // Step 3: Enter username and password on the login page
  console.log('Step 3: Entering login credentials...');
  await page.fill('#txt-username', 'John Doe');
  await page.fill('#txt-password', 'ThisIsNotAPassword');

  // Step 4: Click the Login button
  console.log('Step 4: Clicking Login button...');
  await page.click('#btn-login');

  // Step 5: Verify the URL has changed to the appointment page
  console.log('Step 5: Verifying URL...');
  await page.waitForURL('https://katalon-demo-cura.herokuapp.com/#appointment');
  const currentURL = page.url();
  console.log(`  Current URL: ${currentURL}`);

  if (currentURL === 'https://katalon-demo-cura.herokuapp.com/#appointment') {
    console.log(' URL verification PASSED!');
  } else {
    console.log('URL verification FAILED!');
    console.log(`Expected: https://katalon-demo-cura.herokuapp.com/#appointment`);
    console.log(`Got: ${currentURL}`);
  }

  // Step 6: Verify the page heading "Make Appointment" is visible
  console.log('Step 6: Verifying page heading "Make Appointment"...');
  const heading = await page.locator('h2', { hasText: 'Make Appointment' });
  const isVisible = await heading.isVisible();

  if (isVisible) {
    const headingText = await heading.textContent();
    console.log(`Page heading verification PASSED! Found: "${headingText.trim()}"`);
  } else {
    console.log('Page heading "Make Appointment" not found on the page!');
  }

  console.log('\n=== Test Complete ===');

  await browser.close();
})();
