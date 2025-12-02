import { Locator ,Page} from "@playwright/test"


export class WeatherPage  {
 private static readonly locators = {
    currentTemp : '.temp-container .temp'
}
;
private currentTemp : Locator

constructor(page:Page){
    this.currentTemp = page.locator(WeatherPage.locators.currentTemp)
};

async returnCurrentTemp(){
    const temp = await this.currentTemp.textContent()
    return temp
};
};

