import { By, WebDriver } from 'selenium-webdriver';
import { villageConfig } from '../config';
import { navigate } from './navigate';
import { sleep } from './sleep';

export const sendFarmlist = async (driver: WebDriver) => {
  console.log(`Send farmlist`);
  await navigate(driver, `dorf1.php?newdid=${villageConfig.village.id}`);
  await navigate(driver, `build.php?tt=99&id=39`);
  await sleep(2, 2);

  const farmLists = await driver.findElements(By.className('listEntry'));

  for (let i = 3; i < farmLists.length; i++) {
    const farmLists = await driver.findElements(By.className('listEntry'));
    const farmList = farmLists[i];
    const checkbox = await farmList.findElement(By.className('markAll'));
    const buttons = await farmList.findElements(By.className('textButtonV1'));
    const submitFarmlist = buttons[1];

    await checkbox.click();
    await submitFarmlist.click();

    await sleep(3, 4);
  }

  console.log('Send farmlist complete');
};
