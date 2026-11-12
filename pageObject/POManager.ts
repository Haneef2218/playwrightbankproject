import { Page, Locator } from "@playwright/test"
import { HomePage } from "./HomePage"
import { RegisterationPage } from "./RegisterationPage"
import { LoginPage } from "./LoginPage"
import { AccountServicePage } from "./AccountServicePage"

export class POManager {

    private page:Page
    private homepage:HomePage
    private registerPage:RegisterationPage
    private loginPage:LoginPage
    private acService:AccountServicePage

    constructor(page:Page)
    {
        this.page= page
        this.homepage = new HomePage(this.page)
        this.registerPage = new RegisterationPage(this.page)
        this.loginPage = new LoginPage(this.page)
        this.acService = new AccountServicePage(this.page)
    }

    getHomePage ()
    {
        return this.homepage
    }

    getRegisterPage ()
    {
        return this.registerPage
    }

    getLoginPage ()
    {
        return this.loginPage
    }

    getAccountService ()
    {
        return this.acService
    }

}