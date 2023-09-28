import { test, expect, Locator } from '@playwright/test';
import { Chart } from '../pages/chart.page';

test.describe('Code Assigment', () => {
  let chart: Chart;
  test.beforeEach(async ({ page }) => {
    chart = new Chart(page);
  });

  test('Verify element innerHTML and value when selected', async () => {
    await chart.go('/samples/react/pie/simple-donut.html');
    await chart.hoverLabel('serie 1');
    await chart.clickLabel('serie 1');
    let pie1HTML = await chart.getHTML(chart.pieSerie1);
    expect(pie1HTML).toContain('selected="true"');
    let pie1Legend = await chart.getText(chart.pie1Legend);
    console.log(`text-> ${pie1Legend}`);
    expect(pie1Legend).toBe('25.6%');
  });
});