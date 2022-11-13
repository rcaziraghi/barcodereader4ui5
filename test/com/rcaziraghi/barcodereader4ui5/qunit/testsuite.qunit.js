sap.ui.define(function() {
	"use strict";

	return {
		name: "QUnit TestSuite for com.rcaziraghi.barcodereader4ui5",
		defaults: {
			bootCore: true,
			ui5: {
				libs: "sap.ui.core,com.rcaziraghi.barcodereader4ui5",
				theme: "sap_fiori_3",
				noConflict: true,
				preload: "auto"
			},
			qunit: {
				version: 2,
				reorder: false
			},
			sinon: {
				version: 4,
				qunitBridge: true,
				useFakeTimers: false
			},
			module: "./{name}.qunit"
		},
		tests: {
			// test file for the barcodereader4ui5 control
			barcodereader4ui5: {
				title: "QUnit Test for barcodereader4ui5",
				_alternativeTitle: "QUnit tests: com.rcaziraghi.barcodereader4ui5.barcodereader4ui5"
			}
		}
	};

});
