const { test } = require('@playwright/test');
const { AuthUtil } = require('../../utils/authUtil');
const { LighthouseUtil } = require('../../utils/lighthouseUtil');

test('Lighthouse audit for Dashboard page', async ({ page }) => {
  // Login using existing util
  await AuthUtil.login(page);

  // Make sure dashboard is visible
  await page.locator('app-sidebar').getByText('Dashboard').waitFor();

  // Run Lighthouse audit
  await LighthouseUtil.runDashboardAudit(page);
});
