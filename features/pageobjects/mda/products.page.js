import { BasePage } from "./base.page";

class ProductsPage extends BasePage {
  get_img_produto(index) {
    return driver.$(
      `-android uiautomator:new UiSelector().resourceId("com.saucelabs.mydemoapp.android:id/productIV").instance(${index})`,
    );
  }
}

export const productsPage = new ProductsPage();
