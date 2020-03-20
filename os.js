const operatingSystem = require("os");

let osProp = operatingSystem.userInfo();
let osProp2 = operatingSystem.release();
let osProp3 = operatingSystem.freemem();
console.log(osProp3);
console.log(`windows release version is: ${osProp2}`);

console.log(osProp);
