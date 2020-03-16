import { WebDriver } from 'selenium-webdriver';
import { serverConfig } from '../config';

export const navigate = async (driver: WebDriver, path: string) => {
  console.log(`Navigate to '${path}'`);
  await driver.get(`${serverConfig.baseUrl}${path}`);
};
