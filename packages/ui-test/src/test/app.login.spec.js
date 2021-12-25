import baseScreen from '../pages/mobile/login/base.screen';
import loginScreen from '../pages/mobile/login/login.screen';
import { AlertPopup } from '../pages/mobile/wealth/alert.popup';

describe('Mobile Test', function () {
  it('Sign Up Test', async function () {
    await baseScreen.openLogin();
    await loginScreen.signUp('test@webdriver.io', 'Test1234!');
    const message = await AlertPopup.pressButton('OK');
    expect(message).toEqual('Signed Up!\nYou successfully signed up!');
  });
});
