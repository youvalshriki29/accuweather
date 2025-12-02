import { test } from "@playwright/test";
import { HomePage } from "../src/pages/homePage";
import { WeatherPage } from "../src/pages/weatherPage";
import { BasePage } from "../src/pages/basePage";


test('Get current temperature flow', async ({ page }) => {
const homePage = new HomePage(page);
const weatherPage = new WeatherPage(page)
const basePage = new BasePage(page)
const ZIP_CODE = "79901"
const LOCATION_NAME = "El Paso, TX 79901 US"

await test.step('Navigate to home page', async () =>{
    await page.goto('/')
    await basePage.acceptPrivacy()

});

await test.step('Enter zip code in search bar', async () =>{
    await homePage.searchByName(ZIP_CODE)
    await page.waitForLoadState('networkidle')


});

await test.step('Choose specific location', async () =>{
    await homePage.chooseLocationByName(LOCATION_NAME)
    await basePage.closeAd()
});

await test.step('Return current tamperature', async () =>{
    await weatherPage.returnCurrentTemp()
});
});