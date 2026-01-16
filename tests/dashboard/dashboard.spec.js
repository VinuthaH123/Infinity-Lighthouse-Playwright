const { test } = require('../../fixtures/test-fixtures');

test('Verify dashboard menu elements presence', async ({ dashboard }) => {
  await dashboard.verifyDashboardLoaded();
  await dashboard.verifyHeader();
  await dashboard.verifyLeftMenu();
  await dashboard.logout();
});
