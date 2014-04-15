// ==UserScript==
// @name       clean_up_reddit
// @namespace  http://trailbeans.eu/redditcleaner
// @version    12
// @description  Reddit cleaner
// @match      *://*.reddit.com/*
// @copyright  2013+, David Trail <userscripts@trailbeans.eu>
// ==/UserScript==

var classes_to_destroy = [
	'organic-listing',
	'show-placeholder',
	'listing-chooser',
	'goldvertisement', // Gold advert
	'footer-parent', // Footer. Takes up too much space, nobody uses it
	'trending-subreddits',
	'side-message'
    ];

var i1;

for (i1 = 0; i1 < classes_to_destroy.length; i1++) {
    var name = classes_to_destroy[i1];
    var classes = document.getElementsByClassName(name);

    var i2;
    for (i2 = 0; i2 < classes.length; i2++) {
		classes[i2].remove();
    }
}

// The left bar crap leaves a 150px+ margin-left.
var content = document.getElementsByClassName('content')[0];
content.style.marginLeft = 0;
