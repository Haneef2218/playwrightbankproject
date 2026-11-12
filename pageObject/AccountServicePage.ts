import {Page, Locator} from '@playwright/test'

export class AccountServicePage {
    page:Page
    private openNewAc:Locator
    private acOverview:Locator
    private acType:Locator
    private submitBtn:Locator

    constructor(page:Page)
    {
        this.page= page
        this.openNewAc = page.getByRole('link',{name:"Open New Account"})
        this.acOverview = page.getByText('Accounts Overview')
        this.acType = page.locator('#type');
        this.submitBtn = page.locator('//input[@type="button"]')

    }

    async OpenNewac ()
    {
        await this.openNewAc.click()    
    }

    async selectAccountType(type: string) 
    {
    await this.acType.selectOption({label: type})
    }

    async submitOpenAc()
    {
        await this.submitBtn.click()
    }


    async AccountOverview() 
    {
        await this.acOverview.click()
    }


}