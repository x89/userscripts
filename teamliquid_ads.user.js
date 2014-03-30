// ==UserScript==
// @name       Go to hell TL advertisment elephant 
// @namespace  http://trailbeans.eu/redditcleaner
// @version    4
// @description  Removes ads from TL
// @match      *://*.teamliquid.net/*
// @copyright  2014+, David Trail <userscripts@trailbeans.eu>
// ==/UserScript==

document.getElementById('fuab').remove();
var content = document.getElementById('main-content');

for (var i = 0; i < 3; i++) {
	// There are three ads without any 
	content.firstChild.remove();
}
