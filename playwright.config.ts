import { defineConfig, devices } from '@playwright/test';


export default defineConfig({
  testDir: './tests',
  testMatch:["tests/HeartRateDataTest.spec.ts"],
  
  fullyParallel: true,
  
  reporter: 'html',
 
  use: {
   
    trace: 'on-first-retry',
  },

 
  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    }

  ]  
});
