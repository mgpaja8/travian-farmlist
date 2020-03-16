import { Builder } from 'selenium-webdriver';
import { login, logout, sendFarmlist, sleep } from './util';

const main = async () => {
  console.log('Starting FarmList app');
  const builder = new Builder().forBrowser('chrome');
  let counter = 1;
  const forever = true;

  while (forever) {
    console.log(`----- Counter: ${counter} -----`);
    console.log(new Date().toLocaleString());
    let driver;

    try {
      driver = await builder.build();
      await login(driver);

      await sendFarmlist(driver);
    } catch (e) {
      console.log('Something went wrong..');
      console.log(e);
    } finally {
      if (driver) await logout(driver);
    }

    await sleep(4 * 60, 3 * 60);
    counter++;
  }
};

main()
  .catch(e => console.log('Something went wrong', e));
