import { LoginPage } from '../login/login.page';

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

export const BasePage = {
  openHome() {
    $(selectors.home).click();
  },
  openWebView() {
    $(selectors.webView).click();
  },
  openLogin() {
    $(selectors.login).click();
    return LoginPage;
  },
  openForm() {
    $(selectors.form).click();
  },
  openSwipe() {
    $(selectors.swipe).click();
  },
};
