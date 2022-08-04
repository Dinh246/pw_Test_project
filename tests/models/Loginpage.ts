import { Locator, Page } from "@playwright/test";

export type Credentials = {
    email: string;
    password: string;
};

class LoginPage {
    
    readonly page: Page;
    readonly loginBtn: Locator;
    readonly signIn: Locator;
    readonly password: Locator;
    readonly email: Locator;

constructor(page) {

    this.page = page;
    this.loginBtn = page.locator('//*[text()="Login"]');
    this.email = page.locator('//*[@id="email"]');
    this.password = page.locator('//*[@id="password"]');
    this.signIn = page.locator('//*[@type="submit"]');

}
    
    async clickLogin(){
    await this.loginBtn.click();
    return this;
}
    
    async enterCredentials(info: Credentials){
    await this.email.fill(info.email);
    await this.password.fill(info.password);
    return this;
}

    async clickSignIn(){
    await this.signIn.click();
}
}
module.exports = { LoginPage }