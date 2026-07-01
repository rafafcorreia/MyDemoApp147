const { Given, When, Then, BeforeAll } = require("@wdio/cucumber-framework");
const { browser, expect, $ } = require("@wdio/globals");

const LoginPage = require("../../pageobjects/Internet/login.page");
const SecurePage = require("../../pageobjects/Internet/secure.page");

const pages = {
  login: LoginPage,
};

BeforeAll(async () => {
  const originalContext = await browser.getContext();

  await browser.switchContext("NATIVE_APP");

  const noThanks = await $('android=new UiSelector().text("No thanks")');

  const isNoThanksDisplayed = await noThanks
    .waitForDisplayed({ timeout: 5000 })
    .catch(() => null);

  if (isNoThanksDisplayed) {
    await noThanks.click();
  }

  await browser.switchContext(originalContext);
});

Given(/^I am on the (\w+) page$/, async (page) => {
  await pages[page].open();
});

When(/^I login with (\w+) and (.+)$/, async (username, password) => {
  await LoginPage.login(username, password);
});

Then(/^I should see a flash message saying (.*)$/, async (message) => {
  await expect(SecurePage.flashAlert).toBeExisting();
  await expect(SecurePage.flashAlert).toHaveText(
    expect.stringContaining(message),
  );
});
