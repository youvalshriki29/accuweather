import { expect, Page } from "@playwright/test"
import { HomePage } from "./homePage";



export class BasePage {
private static readonly locators =   {
    closeBtn: '#dismiss-button'
};

readonly page : Page

constructor(page:Page){
    this.page = page;
};

async acceptPrivacy(){
    await this.page.getByRole('button', { name: 'Accept' }).click()     
};
  
async closeAd(){
    const adsFrame = this.page.frameLocator("iframe[title='3rd party ad content']").last();
    expect(adsFrame.locator(BasePage.locators.closeBtn)).toBeVisible
    await adsFrame.locator(BasePage.locators.closeBtn).click();

};
};