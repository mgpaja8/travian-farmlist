export const sleep = async (baseTime: number, offset: number) => {
  const sleepTime = baseTime * 1000 + Math.floor(Math.random() * 1000) * offset;
  console.log(`Sleep for ${(sleepTime / 1000).toFixed(2)} seconds`);

  return new Promise(resolve => setTimeout(resolve, sleepTime));
};
