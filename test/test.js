
/**
 *  WD Test configuration
 */


var webdriver = require('wd')
    , assert = require('assert');

var browser = webdriver.remote(
    "ondemand.saucelabs.com"
    , 80
    , "martinwoitzik"
    , "9eb269c6-a2d2-49b5-af1d-f1eb405f1f46"
);

browser.on('status', function(info){
    console.log('\x1b[36m%s\x1b[0m', info);
});

browser.on('command', function(meth, path){
    console.log(' > \x1b[33m%s\x1b[0m: %s', meth, path);
});

var desired = {
    browserName: 'iphone'
    , version: '5.0'
    , platform: 'Mac 10.6'
    , tags: ["examples"]
    , name: "This is an example test"
}

browser.init(desired, function() {
    browser.get("http://hello-world-app.herokuapp.com/", function() {
        browser.title(function(err, title) {
            assert.ok(~title.indexOf('Meine kleine Welt App'), 'Wrong title!');

            /*
            browser.elementById('submit', function(err, el) {
                browser.clickElement(el, function() {
                    browser.eval("window.location.href", function(err, href) {
                        assert.ok(~href.indexOf('login'), 'Wrong URL!');
                        browser.quit()
                    })
                })
            })
            */
        })
    })
})