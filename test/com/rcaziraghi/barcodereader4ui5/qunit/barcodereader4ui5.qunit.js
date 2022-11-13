/*global QUnit */
sap.ui.define([
	"sap/ui/qunit/QUnitUtils",
	"sap/ui/qunit/utils/createAndAppendDiv",
	"com/rcaziraghi/barcodereader4ui5/library",
	"com/rcaziraghi/barcodereader4ui5/barcodereader4ui5"
], function(qutils, createAndAppendDiv, library, barcodereader4ui5) {
	"use strict";

	// refer to library types
	//var barcodereader4ui5Color = library.barcodereader4ui5Color;

	// prepare DOM
	createAndAppendDiv("uiArea1");

	// module for basic checks
	QUnit.module("barcodereader4ui5 Tests");

	// barcodereader4ui5 sync test
	QUnit.test("Sync", function(assert) {
		assert.expect(1);
		assert.ok(true, "ok");
	});

	// barcodereader4ui5 async test
	QUnit.test("Async", function(assert) {
		assert.expect(1);
		return new Promise(function(resolve, reject) {
			assert.ok(true, "ok");
			resolve();
		});
	})

	// module for basic checks
	QUnit.module("Basic Control Checks");

	// some basic control checks
	QUnit.test("Test get properties", function(assert) {
		assert.expect(1);
		var obarcodereader4ui5 = new barcodereader4ui5({
			value: "barcodereader4ui5"
		});
		assert.equal(obarcodereader4ui5.getValue(), "barcodereader4ui5", "Check text equals 'barcodereader4ui5'");
		//assert.equal(obarcodereader4ui5.getColor(), barcodereader4ui5Color.Default, "Check color equals 'Default'");
	});

	// some basic eventing check
	// QUnit.test("Test click event", function(assert) {
	// 	assert.expect(1);
	// 	var obarcodereader4ui5 = new barcodereader4ui5("barcodereader4ui5", {
	// 		value: "barcodereader4ui5",
	// 		openDialog: function() {
	// 			assert.ok(true, "Event has been fired!")
	// 		}
	// 	}).placeAt("uiArea1");
	// 	return new Promise(function(resolve, reject) {
	// 		setTimeout(function() {
	// 			qutils.triggerMouseEvent("barcodereader4ui5", "click", 1, 1);
    //     		resolve();
	// 		}, 1000);
	// 	});
	// });

});
