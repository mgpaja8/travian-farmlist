import { WebDriver } from 'selenium-webdriver';
import { navigate } from './navigate';

export const logout = async (driver: WebDriver) => {
  console.log('Logout');
  await navigate(driver, 'logout.php');
  await driver.close();
  console.log('Logout successful');
};
