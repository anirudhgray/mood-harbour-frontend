import puppeteer from 'puppeteer';

describe('Login', () => {
  test('user can login and see the dashboard', async () => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();

    // Navigate to the login page
    await page.goto('http://localhost:3000/login');

    // Fill in the login form
    await page.type('#email', 'testuser');
    await page.type('#password', 'testpassword');

    // Submit the login form
    await Promise.all([
      page.waitForNavigation(), // The promise resolves after navigation has finished
      page.click('#submit'), // Clicking the link will indirectly cause a navigation
    ]);

    // Check that we have been redirected to the dashboard
    expect(page.url()).toBe('http://localhost:3000/dashboard');

    await browser.close();
  }, 16000); // The test has a time limit of 16 seconds
});
