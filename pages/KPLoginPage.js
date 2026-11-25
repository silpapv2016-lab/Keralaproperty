export class KPLoginPage
{
     /** 
    * @param {import {'@playwright/test'}page}page // to display suggestions
    */
    constructor(page)
    {
        this.page=page //storing kploginpage details to this.page
        this.usernameField = page.locator('#ulogin');
        this.passwordField = page.locator('#upass');
        this.loginButton = page.locator('#sub_logbtn');
        this.logo=page.getByAltText("Kerala Property")
    }

    async setValues(user,pass)
    {
        await this.usernameField.fill(user);
        await this.passwordField.fill(pass);
    }
    async loginClick()
    {
        await this.loginButton.click();
    }
    async logoClick()
    {
        await this.logo.click();
    }
}