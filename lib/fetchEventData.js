import { Builder } from 'selenium-webdriver';

async function fetchWithSelenium(url) {
    let driver = await new Builder().forBrowser('chrome').build();

    await driver.get(url);

    await driver.quit();
}

export default fetchWithSelenium;
