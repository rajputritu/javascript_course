/* 'use strict';

let hasDriversLicense = false;
let passTest = true;

if (passTest) hasDriversLicense = true;
if (hasDriversLicense) console.log('i can drive');

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
     const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
    return juice;
}
const applejuice = fruitProcessor(5, 0);
console.log(applejuice);

const appleorangejuice = fruitProcessor(2, 4);
console.log(appleorangejuice);


//function declaration
function calcAge1(birthyear) {
    return 2037 - birthyear;
}
const age1 = calcAge1(1991);

//function expression
const calcAge2 = function (birthyear) {
    return 2037 - birthyear;
}
const age2 = calcAge2(1991);

console.log(age1, age2);

//Arrow function
const calcAge3 = birthyear => 2037 - birthyear;
const age3 = calcAge3(1991);
console.log(age3);

const yearsUntilRetirement = (birthyear, firstname,) => {
    const age = 2037 - birthyear;
    const retirement = 65 - age;
    //return retirement;
    return `${firstname} retires in ${retirement} years`
}

console.log(yearsUntilRetirement(1991,'jonas'));
console.log(yearsUntilRetirement(1980, 'bob'));

function cutFruitPieces(fruit) {
    return fruit * 4;
}

function fruitprocessor(apples, oranges) {
    const applePieces = cutFruitPieces(apples);
    const orangePieces = cutFruitPieces(oranges);

    const juice = `juice with ${applePieces} pieces of apples and ${orangePieces} pieces of oranges`;
    return juice;
}
console.log(fruitprocessor(2, 3));

const calcAverage = (a, b, c) => (a + b +c) / 3;
const scoreDolphins = calcAverage(44, 23, 71);
const scoreKoalas = calcAverage(65, 54, 49);
console.log(scoreDolphins, scoreKoalas);

const checkWinner = function (avgDolphins, avgKoalas)
{
    if (avgDolphins >= 2 * avgKoalas) {
        console.log(`Dolphins win (${avgDolphins} vs. ${avgKoalas})`);
    }
    else if (avgKoalas >= 2 * avgDolphins) {
        console.log(`koalas win(${avgKoalas} vs. ${avgDolphins})`);
    }else {
        console.log('No team wins');
    }
}
checkWinner (scoreKoalas, scoreDolphins);


const friend1 = 'priya';
const friend2 = 'ritu';
const friend3 = 'bhoomi';

const friends = ['priya', 'ritu', 'bhoomi'];
console.log(friends);

const years = new Array(1991, 1984, 2008, 2020);

console.log(friends[0]);
console.log(friends[2]);

console.log(friends.length);
console.log(friends[friends.length - 1]);

friends[2] = 'Jay';
console.log(friends);

const firstName = 'Jonas';
const jonas = [firstName, 'Schmedtmann', 2037 - 1991, 'teacher, friends'];
console.log(jonas);
console.log(jonas.length);

//exercise
const calcAge = function (birthyear) {
    return 2037 - birthyear;
}
const yrs = [1990, 1967, 2002, 2010, 2018];

console.log(calAge(yrs));


const friends = ['Michael', 'steven', 'peter'];
//add elements
const newlength = friends.push('Jay');
console.log(friends);
console.log(newlength);

friends.unshift('John');
console.log(friends);

//Remove elements
friends.pop();//last
const popped = friends.pop();
console.log(popped);
console.log(friends);

friends.shift(); // first
console.log(friends);

console.log(friends.indexOf('steven'));
console.log(friends.indexOf('Bob'));

console.log(friends.includes('steven'));
console.log(friends.includes('Bob'));
console.log(friends.includes(23));

if (friends.includes('steven')) {
    console.log('you have a friends called steven');
}


const jonas = {
    firstName: 'jonas',
    lastName: 'schedtmann',
    age: 2037 - 1991,
    job: 'teacher',
    friends: ['Michael', 'Peter', 'Steven']
};
console.log(jonas);

console.log(jonas.lastname);
console.log(jonas['lastName']);

const nameKey = 'Name';
console.log(jonas['first' + nameKey]);
console.log(jonas['last' + nameKey]);

// Console.log(jonas.'last' + nameKey)

const interestedIn = prompt('What do you want to know about jonas? Choose between firstName, lastName, age, job and friends');

if (jonas[interestedIn]) {
    console.log(jonas[interestedIn]);
}else {
    console.log('Wrong request! Choose between firstName, lastName, age, job, and friends');
}

jonas.location = 'Portugal';
jonas['twitter'] = '@jonasschmedtman';
console.log(jonas);

// Challenge
//"jonas has 3 friends, and his best friend is called michael"
console.log(`${jonas.firstName} has ${jonas.friends.length}, and his best friend is called ${jonas.friends[0]}`);

console.log('lifting weighta repition 1');
console.log('lifting weighta repition 2');
console.log('lifting weighta repition 3');
console.log('lifting weighta repition 4');
console.log('lifting weighta repition 5');
console.log('lifting weighta repition 6');
console.log('lifting weighta repition 7');
console.log('lifting weighta repition 8');
console.log('lifting weighta repition 9');
console.log('lifting weighta repition 10');
*/
// fir loop keeps running while condition is TRUE
//for(let rep = 1; rep = 10; rep = rep++) {
  //  console.log('Lifting weights repetition ${rep}');
//}
// for (let i=0; i<100;i++){
//     console.log(i);
// }
// let k = 0;
// do{
//     if(k===5){k +=1; }
//     console.log(k+1);
//     k +=1;
// } while (k < 10);

// console.log('done');
const jonasarray = [
    'jonas';
    'Schedtmann';
    2037 - 1991,
    'teacher',
    ['Michael'. 'Peter', 'Steven']
];

for(let i = 0; )