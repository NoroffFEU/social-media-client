const jestConfig = {
  verbose: true,
  transform: {
    "^.+\\.js?$": "babel-jest",
  },

  testMatch: ["<rootDir>/**/*test.js"],
};

module.exports = jestConfig;

// testMatch: [
//     '/src/js/**/*test.js',
// ],
