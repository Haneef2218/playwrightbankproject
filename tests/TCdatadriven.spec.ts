import { test,expect } from '@playwright/test'
import { POManager } from '../pageObject/POManager'
import testdata from '../utilis/datadriven.json'

testdata.forEach((data) => {

test(`registration ${data.username}`, async({page})=>{

    const pomanager = new POManager(page)
    const homepage = pomanager.getHomePage()
    await homepage.goTo()
    await homepage.CLickOnRegisterLink()

    const registerationpage = pomanager.getRegisterPage()
    await registerationpage.registerUser(
        data.firstname,
        data.lastname,
        data.address,
        data.city,
        data.state,
        data.zipcode,
        data.phonenumber,
        data.ssn,
        data.username,
        data.password,
        data.confirmpassword
    )
    await registerationpage.clickOnRegisterButton()

    await page.waitForTimeout(3000)

   // await expect(page).toHaveURL('https://parabank.parasoft.com/parabank/register.htm')

    //await expect(page.getByText('Welcome testhaneef')).toHaveText("Welcome testhaneef")

})

})