// ==UserScript==
// @name       clean_chess.com
// @namespace  http://trailbeans.eu/chesscleaner
// @version    1
// @description  Chess.com cleaner
// @match      *://*.chess.com/*
// @copyright  2014+, David Trail <userscripts@trailbeans.eu>
// ==/UserScript==


// Straight up annoying <div>s
var divs_to_die = ['tpb1', 'user-upgrade-message-text'];

for (var i = 0; i < divs_to_die.length; i++) {
	document.getElementById(divs_to_die[i]).remove();
}

// That ad shit on the right
document.getElementsByClassName('sidebar right')[0].firstChild.remove()
