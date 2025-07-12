module.exports = {
  preset: 'jest-expo',
  setupFilesAfterEnv: ['@testing-library/jest-native/extend-expect'],
  transformIgnorePatterns: [
    'node_modules/(?!(jest-)?react-native|@react-native|@react-navigation|expo|expo-modules-core)',
  ],
  testPathIgnorePatterns: [
    "/node_modules/",
    "/src/__tests__/utils/"
  ],
}