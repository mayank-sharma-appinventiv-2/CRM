export default {
  transform: {
    "^.+\\.tsx?$": "babel-jest", // Transform TypeScript and JSX files using Babel
  },
  testEnvironment: "jsdom",
  setupFilesAfterEnv: ["./jest.setup.js"], // Ensure this path is correct
  moduleFileExtensions: ["ts", "tsx", "js", "jsx"],
  moduleNameMapper: {
    "\\.(css|less|sass|scss)$": "identity-obj-proxy", // Mock CSS imports
  },
  transformIgnorePatterns: ["/node_modules/"], // Ignore transformations in node_modules
};
