export const preset = "jest-expo";
export const setupFilesAfterEnv = [
  "@testing-library/jest-native/extend-expect",
];
export const transformIgnorePatterns = [
  "node_modules/(?!(jest-)?react-native|@react-native|@react-navigation|expo|expo-modules-core)",
];
export const testPathIgnorePatterns = [
  "/node_modules/",
  "/src/__tests__/utils/",
];
