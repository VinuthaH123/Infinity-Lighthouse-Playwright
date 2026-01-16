const user = require('../auth/user.json');

class AuthUtil {
  static async login(page) {
    // Clear cookies & permissions
    await page.context().clearCookies();
    await page.context().clearPermissions();

    // baseURL is used from config
    await page.goto('/login', { waitUntil: 'domcontentloaded' });

    await page.fill('#user_email', user.email);
    await page.fill('#password', user.password);
    await page.click('button[type="submit"]');

    // Dashboard loaded confirmation (URL not changing reliably)
    await page.locator('.username').waitFor();
    


  }

  static async logout(page) {
    await page.click('text=Logout');
    await page.waitForURL('**/login');
  }
}

module.exports = { AuthUtil };
