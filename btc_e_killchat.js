// ==UserScript==
// @name       Remove chat from BTC-e
// @namespace  http://trailbeans.eu/btc-e-chat-killer
// @version    0.4
// @description  Removes superfluous crap from BTC-e.com
// @match      https://*.btc-e.com/*
// @copyright  2013+, David Trail <userscripts@trailbeans.eu>
// ==/UserScript==

document.getElementById('nChatCon').parentNode.remove();
document.getElementById('users-online').parentNode.remove();
document.getElementById('twitter-widget-0').parentNode.remove();
