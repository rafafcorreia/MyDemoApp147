// This sample code supports WebdriverIO client >=9.7.0
// (npm i --save webdriverio)
// Then paste this into a .js file and run with Node:
// node <file>.js

import { remote } from "webdriverio";
import { expect } from "expect-webdriverio";

async function main() {
  const caps = {
    platformName: "Android",
    "appium:platformVersion": "13.0",
    "appium:deviceName": "emulator5554",
    "appium:deviceOrientation": "portrait",
    "appium:appPackage": "com.saucelabs.mydemoapp.android",
    "appium:appActivity":
      "com.saucelabs.mydemoapp.android.view.activities.SplashActivity",
    "appium:automationName": "UiAutomator2",
    browserName: "",
    "appium:ensureWebviewsHavePages": true,
    "appium:nativeWebScreenshot": true,
    "appium:newCommandTimeout": 3600,
    "appium:connectHardwareKeyboard": true,
    "wdio:enforceWebDriverClassic": true,
    unhandledPromptBehavior: "ignore",
  };
  const driver = await remote({
    protocol: "http",
    hostname: "127.0.0.1",
    port: 4723,
    path: "/",
    capabilities: caps,
  });

  const img_produto = await driver.$(
    '-android uiautomator:new UiSelector().resourceId("com.saucelabs.mydemoapp.android:id/productIV").instance(0)',
  );
  await img_produto.click();
  const lbl_nome_produto = await driver.$(
    "id:com.saucelabs.mydemoapp.android:id/productTV",
  );
  await expect(await lbl_nome_produto.getText()).toEqual("Sauce Labs Backpack"); // transformar em uma validação
  const lbl_preco_produto = await driver.$(
    "id:com.saucelabs.mydemoapp.android:id/priceTV",
  );
  await expect(await lbl_preco_produto.getText()).toEqual("$ 29.99"); // transformar em uma validação
  await driver
    .action("pointer")
    .move({ duration: 0, x: 601, y: 1948 })
    .down({ button: 0 })
    .move({ duration: 1000, x: 623, y: 847 })
    .up({ button: 0 })
    .perform();
  await driver.deleteSession();
}

main().catch(console.log);
