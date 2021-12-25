import AppScreen from '../AppScreen';

const selectors = {
  home: {
    droid: '~Home',
    ios: '~Home',
  },
  webView: {
    droid: '~WebView',
    ios: '~WebView',
  },
  login: {
    droid: '~Login',
    ios: '~Login',
  },
  form: {
    droid: '~Forms',
    ios: '~Forms',
  },
  swipe: {
    droid: '~Swipe',
    ios: '~Swipe',
  },
};

class BaseScreen extends AppScreen {
  openHome() {
    $(selectors.home).click();
  }

  openWebView() {
    $(selectors.webView).click();
  }

  async openLogin() {
    await $(selectors.login).click();
  }

  openForm() {
    $(selectors.form).click();
  }

  openSwipe() {
    $(selectors.swipe).click();
  }
}

export default new BaseScreen();
