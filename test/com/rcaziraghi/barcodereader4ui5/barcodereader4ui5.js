sap.ui.define([
	"com/rcaziraghi/barcodereader4ui5/library",
	"com/rcaziraghi/barcodereader4ui5/barcodereader4ui5"
], function(library, barcodereader4ui5) {
	"use strict";

	// refer to library types
	//var ExampleColor = library.ExampleColor;

	// create a new instance of the Example control and
	// place it into the DOM element with the id "content"
	new barcodereader4ui5({
			text: "barcodereader4ui5"
			//color: ExampleColor.Highlight
	}).placeAt("content");

});
