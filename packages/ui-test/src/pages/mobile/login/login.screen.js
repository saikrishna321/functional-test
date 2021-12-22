import { AlertPopup } from '../wealth/alert.popup'
import AppScreen from "../AppScreen";

class LoginScreen extends AppScreen {
  constructor () {
    super('~Login-screen')
  }

  get userEmail() {
    return $({
      droid: '~input-email',
      ios: '~input-email',
    });
  }

  get password() {
    return $('~input-password');
  }

  get confirmPassword() {
    return $('~input-repeat-password');
  }

  get signUpButton() {
    return $('~button-SIGN UP');
  }

  get loginButton() {
    return $('~button-LOGIN');
  }

  get loginTab() {
    return $('~button-login-container');
  }

  get signUpTab() {
    return $('~button-sign-up-container');
  }

  async login(email, password) {
    await this.loginTab.click();
    await this.userEmail.setValue(email);
    await this.password.setValue(password);
    await this.loginButton.click();
    const message = AlertPopup.pressButton('OK');
    expect(message).toEqual('Success\nYou are logged in!');
  }

  async signUp(email, password) {
    await this.signUpTab.click();
    await this.userEmail.setValue(email);
    await this.password.setValue(password);
    await this.confirmPassword.setValue(password);
    await this.signUpButton.click();
  }
}

export default new LoginScreen()
