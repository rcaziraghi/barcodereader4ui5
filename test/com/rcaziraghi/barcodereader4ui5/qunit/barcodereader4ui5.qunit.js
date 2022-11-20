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
			id: "testgetproperties",
			value: "barcodereader4ui5"
		});
		assert.equal(obarcodereader4ui5.getValue(), "barcodereader4ui5", "Check text equals 'barcodereader4ui5'");	});

	// some basic control checks
	QUnit.test("Test multiple controls", function(assert) {
		assert.expect(2);
		var obarcodereader4ui51 = new barcodereader4ui5({
			id: "testmultiplecontrols1",
			value: "barcodereader4ui51"
		});

		var obarcodereader4ui52 = new barcodereader4ui5({
			id: "testmultiplecontrols2",
			value: "barcodereader4ui52"
		});

		assert.equal(obarcodereader4ui51.getValue(), "barcodereader4ui51", "Check text equals 'barcodereader4ui51'");
		assert.equal(obarcodereader4ui52.getValue(), "barcodereader4ui52", "Check text equals 'barcodereader4ui52'");
	});

});
