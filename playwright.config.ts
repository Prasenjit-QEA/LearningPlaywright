import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  testDir: './Project_PW',
  timeout: 30000,
  use: {
    headless: false,
    slowMo: 500,
    screenshot: 'only-on-failure',
    video: 'retain-on-failure',
  },
  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },
  ],
});
