// ==UserScript==
// @name       Google's ads
// @namespace  http://trailbeans.eu/google-ad-remover
// @version    6
// @description  Remove the Google ads.
// @match      https://*.google.es/search*
// @copyright  2012+, You
// ==/UserScript==

sleep(500);
// Remove the cookies bar (uses click method, not sure if more correct would be to simply hide it).
if (document.getElementById('epb-ok')) {
    document.getElementById('epb-ok').click();
	document.getElementById('epb-ok').remove();
}

divs = [
	'tads',
	'rhs_block',
]

for (var i = 0; i < divs.length; i++)
	document.getElementById(divs[i]).remove()
