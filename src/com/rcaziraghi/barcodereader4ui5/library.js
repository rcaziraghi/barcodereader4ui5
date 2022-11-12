/*!
 * ${copyright}
 */

/**
 * Initialization Code and shared classes of library com.rcaziraghi.barcodereader4ui5.
 */
sap.ui.define([
	"sap/ui/core/library"
], function () {
	"use strict";

	// delegate further initialization of this library to the Core
	// Hint: sap.ui.getCore() must still be used to support preload with sync bootstrap!
	sap.ui.getCore().initLibrary({
		name: "com.rcaziraghi.barcodereader4ui5",
		version: "${version}",
		dependencies: [ // keep in sync with the ui5.yaml and .library files
			"sap.ui.core"
		],
		types: [
			"com.rcaziraghi.barcodereader4ui5.ExampleColor"
		],
		interfaces: [],
		controls: [
			"com.rcaziraghi.barcodereader4ui5.Example"
		],
		elements: [],
		noLibraryCSS: false // if no CSS is provided, you can disable the library.css load here
	});

	/**
	 * Some description about <code>barcodereader4ui5</code>
	 *
	 * @namespace
	 * @name com.rcaziraghi.barcodereader4ui5
	 * @author rcaziraghi
	 * @version ${version}
	 * @public
	 */
	var thisLib = com.rcaziraghi.barcodereader4ui5;

	/**
	 * Semantic Colors of the <code>com.rcaziraghi.barcodereader4ui5.Example</code>.
	 *
	 * @enum {string}
	 * @public
	 */
	thisLib.ExampleColor = {

		/**
		 * Default color (brand color)
		 * @public
		 */
		Default : "Default",

		/**
		 * Highlight color
		 * @public
		 */
		Highlight : "Highlight"

	};

	return thisLib;

});
