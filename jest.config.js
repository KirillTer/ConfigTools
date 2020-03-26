module.exports = {
  "collectCoverage": true,
  "coverageDirectory": "coverage",
  "collectCoverageFrom": [
    "src/containers/auth/Auth.spec.js",
    "!<rootDir>/node_modules/",
    "!<rootDir>/path/to/dir/"
  ],
  "coverageThreshold": {
    "global": {
      "branches": 90,
      "functions": 90,
      "lines": 90,
      "statements": 90
    }
  },
  "coverageReporters": ["text"],
  // "snapshotSerializers": ["my-serializer-module"]
}