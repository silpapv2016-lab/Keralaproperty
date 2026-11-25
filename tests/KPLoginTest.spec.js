
import{test,expect} from '..//Fixtures//test-fixture';

test.describe("login",()=>
{
test.beforeEach('url loading',async({login,page})=>
{
await page.goto(process.env.BASEURL);
})

test('InvalidLogin',async({login,page})=>
{
  await login.setValues("invalid@gmail.com","invalid@123");
  await login.loginClick();
  await expect(page).toHaveURL("https://keralaproperty.in/member/login/")
  await page.waitForTimeout(2000);
})

test("Verify logo is visible", async(login,page)=>
{
await expect (login.logo).toBeVisible();
});

test("Logo Navigation to homepage while clicking",async({login,page})=>
{
  await login.logoClick();
  await expect(page).toHaveURL("https://keralaproperty.in/")
})

})
