
const selectors = {
  singleUser: '[data-id="users-single"] a',
  response: '[data-key="output-response"]'
};

export const ReqRes = {
  async loadPage() {
    await browser.url('/');
    return this;
  },

  async singleUser() {
    await $(selectors.singleUser).scrollIntoView();
    await $(selectors.singleUser).click();
  },

  async getResponse(){
    await browser.pause(2000)
    const resp = await $(selectors.response).getText()
    return JSON.parse(resp)
  }

};
