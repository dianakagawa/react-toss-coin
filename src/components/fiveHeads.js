import tossCoin from "./tossCoin";

const fiveHeads = () => {
  return new Promise((resolve, reject) => {
    let headsCount = 0;
    let attempts = 0;
    while (headsCount < 5 && attempts < 100) {
      attempts++;
      let result = tossCoin();
      if (result === "heads") {
        headsCount++;
      } else {
        headsCount = 0;
      }
    }
    resolve(`It took ${attempts} tries to flip five "heads"`);
  });
};

export default fiveHeads;
