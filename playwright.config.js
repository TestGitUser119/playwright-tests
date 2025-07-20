
import { defineConfig } from '@playwright/test';

export default defineConfig({
  workers: 2, // Run tests in 2 parallel threads
retries: 2, // Retry each failed test up to 2 times
  use: {
    headless: true, // Run browser in headless mode
  },
  reporter: [['html', { open: 'never' }]], // Generate HTML report without auto-opening


});

