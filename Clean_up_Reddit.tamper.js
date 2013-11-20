// ==UserScript==
// @name       Clean_up_Reddit
// @namespace  http://trailbeans.eu/redditcleaner
// @version    3
// @description  Reddit cleaner
// @match      *://*.reddit.com/*
// @copyright  2013+, David Trail <userscripts@trailbeans.eu>
// ==/UserScript==

var ad_class_names = [
    'goldvertisment',
    'organic-listing',
    'show-placeholder',
    'listing-chooser'
    ];

var i1;

for (i1 = 0; i1 < ad_class_names.length; i1++) {
    var name = ad_class_names[i1];
    var classes = document.getElementsByClassName(name);

    var i2;
    for (i2 = 0; i2 < classes.length; i2++) {
		classes[i2].remove();
    }
}
