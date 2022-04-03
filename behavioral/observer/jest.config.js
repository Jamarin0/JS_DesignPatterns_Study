export default {
  clearMocks: true,
  collectCoverage: true,
  coverageDirectory: "coverage",
  coverageProvider: "v8",
  coverageReporters: [
    "json",
    "text",
    "lcov",
    "clover"
  ],
  coverageThreshold: {
    global: {
      branch: 100,
      fuctions: 100,
      lines: 100,
      statments:100
    }
  },  
  maxWorkers: "50%",
  testEnvironment: "jest-environment-node",
};
