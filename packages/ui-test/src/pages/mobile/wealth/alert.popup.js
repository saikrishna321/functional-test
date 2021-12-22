const selectors = {
  title: {
    droid: 'android=new UiSelector().resourceId("android:id/alertTitle")',
    ios: '-ios predicate string:type == "XCUIElementTypeAlert"'
  },
  message: {
    droid: 'android=new UiSelector().resourceId("android:id/message")'
  },
  button: (button) => {
    return {
      droid: `android=new UiSelector().text("${button}")`,
      ios: `~${button}`
    }
  }
}

/**
 * @return {string} Alert text.
 */
async function getAlertText () {
  return driver.isIOS
    ? driver.getAlertText()
    : `${await $(selectors.title).getText()}\n${await $(
        selectors.message
      ).getText()}`
}

export const AlertPopup = {
  async pressButton (button) {
    if (await $(selectors.title).isDisplayed()) {
      const message = (await getAlertText()).trim()
      await $(selectors.button(button)).click()
      return message
    }
    return undefined
  }
}
