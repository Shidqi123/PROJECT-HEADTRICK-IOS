// Configuration File for SaiKuto

const APP_CONFIG = {
  // App Info
  appName: "SaiKuto",
  appVersion: "2.0",
  developer: "Kutoo",
  
  // iOS Support
  minIOSVersion: "14.0",
  maxIOSVersion: "26.1",
  supportedVersions: "14.0 - 26.1",
  
  // Free Fire Settings
  freeFireSchemes: [
    "freefiremax://",
    "freefire://",
    "https://freefiremobile.com/game"
  ],
  
  // Login System
  requireLogin: true,
  sessionTimeout: 24, // hours
  
  // Features
  enabledFeatures: {
    aimAssist: true,
    antiBan: true,
    headshot: true,
    headshotCrosshair: true,
    recoilControl: true,
    performanceMode: true,
    reducePing: true,
    highFPS: true,
    touchBoost: true,
    threeDTouch: true
  },
  
  // PWA Settings
  pwaSettings: {
    cacheName: "saikuto-v5",
    offlineSupport: true,
    installPrompt: true
  }
};

// Export config
if (typeof module !== 'undefined' && module.exports) {
  module.exports = APP_CONFIG;
}
