
const testData = require("../testData/data.json");

module.exports = {
    "@tags": ["smokeTest"],

    //before method to define page objects and launch the site
    beforeEach: function (client) {
        this.launchPage = client.page.launchPage();
        this.searchResultPage = client.page.searchResultPage();
        client.maximizeWindow();
        this.launchPage
            .navigate().waitForElementVisible("@searchBox", 25000);
    },


    /*test to verify important elements on launch page such as search box, search button,
    site logo, title and helpful links lables*/
    "TC001:VerifyLaunchPageTest":
        function (client) {
            this.launchPage.assert.visible("@searchBox", "asserting if search text box is visible on launch page");
            this.launchPage.assert.visible("@searchBtn", "asserting if search button is visible on launch page");
            this.launchPage.verify.visible("@SiteNameLogo", "verifying site logo visible on launch page");
            client.perform(() => console.log("Getting page title"));
            client.getText(this.launchPage.elements.pageTitle.selector, title => {
                client.assert.equal(title.value, testData.launchPageTitle,
                    "asserting launch page title text");
            });
            client.perform(() => console.log("Getting Labels of helpful links such as Weather, Maps etc"));
            client.elements("css selector", this.launchPage.elements.importantLinks.selector,
                links => {
                    for (let i = 0; i < links.value.length; i++) {
                        client.elementIdText(links.value[i].ELEMENT, linkText => {
                            client.assert.equal(linkText.value, testData.helpfulLinks[i],
                                "Verifying helpful links on launch page")
                        })
                    }
                })
            client.end();
        },


    //test to verify valid wearther search for desired city        
    "TC002:weatherSearchTest":
        function (client) {
            let validSeatchData = testData.validCitySearch;
            this.launchPage.searchWeatherMap(validSeatchData);
            this.searchResultPage.waitForElementVisible("@searchedText", 5000);
            client.assert.urlContains("/find?q=", "verifiyng search result page url");
            client.perform(() => console.log("User navigates to search result page"))
                .assert.visible(this.searchResultPage.elements.resultSection.selector, "asserting if result section is visible")
                .getText(this.searchResultPage.elements.searchedText.selector, searchedText => {
                    client.assert.ok(testData.validCitySearch.includes(searchedText.value.trim()),
                        "asserting if search Result page has search box displaying searhed text");
                })
                .getText(this.searchResultPage.elements.weatherInfoText.selector, weatherInfoText => {
                    client.assert.ok(weatherInfoText.value.trim().includes(testData.weatherInfoText),
                        "aseerting weather info text string");
                });
            client.end();
        },


    //test to verify alert message on invalid weather search        
    "TC003:invalidWeatherSearchTest":
        function (client) {
            let invalidSearchData = testData.invalidCitySearch;
            this.launchPage.searchWeatherMap(invalidSearchData);
            this.searchResultPage.waitForElementVisible("@searchedTextBox", 15000);
            client.assert.urlContains("/find?q=", "verifiyng search result page url");
            client.perform(() => console.log("User navigates to search result page"));
            client.getAttribute(this.searchResultPage.elements.invalidSearchAlert.selector, "innerHTML", result => {
                client.assert.equal(result.value.split("/a>")[1], testData.invalidSearchAlertMessage,
                    "asserting invalid search alert messsage");
            });
            client.end();
        },


    //test to verify Sign In and Sign Up links navigation URLs        
    "TC004:Verify navigartion urls of values within 'Maps' drop down":
        function (client) {
            client.getAttribute(this.launchPage.elements.singInLink.selector, "href",
                signInLink => {
                    client.getAttribute(this.launchPage.elements.signUpLink.selector, "href",
                        signUpLink => {
                            client.assert.equal(signInLink.value, testData.signInUrl,
                                "asserting sign In link navigation url");
                            client.assert.equal(signUpLink.value, testData.signUpUrl,
                                "asserting sign Up link navigation url");
                        });
                })
            client.end();
        }
}