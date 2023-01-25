const {
  addMatchImageSnapshotCommand,
} = require('cypress-image-snapshot/command');
require('./commands'); // import your custom commands

module.exports = (on, config) => {
  addMatchImageSnapshotCommand({
    failureThreshold: 0.03,
    failureThresholdType: 'percent',
    customDiffConfig: { threshold: 0.01 },
    capture: 'viewport',
  });
};
