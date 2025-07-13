/* eslint-disable no-undef */
/* eslint-disable @typescript-eslint/no-require-imports */
const { getDefaultConfig } = require('expo/metro-config');

const config = getDefaultConfig(__dirname);

config.resolver.alias = {
  "@assets": "./assets",
  "@components": "./src/components",
  "@screens": "./src/screens",
  "@context": "./src/context",
  "@services": "./src/services",
  "@tests": "./src/__tests__",
};

module.exports = config;
