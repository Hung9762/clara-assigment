import { Page, Locator } from "@playwright/test";

export class BaseUI {
  protected page: Page;


  constructor(page: Page) {
    this.page = page;
  }

  protected async goTo(url: string) {
    await this.page.goto(url);
  }

  protected async hoverToElement(element: Locator) {
    await element.hover();
  }

  protected async clickToElement(element: Locator) {
    await element.click();
  }

  protected async getInnerHTML(element: Locator) {
    return await element.innerHTML();
  }

  protected async getInnerText(element: Locator) {
    return await element.textContent();
  }
}