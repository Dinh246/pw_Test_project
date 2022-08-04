import { Locator, Page } from "@playwright/test";

class Dashboard {

    readonly productsBtn: Locator;
    readonly productTitle: Locator;
    readonly productDesc: Locator;
    readonly addProductBtn: Locator;
    readonly saveProductBtn: Locator;
    readonly page: Page;

    constructor(page) {
        this.page = page;
        this.productsBtn = page.locator('//*[contains(text(), "Products")]');
        this.addProductBtn = page.locator('//*[contains(text(), "Add product")]');
        this.productTitle = page.locator('//*[@placeholder="Short Sleeve T-Shirt"]');
        this.productDesc = page.locator('//html[contains(@style,"height")]');
        this.saveProductBtn = page.locator('//*[contains(text(),"Save product")]');
    }

    async chooseProducts() {
        await this.productsBtn.click()
        return this;
    }

    async addNewProduct(){
        await this.addProductBtn.click()
        return this;
    }

    async enterProductTitle(text){
        await this.productTitle.fill(text);
        return this;
    }

    async enterProductDescription(text){
        await this.productDesc.fill(text);
        return this;
    }

    async saveProduct(){
        await this.saveProductBtn.click()
    }

}
module.exports = { Dashboard };