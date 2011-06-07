<?php

// strikethrough,outdent,indent,selectall,spellchecker,justifyleft,justifycenter,justifyright,justifyfull,blockquote


HtmlEditorConfig::get('cms')->setButtonsForLine(1, "bold,italic,underline,separator,sslink,unlink,styleselect,formatselect,separator,bullist,numlist,ssimage,charmap,toggletoolbars");
HtmlEditorConfig::get('cms')->setButtonsForLine(2, "undo,redo,separator,cut,copy,paste,pastetext,pasteword,separator,ssflash,anchor,hr,separator,advcode,fullscreen,separator,search,replace,visualaid");
HtmlEditorConfig::get('cms')->setButtonsForLine(3, "tablecontrols");



// load the plugin
HtmlEditorConfig::get('cms')->enablePlugins(array('-toggletoolbars', '../../../../toggletoolbars/javascript/'));

/*
 Can be used to define which toolbars are NOT toggled (ie are always visible)
 Defaults to "1"
*/

HtmlEditorConfig::get('cms')->setOption('toggle_toolbar_ignore', '1,2');


