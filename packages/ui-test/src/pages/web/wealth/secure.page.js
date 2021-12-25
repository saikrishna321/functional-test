import { LoginPage } from '../login/login.page';

const selectors = {
  successMessage: {
    web: 'div.success',
  },
  logOut: {
    web: '*=Logout',
  },
};

export const SecurePage = {
  validateMessage() {
    expect($(selectors.successMessage)).toHaveTextContaining(
      'You logged into a secure area!'
    );
    return this;
  },
  logout() {
    $(selectors.logOut).click();
    return LoginPage;
  },
};
