

module.exports = {
  url() {
    return this.api.launch_url;
  },
  elements: {
    searchBox: "div[class='row search-cities'] input[id=q]",
    searchBtn: "button[class='btn btn-orange']",
    SiteNameLogo: "a[class='navbar-brand'] img",
    pageTitle: "h2[class='widget__title']",
    mapsDropDown:"ul[class='nav navbar-nav navbar-right']>li:nth-child(2)",
    mapsDropDownUrls:"ul[class='nav navbar-nav navbar-right']>li:nth-child(2) ul li a",
    importantLinks: "ul[class='nav navbar-nav navbar-right'] li[class^='nav__item']>a",
    singInLink:"div[class=row] div[class$='hidden-xs'] a:nth-child(3)",
    signUpLink:"div[class=row] div[class$='hidden-xs'] a:nth-child(2)"
  
  },
  commands: [{

    searchWeatherMap(testData) {
      this.clearValue("@searchBox")
        .setValue("@searchBox", testData)
        .click("@searchBtn");
      return this;
    },
    }]
};