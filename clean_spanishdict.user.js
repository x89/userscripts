// ==UserScript==
// @name        Clean up SpanishDict
// @namespace   *.spanishdict.com
// @include     http://www.spanishdict.com/*
// @version     1
// @grant       none
// ==/UserScript==

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