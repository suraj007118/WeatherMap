# WeatherMap UI auotomation using Nightwatch.js framework. The project implements page object model (POM)
  

# Pre-requsites
* [Node.js v8.11.1 and above](https://nodejs.org/en/download/)
* npm v5.6.0 and above
* [nightwatch@0.9.21](http://nightwatchjs.org/)

Note: code has been tested working with nightwatch 0.9.21 for version >=1.0 you may refer -
[for nightwatch v1.0 and above](https://github.com/nightwatchjs/nightwatch/wiki/Migrating-to-Nightwatch-1.0)

# How to Run Tests

## Once you clone the repo check out project folder and run below commands-

* npm install (to download dependancies from package.json)
* npm install nightwatch-html-reporter

### Local machine execution
* nightwatch tests/weatherMapTest.js --env firefox or
* nightwatch tests/weatherMapTest.js --env chrome
OR
* You can change script command 'test' in package.json and run below command 
  * npm test

### docker selenium grid execution
npm run docker-run

Test were run successfully against chorme(v72.0.36) and Firefox(v65.0) browsers with above versions on windows 10 home version



## Bonus -
* HTML reports
	HTML reports generated in reports folder by name 'automation-execution-reports.html'
	The report is user friendly and shows all the tests executed with pass / fail
	It shows error messasge for failed tests

	To run smoke tests with html report you need to first install the npm package -
	 * npm install nightwatch-html-reporter

	To run the test user below command (with addtional flag --reporter)
	* nightwatch tests/weatherMapTest.js --env chrome --reporter html-reporter.js

* Dockerized selenium grid for test case execution
	* Pre-requisite:
		* windows 10 professional 64 bit
		* [docker for windows](https://docs.docker.com/docker-for-windows/install/)

	You can setup selenium grid with 1 chrome and 1 firefox container which can have max 10 browser sessions at a time.
	This containers would run on your local and you can still use user machine for regular work without itteruption.
	
## Test cases covered in smoke suite

* 1.TC001:VerifyLaunchPageTest -
	* scope- Asserts search button, search text, page title and site Logo being most important and must have.
	       Also, verifies Labelsd of 9 information links.

* 2.TC002:weatherSearchTest -
	* Scope - Searches for Tokyo, JP and verified search result page for url, search box still displaying entered search test on launch page.Asserts weather result section and existance of certain string.
		

* 3.TC003:invalidWeatherSearchTest -
	* Scope - Searches for invalid city and asserts alert test message

* 4.TC004:Verify navigartion urls of values within 'Maps' drop down -	
	* Scope - Asserts Sign In and Sign Up links navigation links
