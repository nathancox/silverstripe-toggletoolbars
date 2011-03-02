SilverStripe TinyMCE Toggle Toolbars
===================================

Maintainer Contacts
-------------------
*  Nathan Cox (<nathan@flyingmonkey.co.nz>)

Requirements
------------
* SilverStripe 2.4+

Documentation
-------------
[GitHub Wiki](https://github.com/nathancox/silverstripe-toggletoolbars)

Installation Instructions
-------------------------

1. Place the files in a directory called toggletoolbars in the root of your SilverStripe installation
2. Visit yoursite.com/dev/build to rebuild the database

Usage Overview
--------------

The _config.php file will automatically rearrange TinyMCE toolbar buttons in the CMS, and add the toggle button to the first row.

To arrange the buttons differently, for now just move the setButtonsForLine() calls in toggletoolbars/_config.php to mysite/_config.php and edit as you please.  Make sure to include the "toggletoolbars" button.

By default the plugin will hide/toggle all toolbars except the first one.  If you want to exclude other toolbars you need to set a TinyMCE option in your site's _config.php:

	HtmlEditorConfig::get('cms')->setOption('toggle_toolbar_ignore', '1,2'));
	
The line above will exclude toolbars one and two, so only toolbars three and higher (if they exist) will be hidden.

The plugin will set a cookie whenever the the toolbars are toggled, so it will remember the user's preference.



Known Issues
------------
[Issue Tracker](https://github.com/nathancox/silverstripe-toggletoolbars/issues)