import {test,expect} from '@playwright/test'
import { LoginPage } from '../pageObject/LoginPage'
import { POManager } from '../pageObject/POManager'

test('Login' ,async({page})=>{

    const pomanager = new POManager(page)
    const homepage = pomanager.getHomePage()
    const loginPage = pomanager.getLoginPage()
    await homepage.goTo()

    await loginPage.loginToUser('Testuser','1234')
    await loginPage.clickOnLoginButton()

    await page.waitForTimeout(3000)
    await expect(page).toHaveURL('https://parabank.parasoft.com/parabank/overview.htm')
    await expect(page.getByRole('heading',{name:"Accounts Overview"})).toBeVisible()

})