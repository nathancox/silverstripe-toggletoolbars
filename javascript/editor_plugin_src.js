(function() {
	tinymce.create('tinymce.plugins.ToggleToolbars', {
		/**
		* Initializes the plugin
		*
		* @param {tinymce.Editor} ed Editor instance that the plugin is initialized in.
		* @param {string} url Absolute URL to where the plugin is located.
		*/
		init : function(ed, url) {
			
			// store the current state (hidden|visible).  Was going to use the button's active state but might one day want to use this withouth the button
			ed.settings.toggleToolbarState = 'hidden';
			
			if (!ed.settings.toggle_toolbar_ignore) {
				ed.settings.toggle_toolbar_ignore = '1';
			}
			
			// store a reference to the editor so we can get to it in toggleToolbars();
			this.ed = ed;
			
			// store a list of IDs of toggleable toolbars
			this.toolbars = false;
			
			// reference to this stored so we can use it in addCommand()
			var thisPlugin = this;
			
			
			// Register the command
			ed.addCommand('toggleToolbars', function() {
				//	var buttonActive = ed.controlManager.get('toggletoolbars').active;
				
				// just a toggle: if the buttons are currently hidden, show them. If they're visible, hide them.
				if (ed.settings.toggleToolbarState == 'hidden') {
					thisPlugin.toggleToolbars('show');
				} else {
					thisPlugin.toggleToolbars('hide');
				}

			});
			
			// runs when the editor has finished rendering
			ed.onPostRender.add(function() {

				var cookieVal = tinymce.util.Cookie.get('TinyMCEToggleToolbars');
				if (cookieVal == null || cookieVal == 'hidden') {
					thisPlugin.toggleToolbars('hide');
				} else {
					thisPlugin.toggleToolbars('show');
				}
				
			});
			

			// Register button
			ed.addButton('toggletoolbars', {
				title : 'Toggle advanced toolbars',
				cmd : 'toggleToolbars',
				image : 'toggletoolbars/javascript/img/toolbars.gif'
			});
			
			
		},
		
		
		
		
		/**
		 * Does the actual show/hide and toggles the button's active state
		 *
		 * @param {string} action whether to hide the toolbars (1 = hide, 0 = show)
		 * @return {string} new toolbar state
		 */
		toggleToolbars: function(action) {
			if (!this.toolbars) {
				this.toolbars = this.getToolbarList();
				if (this.toolbars.length < 1) {
					return;
				} 
				this.toolbarContainer = document.getElementById(this.toolbars[0].id).parentNode;
			}
			
			var initialHeight = this.toolbarContainer.clientHeight;
			
			var i;
			if (action == 'hide') {
				for (i = 0; i < this.toolbars.length; i++) {
					tinymce.DOM.hide(this.toolbars[i].id);
				}
				this.ed.controlManager.setActive('toggletoolbars', 0);
				this.ed.settings.toggleToolbarState = 'hidden';
			} else if (action == 'show') {
				for (i = 0; i < this.toolbars.length; i++) {
					tinymce.DOM.show(this.toolbars[i].id);
				}
				this.ed.controlManager.setActive('toggletoolbars', 1);
				this.ed.settings.toggleToolbarState = 'visible';
			}
			
			var finalHeight = this.toolbarContainer.clientHeight;
			var heightDifference = initialHeight - finalHeight;
			var iframe = this.ed.getContentAreaContainer().firstChild;
			// Resize iframe
			tinymce.DOM.setStyle(iframe, 'height', iframe.clientHeight + heightDifference);
			this.ed.theme.deltaHeight += heightDifference; // For resize cookie
			
			tinymce.util.Cookie.set('TinyMCEToggleToolbars', this.ed.settings.toggleToolbarState);
			
			return this.ed.settings.toggleToolbarState;
		},
		
		
		
		
		/**
		 * @return {array} array of toolbar objects we want to toggle
		 */
		getToolbarList: function() {
			var toolbars = new Array();
			var toolbarsToIgnore = ','+this.ed.settings.toggle_toolbar_ignore.split(' ').join('')+',';
			var i = 0;
			while (i = i+1, i < 90) {
				// ugly I know, but it finds in array
				if (toolbarsToIgnore.indexOf(','+i+',') >= 0) {
					continue;
				}
				
				var toolbar = this.ed.controlManager.get('toolbar'+i);
				if(typeof toolbar == 'undefined') {
					break;
				}
				
				toolbars.push(toolbar);
			}
			
			return toolbars;
		},
		

		/**
		* Returns information about the plugin
		*
		* @return {Object} Name/value array containing information about the plugin.
		*/
		getInfo : function() {
			return {
				longname : 'Toggle Toolbar Visibility',
				author : 'Nathan Cox',
				authorurl : 'http://www.flyingmonkey.co.nz',
				infourl : '',
				version : "1.0"
			};
		}
	});

	// Register plugin
	tinymce.PluginManager.add('toggletoolbars', tinymce.plugins.ToggleToolbars);
})();