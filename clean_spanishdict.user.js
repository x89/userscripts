// ==UserScript==
// @name        Clean up SpanishDict
// @description Removes the tam from SD
// @namespace   http://trailbeans.eu/spanishdictcleaner
// @match    	*://*.spanishdict.com/*
// @version     3
// ==/UserScript==

function run_clean() {
	document.getElementById('survey_container').remove();

	var class_names = [
		'fluencia-bar', // that shit at the top
		'content', // For some reason they call "content" the sidebar
	];

	for (var i = 0; i < class_names.length; i++) {
		var classes = document.getElementsByClassName(class_names[i]);
		for (var j = 0; j < classes.length; j++) {
			classes[j].remove();
		}  
	}
}

setTimeout(run_clean, 150);
