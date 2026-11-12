import {Page,Locator} from '@playwright/test'

export class HomePage
{
    page:Page
    registerLink:Locator

    constructor(page:Page)
    {
        this.page=page
        this.registerLink= page.getByRole('link',{name:'Register'})
    }

    async goTo()
    {
        await this.page.goto('https://parabank.parasoft.com/parabank/index.htm')
    }

    async CLickOnRegisterLink()
    {
        await this.registerLink.click()
    }


}