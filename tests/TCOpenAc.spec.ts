import {test,expect} from '@playwright/test'
import { POManager } from '../pageObject/POManager'

test.beforeEach( async({page})=>{

    const pomanager = new POManager(page)
    const homepage = pomanager.getHomePage()
    const loginPage = pomanager.getLoginPage()
    await homepage.goTo()

    await loginPage.loginToUser('Testuser','1234')
    await loginPage.clickOnLoginButton()

    await page.waitForTimeout(2000)
    await expect(page).toHaveURL('https://parabank.parasoft.com/parabank/overview.htm')
    await expect(page.getByRole('heading',{name:"Accounts Overview"})).toBeVisible()

})

test("OpenAc", async ({page})=>{

    const pomanager1 = new POManager(page)
    const acOpen = pomanager1.getAccountService()
    await acOpen.OpenNewac()

    await acOpen.selectAccountType("SAVINGS")

    await page.waitForTimeout(2000)

    await acOpen.submitOpenAc()

    await page.waitForTimeout(2000)

   // await expect(page.getByRole('heading',{name:"Account Opened!"})).toBeVisible()
    

})