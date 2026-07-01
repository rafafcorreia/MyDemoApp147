import { Given, When, Then, Before, After } from "@wdio/cucumber-framework";
import { productsPage } from "../../pageobjects/mda/products.page";
import { productDetailsPage } from "../../pageobjects/mda/productDetails.page";

Before(async () => {
  await driver.activateApp("com.saucelabs.mydemoapp.android");
});

After(async () => {
  await driver.terminateApp("com.saucelabs.mydemoapp.android");
});

Given("que abro o MyDemoApp", async () => {
  await expect(productsPage.get_img_produto(0)).toBeDisplayed();
});

When("seleciono o produto na {string}", async (index) => {
  await productsPage.get_img_produto(index).click();
});

Then("exibe a pagina de detalhe com o {string}", async (nome_produto) => {
  await expect(productDetailsPage.lbl_nome_produto).toHaveText(nome_produto);
});

Then("o {string}", async (preco_produto) => {
  await productDetailsPage.arrastaParaCima();
  await expect(productDetailsPage.lbl_preco_produto).toHaveText(preco_produto);
});
