import { BasePage } from "./base.page";

class ProductDetailsPage extends BasePage {
  get lbl_nome_produto() {
    return driver.$("id:com.saucelabs.mydemoapp.android:id/productTV");
  }

  get lbl_preco_produto() {
    return driver.$("id:com.saucelabs.mydemoapp.android:id/priceTV");
  }
}

export const productDetailsPage = new ProductDetailsPage();
