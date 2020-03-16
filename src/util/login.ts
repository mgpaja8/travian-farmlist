import { By, WebDriver } from 'selenium-webdriver';
import { accountConfig } from '../config';
import { navigate } from './navigate';
import { sleep } from './sleep';

export const login = async (driver: WebDriver) => {
  console.log(`Login`);
  await navigate(driver, 'login.php');
  await sleep(1, 2);

  const usernameInput = await driver.findElement(By.name('name'));
  const passwordInput = await driver.findElement(By.name('password'));
  const submitButton = await driver.findElement(By.name('s1'));

  await usernameInput.sendKeys(accountConfig.username);
  await passwordInput.sendKeys(accountConfig.password);
  await submitButton.click();
  console.log('Login successful');
};
