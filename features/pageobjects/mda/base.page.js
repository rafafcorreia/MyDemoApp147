export class BasePage {
  async arrastaParaCima() {
    const window = await driver.getWindowSize();
    const x = window.width / 2;
    const start_y = window.height * 0.8;
    const end_y = window.height * 0.3;
    await driver
      .action("pointer")
      .move({ duration: 0, x: x, y: start_y })
      .down({ button: 0 })
      .move({ duration: 1000, x: x, y: end_y })
      .up({ button: 0 })
      .perform();
  }
}
