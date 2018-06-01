var clearblog = require('./clearblog');

// create config
var config = {
    "twitterLink": "https://twitter.com/chanochwiggers",
    "twitterLinkText": "Chanoch's twitter feed",
    "rights": "© 2018 chanoch.com. All rights reserved.",
    "email": "chanoch@clearbrook.it",
    "title": "clearblog",
    "strapline": "Wordpress inspired",
    "headerLinkText": "Linked In",
    "menuItems": [
        {"key": "home", "link": "/index.html", "linkText": "Home" },
    ]
}

clearblog(config);
