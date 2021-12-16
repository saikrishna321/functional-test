const selectors = {
  title: {
    droid: 'android=new UiSelector().resourceId("android:id/alertTitle")',
    ios: '-ios predicate string:type == "XCUIElementTypeAlert"',
  },
  message: {
    droid: 'android=new UiSelector().resourceId("android:id/message")',
  },
  button: (button) => {
    return {
      droid: `android=new UiSelector().text("${button}")`,
      ios: `~${button}`,
    };
  },
};

/**
 * @return {string} Alert text.
 */
function getAlertText() {
  return driver.isIOS
    ? driver.getAlertText()
    : `${$(selectors.title).getText()}\n${$(selectors.message).getText()}`;
}

export const AlertPopup = {
  pressButton(button) {
    if ($(selectors.title).isDisplayed()) {
      const message = getAlertText().trim();
      $(selectors.button(button)).click();
      return message;
    }
    return undefined;
  },
};
