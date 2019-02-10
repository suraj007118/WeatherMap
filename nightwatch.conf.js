module.exports = (function(settings) {
  settings.test_workers = false;
  settings.selenium.start_process = true;
  return settings;
})(require('./nightwatch.json'));
