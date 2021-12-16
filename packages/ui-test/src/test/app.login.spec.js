import { BasePage } from '../pages/mobile/wealth/base.page';

describe('Mobile Test', () => {
  it('Sign Up Test', () => {
    BasePage.openLogin().signUp('test@webdriver.io', 'Test1234!');
  });
  it('Login Test', () => {
    BasePage.openLogin().login('test@webdriver.io', 'Test1234!');
  });
});
