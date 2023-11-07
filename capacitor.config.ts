import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'examination.app',
  appName: 'examination-app',
  webDir: 'dist',
  server: {
    androidScheme: 'https'
  }
};

export default config;
