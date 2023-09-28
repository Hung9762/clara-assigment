import { Locator, Page, expect } from "@playwright/test";
import { BaseUI } from "./BaseUI.page";

export class Chart extends BaseUI {
  //--- Locators labels ---//
  protected series1Label: Locator;
  protected series2Label: Locator;
  protected series3Label: Locator;
  protected series4Label: Locator;
  protected series5Label: Locator;
  //--- Locators Pie ---//
  public pieSerie1: Locator;
  public pieSerie2: Locator;
  public pieSerie3: Locator;
  public pieSerie4: Locator;
  public pieSerie5: Locator;
  //--- Locators Pie Legends ---//
  public pie1Legend: Locator;
  public pie2Legend: Locator;
  public pie3Legend: Locator;
  public pie4Legend: Locator;
  public pie5Legend: Locator;
  //--- Locators Pie Tooltips ---//

  constructor(page: Page) {
    super(page);
    //--- Labels ----//
    this.series1Label = page.getByText('series-1');
    this.series2Label = page.getByText('series-2');
    this.series3Label = page.getByText('series-3');
    this.series4Label = page.getByText('series-4');
    this.series5Label = page.getByText('series-5');
    //--- Pie Position ---//
    this.pieSerie1 = page.locator('#SvgjsG1015');
    this.pieSerie2 = page.locator('#SvgjsG1028');
    this.pieSerie3 = page.locator('#SvgjsG1041');
    this.pieSerie4 = page.locator('#SvgjsG1054');
    this.pieSerie5 = page.locator('#SvgjsG1067');
    //--- Pie legends ---//
    this.pie1Legend = page.locator("#SvgjsG1017");
    this.pie2Legend = page.locator('#SvgjsG1030');
    this.pie3Legend = page.locator('#SvgjsG1043');
    this.pie4Legend = page.locator('#SvgjsG1056');
    this.pie5Legend = page.locator('#SvgjsG1069');
  }

  public async go(url: string) {
    await this.goTo(url);
  }

  public async hoverLabel(label: string) {
    switch (label.toLocaleLowerCase()) {
      case 'serie 1':
        await this.hoverToElement(this.series1Label);
        break;
      case 'serie 2':
        await this.hoverToElement(this.series2Label);
        break;
      case 'serie 3':
        await this.hoverToElement(this.series3Label);
        break;
      case 'serie 4':
        await this.hoverToElement(this.series4Label);
        break;
      case 'serie 5':
        await this.hoverToElement(this.series5Label);
        break;
    }
  }

  public async clickLabel(label: string) {
    switch (label.toLocaleLowerCase()) {
      case 'serie 1':
        await this.clickToElement(this.pieSerie1);
        break;
      case 'serie 2':
        await this.clickToElement(this.pieSerie2);
        break;
      case 'serie 3':
        await this.clickToElement(this.pieSerie3);
        break;
      case 'serie 4':
        await this.clickToElement(this.pieSerie4);
        break;
      case 'serie 5':
        await this.clickToElement(this.pieSerie5);
        break;
    }
  }

  public async getHTML(element: Locator) {
    return await this.getInnerHTML(element);
  }

  public async getText(element: Locator) {
    return await this.getInnerText(element);
  }

}