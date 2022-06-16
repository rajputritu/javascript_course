/*

let js = 'amazing';
console.log(40 + 8 + 23 - 10);
console.log("jonas")
console.log(23);
console.log("ritu")
let firstname = "ritu";
console.log(firstname);
console.log(firstname);
console.log(firstname);
let jonas_ritu = "JR"
let $function = 27;
let person = 'jonas'
let PI = 3.1415;
let country = "india"
let continent = "asia"
let population = "1.4"
console.log(country);
console.log(continent);
console.log(population);

let javascriptIsFun = true
console.log(javascriptIsFun);

console.log(typeof true);
console.log(typeof javascriptIsFun);
console.log(typeof 23);
console.log(typeof 'jonas')

javascriptIsFun = 'YES!';
console.log(typeof javascriptIsFun);

let year;
console.log(year);
console.log(typeof year);

year = 1991;

// Math operators
const now = 2037;
const agejonas = now - 1991;
const agesarah = now - 2018;
console.log(agejonas, agesarah);
console.log(agejonas *2, agejonas/10, 2**3)
// 2**3 means 2 to the power of 3 = 2 * 2 * 2

const firstName = ('jonas')
const lastName = 'Sara'
console.log(firstName +  ' ' +lastName);
let x = 10 + 5;
console.log(x);
x += 10; // x = x + 10
x *= 4; //x = x *  4
x++; 
x--;
console.log(x);

// Comparison operators
console.log(agejonas > agesarah); // >, <, >=, <=
console.log(agesarah >=18);

const isFullAge = agesarah >= 18;

console.log(now - 1991 > now - 2018)


const now = 2037;
const agejonas = now - 1991;
const agesarah = now - 2018;
console.log(now - 1991 > now - 2018)

console.log(25-10-5)

let x, y;
x = y = 25-10-5;
console.log(x, y);
const averageage = (agejonas + agesarah) / 2
console.log(agejonas, agesarah, averageage);

const massMark = 78;
const heightMark = 1.69;
const BMI_Mark = (massMark / heightMark ** 2);
const massJohn = 92;
const heightJohn = 1.95;
const BMI_John = massJohn / (heightJohn * heightJohn);
const markhigherBMI = BMI_Mark > BMI_John
console.log(BMI_Mark, BMI_John, markhigherBMI);

const firstname = 'ritu';
const job = 'teacher';
const birthyear = 1991;
const year = 2035;

const ritu = "I'm " + firstname + ', a ' + (year - birthyear) +  ' years old ' + job + '!';
console.log(ritu);
const ritunew = `I'm ${firstname}, a ${year - birthyear} year old ${job}!`;
console.log(ritunew);

console.log(`just a regular string...`);

console.log(`string with \n\
multiple line\n\
lines`);

console.log(`string 
multiple 
lines`);


const age = 15;

if (age >= 18) {
    console.log('sarah can start driving license');
} else {
    const yearsLeft = 18 - age;
    console.log(`sarah is too young. wait another ${yearsLeft} years`);
}

let century;
const birthyear = 2012;
if(birthyear <= 2000) {
    let century = 20;
} else {
    century = 21;
}
console.log(century);
const massMark = 95;
const heightMark = 1.88;
const BMI_Mark = (massMark / heightMark ** 2);
const massJohn = 85;
const heightJohn = 1.76;
const BMI_John = massJohn / (heightJohn * heightJohn);
const markhigherBMI = BMI_Mark > BMI_John

if (BMI_Mark > BMI_John) {
    console.log("Mark's BMI is higher than John's!")
} else {
    console.log("John's BMI is higher than Marks's!")
}

//type conversion
const inputyear = '1991';
console.log(Number(inputyear), inputyear);
console.log(Number(inputyear) + 18);

console.log(Number('jonas'));
console.log(typeof NaN);

console.log(String(23), 23);

// type coercion
console.log('I am' + 23 + 'yearsold');
console.log('23' - '10' - 3);
console.log('23'/2);

let n = '1' + 1;
n = n - 1;
console.log(n);

// 5 falsy values:0, '', undefined, null, NaN
console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean('Jonas'));
console.log(Boolean({}));


const money = 0;
if (money) {
    console.log("Don't spend it all ;)");
} else {
    console.log('you should get a job!');
}

let height = 0;
if (height) {
    console.log('YAY! Height is defined');
} else {
    console.log('Height is undefined');
}


const age = '18';
if (age === 18) console.log('you just became an adult(strict)');

if (age == 18) console.log('you just became an adult(loose)');



const favourite = prompt("what's your favourite number?");
console.log(favourite);
console.log(typeof favourite);

if (favourite === 23) {
    console.log('cool! 23 is an amazing number!');
} else if (favourite === 7) {
    console.log('cool! 7 is an amazing number!');
} else if (favourite === '9') {
    console.log('cool! 9 is an amazing number!');
} else {
    console.log('number is not 23 or 7 or 9');
}

if(favourite !==23) console.log('why not 23?');

const hasDriversLicense = true; // A
const hasGoodVision = true; // B

console.log(hasDriversLicense && hasGoodVision);
console.log(hasDriversLicense || hasGoodVision);
console.log(!hasDriversLicense);


if (hasDriversLicense && hasGoodVision ){
    console.log('Sarah is able to drive!');
} else {
    console.log('someone else should drive...');
}

const isTired = false; //c
console.log(hasDriversLicense && hasGoodVision && !isTired);


//const scoreDolphine = (100 + 100 )/3;
//const scoreKoalas = (101 + 99)/3;
//console.log(scoreDolphine, scoreKoalas);
//if (scoreKoalas > scoreDolphine){
   // console.log("Koalas are winner");
//} else if (scoreKoalas < scoreDolphine){
 //   console.log("Dolphines are winner");
//} else if (scoreDolphine === scoreKoalas){
   // console.log ("match draw!");
//}
// challenge 3 bonus 1
const scoreDolphine = (97 + 112 + 101)/3;
const scoreKoalas = (109 + 95 + 123)/3;
console.log(scoreDolphine, scoreKoalas);
if (scoreKoalas > scoreDolphine && scoreKoalas >= 100){
    console.log("Koalas are winner");
} else if (scoreKoalas < scoreDolphine && scoreDolphine >= 100){
    console.log("Dolphines are winner");
} else if (scoreDolphine === scoreKoalas){
    console.log ("match draw!");
}
 
const age = 23;
//age >= 18 ? console.log('i like to drink wine'):
 //console.log('i like to have water');
const drink = age >= 18 ? 'wine' : 'water';
console.log(drink);

let drink2;
if (age >= 18) {
    drink2 = 'wine';
}
console.log(drink2);

console.log(`i like to drink ${age >= 18 ? 'wine' : 'water'}`);

*/

console.log("Heelo")
const bill = 430
const tip = bill >=50 && bill <=300 ? bill * 0.15 : bill * 0.2;
console.log(`the bill was ${bill}, the tip was ${tip} and the total value ${bill + tip}`);
console.log("hello");
console.log("bye");
console.log("ritu");


