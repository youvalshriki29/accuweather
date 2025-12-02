import { Locator, Page } from "@playwright/test"

export class HomePage  {
    private static readonly locators = {
        searchField: '.search-input',
        locationNameHeader: '.location-name'
    }

    private searchField: Locator
    private locationNameHeader: Locator

    constructor(page:Page){
        this.searchField = page.locator(HomePage.locators.searchField)
        this.locationNameHeader = page.locator(HomePage.locators.locationNameHeader)
    }

    async searchByName(input:string): Promise<void> {
        await this.searchField.fill(input);
        await this.searchField.press('Enter')
    }

    async chooseLocationByName(name:string){
        const location = await this.locationNameHeader.locator(`:has-text ${name}`)
        await location.click()
    }
}