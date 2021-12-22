import LoginPage from '../pages/mobile/login/login.page'
import { AlertPopup } from '../pages/mobile/wealth/alert.popup'

describe('Mobile Test', () => {
  it('Sign Up Test', async () => {
    await LoginPage.openLogin()
    await LoginPage.signUp('test@webdriver.io', 'Test1234!')
    const message = await AlertPopup.pressButton('OK')
    expect(message).toEqual('Signed Up!\nYou successfully signed up!')
  })
})
