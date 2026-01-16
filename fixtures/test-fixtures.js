const base = require('@playwright/test');
const { AuthUtil } = require('../utils/authUtil');
const { DashboardPage } = require('../pages/DashboardPage');

exports.test = base.test.extend({
  dashboard: async ({ page }, use) => {
    await AuthUtil.login(page);

    const dashboard = new DashboardPage(page);
    await dashboard.verifyDashboardLoaded();

    await use(dashboard);
  },
});

exports.expect = base.expect;
