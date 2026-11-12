import {test,expect} from '@playwright/test'
/*import { HomePage } from '../PageObject/HomePage'
import { RegisterationPage } from '../pageObject/RegisterationPage'

test('registration', async({page})=>{

    const homepage = new HomePage(page)
    await homepage.goTo()
    await homepage.CLickOnRegisterLink()

    const registerationpage = new RegisterationPage(page)
    await registerationpage.registerUser('test','User','padur','chennai','TN','600001','9876543212',
        '8890','testhaneef','test1234','test1234')
    await registerationpage.clickOnRegisterButton()

    await page.waitForTimeout(3000)

    await expect(page).toHaveURL('https://parabank.parasoft.com/parabank/register.htm')

    await expect(page.getByText('Welcome testhaneef')).toHaveText("Welcome testhaneef")

}) */

import { POManager } from '../pageObject/POManager'

test('registration', async({page})=>{

    const pomanager = new POManager(page)
    const homepage = pomanager.getHomePage()
    await homepage.goTo()
    await homepage.CLickOnRegisterLink()

    const registerationpage = pomanager.getRegisterPage()
    await registerationpage.registerUser('test','User','padur','chennai','TN','600001','9876543212',
        '8890','testhaneef','test1234','test1234')
    await registerationpage.clickOnRegisterButton()

    await page.waitForTimeout(3000)

    await expect(page).toHaveURL('https://parabank.parasoft.com/parabank/register.htm')

    await expect(page.getByText('Welcome testhaneef')).toHaveText("Welcome testhaneef")

})



