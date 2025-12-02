import { Page, test } from "@playwright/test";
import { HomePage } from "../src/pages/homePage";


test('Get current temperature flow', async ({ page }) => {
const homePage = new HomePage(page);

await test.step('Navigate to home page', async () =>{
    await page.goto('/')
});

await test.step('Enter zip code in search bar', async () =>{
    await homePage.searchByName("79901")
})

await test.step('Choose specific location', async () =>{
    await homePage.chooseLocationByName("אל פאסו, טקסס, US")
    await page.waitForTimeout(50000)
})
})