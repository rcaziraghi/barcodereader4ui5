sap.ui.define([
	"com/rcaziraghi/barcodereader4ui5/library",
	"com/rcaziraghi/barcodereader4ui5/barcodereader4ui5"
], function(library, barcodereader4ui5) {
	"use strict";

	// refer to library types
	//var barcodereader4ui5Color = library.barcodereader4ui5Color;

	// create a new instance of the barcodereader4ui5 control and
	// place it into the DOM element with the id "content"
	var value;
	new barcodereader4ui5({
			id: 'teste',
			closeOnDetect: true,
			value: value
	}).placeAt("content");

});
