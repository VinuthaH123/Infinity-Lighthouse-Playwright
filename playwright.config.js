const { defineConfig } = require('@playwright/test');

module.exports = defineConfig({
  testDir: './tests',
  timeout: 90000,
  retries: 0,
  workers: 1,

  use: {
    baseURL: 'https://infinity.starlajewels.com',
    headless: true,
  },

  projects: [
    {
      name: 'Desktop Chrome',
      use: {
        browserName: 'chromium',
        viewport: { width: 1920, height: 1080 },
      },
    },

    // ✅ Lighthouse-only project
    {
      name: 'Lighthouse Chrome',
      use: {
        browserName: 'chromium',
            channel: 'chrome', // ✅ IMPORTANT
          headless: true,

        viewport: { width: 1920, height: 1080 },
        launchOptions: {
          args: ['--remote-debugging-port=9222'],
        },
      },
    },
  ],

  reporter: [['html', { open: 'never' }]],
});
