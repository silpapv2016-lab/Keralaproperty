
import{test,expect} from '..//Fixtures//test-fixture';

test.describe("HomePage",()=>
{
test.beforeEach('url loading',async({page,homePage})=>
{
await page.goto("https://keralaproperty.in/member/myhome/");
await expect(page).toHaveURL(/myhome/)
})  

test('Verify My Home text is visible',async({homePage})=>
{
    await expect(homePage.homelogo).toBeVisible();
})
test('Verify the my properties',async({homePage})=>
{
    await expect(homePage.myproperties).toBeVisible(); 
})
test('Verify the your name', async({homePage})=>
{
    await expect(homePage.namevisible).toHaveText('Unni');
})
test('Click Account',async({homePage,page})=>
{
    await homePage.myaccountclick();
    await expect(homePage.myproperties).toHaveText('My Properties');
})
});