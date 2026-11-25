export class KPAddPropertyPage
{
    constructor(page)
    {
        this.page = page;
        this.propertyInfo = page.getByText("Property Info");
        this.propertyfordrop = page.locator('#proptype');
        this.propertylabel = page.locator('#proplabel');
        this.category = page.locator('#propcategory');
        this.fileupload = page.locator('#userfile');
    }

async selectPropertyFor()
{
    await this.propertyfordrop.click();
    await this.propertyfordrop.selectOption({ label: 'Rental' });
}

async enterPropertyLabel(label)
{
    await this.propertylabel.fill(label);
}

async selectCategory()
{
    await this.category.click();
    await this.category.selectOption({ label: 'Flat' });
}

async fileuploads()
{
    await this.fileupload.setInputFiles("C:/Users/user/Desktop/Postman Document.docx")
}
}