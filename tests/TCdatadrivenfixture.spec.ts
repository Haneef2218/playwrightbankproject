import { POManager } from "../pageObject/POManager";
import { customtest as test} from "../fixture/testfixture";

test('registration', async({page, testdataForregistration})=>{

    const pomanager = new POManager(page)
    const homepage = pomanager.getHomePage()
    await homepage.goTo()
    await homepage.CLickOnRegisterLink()

    const registerationpage = pomanager.getRegisterPage()
    await registerationpage.registerUser(
        testdataForregistration.firstname,
        testdataForregistration.lastname,
        testdataForregistration.address,
        testdataForregistration.city,
        testdataForregistration.state,
        testdataForregistration.zipcode,
        testdataForregistration.phonenumber,
        testdataForregistration.ssn,
        testdataForregistration.username,
        testdataForregistration.password,
        testdataForregistration.confirmpassword
    )
    await registerationpage.clickOnRegisterButton()

    await page.waitForTimeout(3000)

    //await expect(page).toHaveURL('https://parabank.parasoft.com/parabank/register.htm')

    //await expect(page.getByText('Welcome Haneef')).toHaveText("Welcome Haneef")

})