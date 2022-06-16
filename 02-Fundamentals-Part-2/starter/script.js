/* 'use strict';

let hasDriversLicense = false;
let passTest = true;

if (passTest) hasDriversLicense = true;
if (hasDriversLicense) console.log('i can drive');
*/
// 'use strict';
function logger() {
    console.log('my name is ritu');
    return "temp";
}
//calling/running/invoking function
// "temp"
let c = logger()
console.log(c);
logger();
console.time()

function fruitProcessor(apples, oranges) {
    console.log(apples, oranges);
    const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
    return juice;
}
console.log(juice)
const applejuice = fruitProcessor(5, 0);
console.log(applejuice);
