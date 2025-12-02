import { Locator, Page } from "@playwright/test"

export class HomePage  {
private static readonly locators = {
    searchField: '.search-input',
};

private searchField: Locator
readonly page: Page

constructor(page: Page){
    this.searchField = page.locator(HomePage.locators.searchField)
    this.page = page;
};

async searchByName(input:string): Promise<void> {
    await this.searchField.fill(input);
    await this.searchField.press('Enter')
};

async chooseLocationByName(name:string){
    await this.page.getByRole('link', { name: name }).click(); 
};
};