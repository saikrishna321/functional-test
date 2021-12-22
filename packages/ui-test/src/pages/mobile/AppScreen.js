export default class AppScreen {
  constructor(selector) {
    this.selector = selector;
  }

  /**
   * Wait for the selector screen to be visible
   *
   * @param {boolean} isShown
   */
  async waitForIsShown(isShown = true) {
    console.log('Inside Wait');
    return $(this.selector).waitForDisplayed({
      reverse: !isShown,
    });
  }
}
