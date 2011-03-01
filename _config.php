<?php


HtmlEditorConfig::get('cms')->setButtonsForLine(1, "bold,italic,underline,strikethrough,separator,justifyleft,justifycenter,justifyright,justifyfull,styleselect,formatselect,separator,bullist,numlist,outdent,indent,blockquote,hr,charmap,toggletoolbars");

HtmlEditorConfig::get('cms')->setButtonsForLine(2, "undo,redo,separator,cut,copy,paste,pastetext,pasteword,spellchecker,separator,ssimage,ssflash,sslink,unlink,anchor,separator,advcode,fullscreen,separator,search,replace,selectall,visualaid,separator");

HtmlEditorConfig::get('cms')->setButtonsForLine(3, "tablecontrols");



HtmlEditorConfig::get('cms')->enablePlugins(array('-toggletoolbars', '../../../../toggletoolbars/javascript/'));

/*
 Can be used to define which toolbars are NOT toggled (ie are always visible)
 Defualts to "1"
*/
//HtmlEditorConfig::get('cms')->setOption('toggle_toolbar_ignore', '1,2'));


