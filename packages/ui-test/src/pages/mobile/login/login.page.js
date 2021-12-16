import { AlertPopup } from '../wealth/alert.popup';
import { BasePage } from '../wealth/base.page';

const selectors = {
  email: {
    droid: '~input-email',
    ios: '~input-email',
  },
  password: {
    droid: '~input-password',
    ios: '~input-password',
  },
  confirmPassword: {
    droid: '~input-repeat-password',
    ios: '~input-repeat-password',
  },
  signUp: {
    droid: '~button-SIGN UP',
    ios: '~button-SIGN UP',
  },
  login: {
    droid: '~button-LOGIN',
    ios: '~button-LOGIN',
  },
  loginTab: {
    droid: '~button-login-container',
    ios: '~button-login-container',
  },
  signUpTab: {
    droid: '~button-sign-up-container',
    ios: '~button-sign-up-container',
  },
};

export const LoginPage = {
  ...BasePage,
  login(email, password) {
    $(selectors.loginTab).click();
    $(selectors.email).setValue(email);
    $(selectors.password).setValue(password);
    $(selectors.login).click();
    const message = AlertPopup.pressButton('OK');
    expect(message).toEqual('Success\nYou are logged in!');
  },
  signUp(email, password) {
    $(selectors.signUpTab).click();
    $(selectors.email).setValue(email);
    $(selectors.password).setValue(password);
    $(selectors.confirmPassword).setValue(password);
    $(selectors.signUp).click();
    const message = AlertPopup.pressButton('OK');
    expect(message).toEqual('Signed Up!\nYou successfully signed up!');
  },
};
