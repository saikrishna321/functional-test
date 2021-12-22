import { SecurePage } from '../wealth/secure.page'

const selectors = {
  userName: {
    web: '#username'
  },
  password: {
    web: '#password'
  },
  successMessage: {
    web: 'div.success'
  },
  login: {
    web: 'button'
  }
}
export const LoginPage = {
  validateMessage () {
    expect($(selectors.successMessage)).toHaveTextContaining(
      'You logged out of the secure area!'
    )
    return this
  },
  login (userName, password) {
    $(selectors.userName).setValue(userName)
    $(selectors.password).setValue(password)
    $(selectors.login).click()
    return SecurePage
  }
}
