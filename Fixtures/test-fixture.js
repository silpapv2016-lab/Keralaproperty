import { KPLoginPage } from "../pages/KPLoginPage";
import { KPHomePage } from "../pages/KPHomePage";
import{test as basename,expect} from '@playwright/test'
import { KPAddPropertyPage } from "../pages/KPAddPropertyPage";

export const test=basename.extend({

login:async({page},use)=>   
{
    await use(new KPLoginPage(page));
},
 
homePage:async({page},use)=>
{
    await use(new KPHomePage(page));
},

addProperty:async({page},use)=>
{
     await use(new KPAddPropertyPage(page));
}
})
export {expect};