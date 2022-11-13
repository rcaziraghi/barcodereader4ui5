sap.ui.define([
	"com/rcaziraghi/barcodereader4ui5/library",
	"com/rcaziraghi/barcodereader4ui5/barcodereader4ui5"
], function(library, barcodereader4ui5) {
	"use strict";

	// refer to library types
	//var barcodereader4ui5Color = library.barcodereader4ui5Color;

	// create a new instance of the barcodereader4ui5 control and
	// place it into the DOM element with the id "content"
	new barcodereader4ui5({
			text: "barcodereader4ui5"
			//color: barcodereader4ui5Color.Highlight
	}).placeAt("content");

});
