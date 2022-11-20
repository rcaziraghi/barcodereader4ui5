const { wdi5 } = require("wdio-ui5-service")

describe("Test", () => {

    it("Should have clickable button", async () => {

          const button = await browser.asControl({
            wdio_ui5_key: "barcodereader", // optional unique internal key to map and find a control
            forceSelect: true, // forces the test framework to again retrieve the control from the browser context
            timeout: 400000, // maximum waiting time (ms) before failing the search
            //logging: false, // optional (default: `true`) disables the log for this specific selector
            selector: {
              // sap.ui.test.RecordReplay.ControlSelector
              id: "teste-OpenDialogButton"
            }
          })

          expect(button).toBeClickable();

    })

    it("Should open dialog", async () => {

        const button = await browser.asControl({
          wdio_ui5_key: "barcodereader", // optional unique internal key to map and find a control
          forceSelect: true, // forces the test framework to again retrieve the control from the browser context
          timeout: 400000, // maximum waiting time (ms) before failing the search
          //logging: false, // optional (default: `true`) disables the log for this specific selector
          selector: {
            // sap.ui.test.RecordReplay.ControlSelector
            id: "teste-OpenDialogButton"
          }
        })

        await button.firePress();
        const dialog = await $("#teste-ScanDialog");
        expect(dialog.isDisplayed()).toBeTruthy();
  })

  it("Should have close button", async () => {

    const buttonClose = await browser.asControl({
      wdio_ui5_key: "barcodereaderCloseButton", // optional unique internal key to map and find a control
      forceSelect: true, // forces the test framework to again retrieve the control from the browser context
      timeout: 400000, // maximum waiting time (ms) before failing the search
      //logging: false, // optional (default: `true`) disables the log for this specific selector
      selector: {
        // sap.ui.test.RecordReplay.ControlSelector
        id: "teste-OpenDialogButton"
      }
    })

    expect(buttonClose).toBeClickable();

})

it("Should close dialog", async () => {

    const buttonClose = await browser.asControl({
      wdio_ui5_key: "barcodereaderCloseButton", // optional unique internal key to map and find a control
      forceSelect: true, // forces the test framework to again retrieve the control from the browser context
      timeout: 400000, // maximum waiting time (ms) before failing the search
      //logging: false, // optional (default: `true`) disables the log for this specific selector
      selector: {
        // sap.ui.test.RecordReplay.ControlSelector
        id: "teste-CloseButton"
      }
    })

    await buttonClose.firePress();

    expect(await browser.asControl({
        wdio_ui5_key: "barcodereaderScanDialog", // optional unique internal key to map and find a control
        forceSelect: true, // forces the test framework to again retrieve the control from the browser context
        timeout: 400000, // maximum waiting time (ms) before failing the search
        //logging: false, // optional (default: `true`) disables the log for this specific selector
        selector: {
          // sap.ui.test.RecordReplay.ControlSelector
          id: "teste-ScanDialog"
        }
      }).$().isDisplayed()).toBeFalsy();
    
})
})