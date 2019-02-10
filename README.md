# WeatherMap UI auotomation using Nightwatch.js framework. The project implements page object model (POM)
  

# Pre-requsites
* Node.js v8.11.1 and above
* npm v5.6.0 and above
* nightwatch@0.9.21

Note: code has been tested working with nightwatch 0.9.21 for version >=1.0 you may refer -
[for nightwatch v1.0 and above](https://github.com/nightwatchjs/nightwatch/wiki/Migrating-to-Nightwatch-1.0)

# How to Run Tests

## Once you clone the repo check out project folder and run below commands-

* npm install (to download dependancies from package.json)
* nightwatch tests/weatherMapTest.js --env firefox or
* nightwatch tests/weatherMapTest.js --env chrome

Test were run successfully against chorme(v72.0.36) and Firefox(v65.0) browsers with above versions on windows 10 home version

# Bonus -

HTML reports generated in reports folder by name 'automation-execution-reports.html'
The report is user friendly and shows all the tests executed with pass / fail
It shows error messasge for failed tests

To run smoke tests with html report you need to first install the npm package -
 * npm install nightwatch-html-reporter

To run the test user below command (with addtional flag --reporter)
* nightwatch tests/weatherMapTest.js --env chrome --reporter html-reporter.js
