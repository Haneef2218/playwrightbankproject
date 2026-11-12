import { Page,Locator } from "@playwright/test";

export class LoginPage {

   private page:Page
   private username:Locator
   private password:Locator
   private loginbutton:Locator

    constructor(page:Page){

        this.page=page
        this.username = page.locator('//input[@name="username"]')
        this.password = page.locator('//input[@name="password"]')
        this.loginbutton = page.getByText('Log In')

    }

    async loginToUser
    (
        username:string,
        password:string
    ) 
    {
        await this.username.fill(username)
        await this.password.fill(password)
    }

    async clickOnLoginButton() {
       await this.loginbutton.click()
    }

}