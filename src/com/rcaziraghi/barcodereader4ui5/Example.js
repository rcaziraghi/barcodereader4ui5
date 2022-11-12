/*!
 * ${copyright}
 */

// Provides control com.rcaziraghi.barcodereader4ui5.Example.
sap.ui.define([
	"./library", 
	"sap/ui/core/Control", 
	"./ExampleRenderer"
], function (library, Control, ExampleRenderer) {
	"use strict";

	// refer to library types
	var ExampleColor = library.ExampleColor;

	/**
	 * Constructor for a new <code>com.rcaziraghi.barcodereader4ui5.Example</code> control.
	 *
	 * @param {string} [sId] id for the new control, generated automatically if no id is given
	 * @param {object} [mSettings] initial settings for the new control
	 *
	 * @class
	 * Some class description goes here.
	 * @extends sap.ui.core.Control
	 *
	 * @author rcaziraghi
	 * @version ${version}
	 *
	 * @constructor
	 * @public
	 * @alias com.rcaziraghi.barcodereader4ui5.Example
	 */
	var Example = Control.extend("com.rcaziraghi.barcodereader4ui5.Example", /** @lends com.rcaziraghi.barcodereader4ui5.Example.prototype */ {
		metadata: {
			library: "com.rcaziraghi.barcodereader4ui5",
			properties: {
				/**
				 * The text to display.
				 */
				text: {
					type: "string",
					group: "Data",
					defaultValue: null
				},
				/**
				 * The color to use (default to "Default" color).
				 */
				color: {
					type: "com.rcaziraghi.barcodereader4ui5.ExampleColor",
					group: "Appearance",
					defaultValue: ExampleColor.Default
				}
			},
			events: {
				/**
				 * Event is fired when the user clicks the control.
				 */
				press: {}
			}
		},
		renderer: ExampleRenderer,
    onclick: function() {
      this.firePress();
    }
	});
	return Example;

});
