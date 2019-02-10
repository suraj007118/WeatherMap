This is UI auotmation project of WeatherMAP site portal using Nightwatch.js framework.

Nightwatch.js is an integrated, easy to use End-to-End testing solution for browser based apps and websites,
written on Node.js. It uses the W3C WebDriver API to perform commands and assertions on DOM elements.

The code base includes a smoke test which involves four test cases-

1. TC001:VerifyLaunchPageTest -
	scope- Asserts search button, search text, page title and site Logo being most important and must have.
	       Also, verifies Labelsd of 9 information links.

2.TC002:weatherSearchTest -
	Scope - Searches for Tokyo, JP and verified search result page for url, search box still displaying entered search test on launch page.
		Asserts weather result section and existance of certain string.

3.TC003:invalidWeatherSearchTest -
	Scope - Searches for invalid city and asserts alert test message

4.TC004:Verify navigartion urls of values within 'Maps' drop down -	
	Scope - Asserts Sign In and Sign Up links navigation links

How to Execute Tests:

You need below softwares to run tests 
Node.js v8.11.1
npm v5.6.0
nightwach v0.9.21
Test were run successfully against chorme(v72.0.36) and Firefox(v65.0) browsers with above versions on windows 10 home

Once you clone the repo check out project folder and run below commands-

npm install (this would install all dependancies from package.json)
nightwatch tests/weatherMapTest.js --env chrome or
nightwatch tests/weatherMapTest.js --env firefox


Bonus -

HTML reports generated in reports folder by name 'automation-execution-reports.html'
The report is user friendly and shows all the tests executed with pass / fail
It shows error messasge for failed tests

to run smoke tests with html report you need to first install the npm package -
 npm install nightwatch-html-reporter

To run the test user below command (with addtional flag --reporter)
nightwatch tests/weatherMapTest.js --env chrome --reporter html-reporter.js




 	
			 