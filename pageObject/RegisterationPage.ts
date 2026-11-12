
import {Page,Locator} from '@playwright/test'

export class RegisterationPage
{
    private page:Page
    private Firstname:Locator
    private Lastname:Locator
    private Address:Locator
    private City:Locator
    private State:Locator
    private Zip:Locator
    private Phone:Locator
    private SSN:Locator
    private Username:Locator
    private Password:Locator
    private ConfirmPassword:Locator
    private RegisterButton:Locator

    constructor(page:Page)
    {
        this.page = page;
        this.Firstname = page.locator('//input[@id="customer.firstName"]')
        this.Lastname = page.locator('[id="customer.lastName"]') //css attribute locator
        this.Address = page.locator('#customer\\.address\\.street') //css in id have dot we use \\ otherwise it consider as class
        this.City = page.locator('#customer\\.address\\.city')
        this.State = page.locator('#customer\\.address\\.state')
        this.Zip = page.locator('#customer\\.address\\.zipCode')      
        this.Phone = page.locator('#customer\\.phoneNumber')
        this.SSN = page.locator('#customer\\.ssn')
        this.Username = page.locator('#customer\\.username')
        this.Password = page.locator('#customer\\.password')
        this.ConfirmPassword = page.locator('//input[@id="repeatedPassword"]')
        this.RegisterButton = page.getByRole('button',{name:'Register'})
    }

    async registerUser
    (
        fname:string,
        lname:string,
        address:string,
        city:string,
        state:string,
        zip:string,
        phone:string,
        ssn:string,
        username:string,
        password:string,
        confirmpassword:string
    )
    {
        await this.Firstname.fill(fname)
        await this.Lastname.fill(lname)
        await this.Address.fill(address)
        await this.City.fill(city)
        await this.State.fill(state)
        await this.Zip.fill(zip)
        await this.Phone.fill(phone)
        await this.SSN.fill(ssn)
        await this.Username.fill(username)
        await this.Password.fill(password)
        await this.ConfirmPassword.fill(confirmpassword)
        
    }

    async clickOnRegisterButton()
    {
        await this.RegisterButton.click()
    }
}