// @ts-check
import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  testDir: './tests',

  /* Global timeout */
  timeout: 90 * 1000,

  expect: {
    timeout: 5000,
  },

  /* Run tests in parallel */
  fullyParallel: false,

  /* Retries */
  retries: process.env.CI ? 1 : 0,

  /* Workers */
  //workers: process.env.CI ? 1 : 1,

  /* Reporter */

    reporter: [['html', { open: 'never' }]],


  /* Shared settings */
  use: {
    baseURL: 'https://infinity.starlajewels.com',
    trace: 'retain-on-failure',
    //screenshot: 'only-on-failure',
   // video: 'retain-on-failure',
  },

  /* Projects */
  projects: [
    // -----------------------------------------
    // 1️⃣ NORMAL UI TESTS (NO LIGHTHOUSE)
    // -----------------------------------------
    {
      name: 'Desktop Chrome',
      use: {
        ...devices['Desktop Chrome'],
      },
      testIgnore: /.*\.lh\.spec\.js/, // 👈 IMPORTANT
    },

    // -----------------------------------------
    // 2️⃣ LIGHTHOUSE TESTS ONLY
    // -----------------------------------------
    {
      name: 'Lighthouse Chrome',
      use: {
        browserName: 'chromium',
        launchOptions: {
          args: [
            '--remote-debugging-port=9222', // 👈 REQUIRED
            '--no-sandbox',
            '--disable-dev-shm-usage',
          ],
        },
      },
      testMatch: /.*\.lh\.spec\.js/, // 👈 IMPORTANT
    },
  ],
});
