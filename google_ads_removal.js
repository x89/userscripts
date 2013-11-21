// ==UserScript==
// @name       Google's ads
// @namespace  http://trailbeans.eu/google-ad-remover
// @version    5
// @description  Remove the Google ads.
// @match      https://*.google.es/search*
// @copyright  2012+, You
// ==/UserScript==


// Remove the cookies bar (uses click method, not sure if more correct would be to simply hide it).
if (document.getElementById('epb-ok')) {
    document.getElementById('epb-ok').click();
	document.getElementById('epb-ok').remove();
}
 
for (var advert = document.getElementsByClassName('ads-container')[0]; document.getElementsByClassName('ads-container');) {
    advert.remove();
}
