export class KPHomePage
{
    constructor(page)
    {
        this.page=page;
        this.homelogo= page.getByRole('img', { name: 'Kerala Property' })
        this.myproperties=page.locator(".sub-header");
        this.namevisible=page.locator(".fw-bold");
        this.myaccount = page.getByRole('link', { name: 'My Account' })

    }

   async myaccountclick()
   {
     await this.myaccount.click();
   }
    
}