import { test, expect } from '@playwright/test';
const { LoginPage } = require('./models/Loginpage');
const { Dashboard } = require('./models/Homepage');
require('dotenv').config();

test('Create a new product', async ({ page }) => {

    const email : string = process.env.EMAIL!;
    const password : string = process.env.PASSWORD!;

    //Go to shopebase.com and login to the Dashboard homepage
    await page.goto('https://www.shopbase.com/');

    const loginPage = new LoginPage(page)
    const dashBoard = new Dashboard(page);


    await loginPage.clickLogin()
    await loginPage.enterCredentials({
        email: email,
        password: password,
    })
    await loginPage.clickSignIn();


    //Add a new product
    await dashBoard.chooseProducts()
    await dashBoard.addNewProduct()
    await dashBoard.enterProductTitle('Demo Title Product');
})

test('Verify title through API testing', async ({ request }) => {
    const newProduct = await request.get('https://monitor.onshopbase.com/api/catalog/next/product/Demo-Title-Product.json')
    const newProductText = JSON.stringify(await newProduct.json())
    await expect(newProductText).toContain('Demo Title Product')
})


