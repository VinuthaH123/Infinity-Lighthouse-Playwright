const { playAudit } = require('playwright-lighthouse');

class LighthouseUtil {
  static async runDashboardAudit(page) {
    await playAudit({
      page,
      port: 9222,
      thresholds: {
        performance: 80,
        accessibility: 80,
        seo: 80,
        'best-practices': 80,
      },
      reports: {
        formats: { html: true },
        name: 'dashboard-lighthouse-report',
        directory: 'lighthouse-report',
      },
    });
  }
}

module.exports = { LighthouseUtil };
