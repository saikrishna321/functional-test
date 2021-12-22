import { LoginPage } from '../pages/web/login/login.page'
import { MainPage } from '../pages/web/wealth/main.page'
import { Beta } from 'sc-utils'

describe('Web Test', function () {
  it('Test Login', async function () {
    const sum = new Beta()
    console.log(await sum.add(2, 3))
    MainPage.loadPage().openLink('Form Authentication')
    LoginPage.login('tomsmith', 'SuperSecretPassword!')
      .validateMessage()
      .logout()
      .validateMessage()
  })
})
