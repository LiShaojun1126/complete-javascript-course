let js = "amazing";
console.log(40 + 8);

let firstName = "shaojun";
console.log(firstName);

console.log(typeof firstName);

let year;
console.log(typeof year);

console.log(typeof null); //this is a error, the type of null shoule be null

const birthYear = 2002; //we must initialize a const variable when we declare it.

//we should use const as many as possible, and never use var

const nowYear = 2025;
const shaojunAge = nowYear - 2002;
const yachenAge = nowYear - 2012;

console.log(shaojunAge, yachenAge);

// const markWeight = 78;
// const markHeight = 1.69;

// const johnWeight = 92;
// const johnHeight = 1.95;

const markWeight = 95;
const markHeight = 1.88;

const johnWeight = 85;
const johnHeight = 1.76;

const markBMI = markWeight / markHeight ** 2;
const johnBMI = johnWeight / johnHeight ** 2;

const markHigherBMI = markBMI > johnBMI;

console.log("Mark's BMI is " + markBMI);
console.log("John's BMI is " + johnBMI);

if (markHigherBMI) console.log("Mark has higher BMI");
