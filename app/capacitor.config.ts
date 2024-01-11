import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'ca.bc.gov.moosetracker',
  appName: 'MooseTracker',
  webDir: 'dist',
  server: {
    androidScheme: 'https'
  }
};

export default config;
