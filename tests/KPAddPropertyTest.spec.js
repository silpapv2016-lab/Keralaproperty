import { beforeEach } from "node:test";
import { test,expect } from "../Fixtures/test-fixture";

test.describe("AddProperty",()=>
{
test.beforeEach("url loading ", async ({page,addProperty})=>
{
  await page.goto("https://keralaproperty.in/member/add-property/");
  await expect(page).toHaveURL(/add-property/);
})

test("Text verification", async({page,addProperty})=>
{
  await expect(addProperty.propertyInfo).toHaveText('Property Info')
})

test("select property drop down", async({page,addProperty})=>
{
   await addProperty.selectPropertyFor();
})

test("Enter the property",async({page,addProperty})=>
{
    await addProperty.enterPropertyLabel("ID005");
})

test("Select category",async({page,addProperty})=>
{
    await addProperty.selectCategory(); 
})

test("File Uploading", async({page,addProperty})=>
{
    await addProperty.fileuploads();
})

})
