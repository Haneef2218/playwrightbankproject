import { POManager } from "../pageObject/POManager";
import {test,expect} from '@playwright/test'

test( 'Account', async ({page})=>{

    const pomanager = new POManager(page)
    const homepage = pomanager.getHomePage()
    homepage.goTo()
    const loginPage = pomanager.getLoginPage()
    loginPage.loginToUser('Test','1234')
    loginPage.clickOnLoginButton()

    // Account overview 


    await page.waitForTimeout(3000)


})