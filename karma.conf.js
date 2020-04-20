module.exports = function (config) {
  config.set({
    frameworks: ["jasmine", "jasmine-matchers"],
    preprocessors: {
      "src/lib/*.js": ["coverage"],
    },
    files: ["./src/lib/*.js", "./src/lib/*.spec.js"],
    plugins: [
      "karma-jasmine",
      "karma-jasmine-matchers",
      "karma-chrome-launcher",
      "karma-coverage",
    ],
    reporters: ["dots", "coverage"],
    color: true,
    singleRun: true,
    browsers: ["ChromeHeadless"],
    coverageReporter: {
      dir: "coverage/",
      reporters: [{ type: "html", subdir: "html" }],
    },
  });
};
