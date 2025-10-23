"use strict"; //active strict mode for the entire script
//strict mode can help us avoid some mistake and bug
//avoid some reserved word like interface, function, private

// let hasDriversLicense = false;
// const passTest = true;

// if (passTest) {
//   hasDriversLicense = true;
// }

//const interface = "abc";

// function logger() {
//   console.log("my name is a!");
// }

// //calling/running/invoking the function
// logger(); //reuse lines of code

// function fruitProcessor(apples, oranges) {
//   console.log(apples, oranges);
//   const juice = `This juice is made from ${apples} apples and ${oranges} oranges.`;
//   return juice;
// }

// console.log(fruitProcessor(4, 5)); //4， 5 are called arguements

// const num = Number("23");

// //function declaration
// const age1 = calcAge1(2002); //in function declaration, you can call the funtion first then declare the function. It's call funciton hoisting
// function calcAge1(birthYear) {
//   return 2025 - birthYear;
// }

// //function expression, funciton is a value in js
// const calcAge2 = function (birthYear) {
//   return 2025 - birthYear;
// };
// const age2 = calcAge2(2002);
// console.log(age1, age2);

//arrow function: does not have this keyword
// const calcAge3 = (birthYear) => 2025 - birthYear;
// //if we only have one line, we can neglect the return keyword.
// const age3 = calcAge3(2002);

// console.log(age3);

// const yearUntilRetirement = (birthYear, firstName) => {
//   const age = 2025 - birthYear;
//   const retirement = 65 - age;
//   return `${firstName} retires in ${retirement} years!`;
// };
// console.log(yearUntilRetirement(2002, "shaojun"));

//functions calling other funcitons:
// const cutFruitPieces = (fruit) => fruit * 5;

// function fruitProcessor(apples, oranges) {
//   const applePieces = cutFruitPieces(apples);
//   const orangePieces = cutFruitPieces(oranges);

//   const juice = `This juice is made from ${applePieces} apple pieces and ${orangePieces} orange pieces.`;
//   return juice;
// }

// console.log(fruitProcessor(3, 5));

// const calcAge = (birthYear) => 2025 - birthYear;

// const yearUntilRetirement = (birthYear, firstName) => {
//   const age = calcAge(birthYear);
//   const retirement = 65 - age;
//   if (retirement >= 0) {
//     return `${firstName} will retire in ${retirement} years.`;
//   } else {
//     return `${firstName} has retired.`;
//   }
// };

// console.log(yearUntilRetirement(1994, "Shaojun"));

// const average = (score1, score2, score3) => (score1 + score2 + score3) / 3;
// const averageDolphis = average(85, 54, 41);
// const averageKoalas = average(23, 34, 27);

// const checkWinner = (aveDophins, aveKoalas) => {
//   if (aveDophins >= 2 * aveKoalas) {
//     console.log(`Dolphins win (${aveDophins} vs. ${aveKoalas}).`);
//     return "Dophins";
//   } else if (aveKoalas >= 2 * aveDophins) {
//     console.log(`Koalas win (${aveKoalas} vs. ${aveDophins}).`);
//     return "Koalas";
//   } else {
//     console.log("Nobody wins :(");
//     return -1;
//   }
// };

// const winner = checkWinner(averageDolphis, averageKoalas);

//arrays
// const friends = ["Micheal", "Peter", "Steven"];
// console.log(friends);

//const year = new Array(1991, 2002, 2008, 2014);

// console.log(friends[0]);
// console.log(friends[2]);

// console.log(friends.length);
// console.log(friends[friends.length - 1]); // get the last element

// //we can mutate array even is a const, only primitive variables are not mutable.

// friends[2] = "Java";
// console.log(friends);

// //we cannot reassign the array, but we can add, delete, and mutate.

// const firstName = "shaojun";

// //we can have any type of variables in an array
// const shaojun = [firstName, "li", 2002, "student", friends];
// console.log(shaojun);

// const calcAge = (birthYear) => 2025 - birthYear;

// const years = [1991, 2002, 2008, 2012];

// const ages = [calcAge(years[0]), calcAge(years[1]), calcAge(years[3])];
// console.log(ages);

//add element
// const friends = ["Micheal", "Peter", "Steven"];
// const newLength = friends.push("Jay"); //this method returns a value of new array
// console.log(friends);
// console.log(`The length of new array is ${newLength}`);

// friends.unshift("John"); //add element at the beginning of the array
// console.log(friends);

// //remove element

// const popped = friends.pop(); //remove and return the last element
// console.log(friends, popped);

// const shifted = friends.shift();
// console.log(friends);
// console.log(shifted);

// console.log(friends.indexOf("Steven"));
// console.log(friends.indexOf("Shaojun")); //return -1 when this element is not there

// console.log(friends.includes("Micheal")); //return boolean value
// console.log(friends.includes("Jay"));

// if (friends.includes("Peter")) {
//   console.log("You are Peter's friend!");
// }

//code challenge:

// const calcTip = (bill) => {
//   if (bill >= 50 && bill <= 300) {
//     return bill * 0.15;
//   } else {
//     return bill * 0.2;
//   }

//   //or return bill >= 50 && bill <= 300 ? bill * 0.15 :bill * 0.2;
// };

// console.log(calcTip(100));

// const bills = [125, 555, 44];
// const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
// const total = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];

// console.log(bills);
// console.log(tips);
// console.log(total);

// const Shaojun = {
//   firstName: "Shaojun",
//   lastName: "Li",
//   birthYear: 2002,
//   job: "student",
//   friends: ["Micheal", "Peter", "Steven"],
// };
// //object is unordered, array is ordered.
// console.log(Shaojun.lastName);
// console.log(Shaojun["lastName"]);

// const nameKey = "Name";
// //we can put any expression in the squared bracket
// console.log(Shaojun["first" + nameKey]);
// console.log(Shaojun["last" + nameKey]);

// const interestedIn = prompt(
//   "What do you want to know about Shaojun? Choose from firstName, lastName, birthYear, job, or friends."
// );
// console.log(interestedIn);
// console.log(Shaojun[interestedIn]);
// //if it try to access a property that doesn't exist, it will return undefine

// if (Shaojun[interestedIn]) {
//   console.log(Shaojun[interestedIn]);
// } else {
//   console.log(
//     "Wrong request! Choose from firstName, lastName, birthYear, job, or friends."
//   );
// }

// Shaojun.location = "USA";
// Shaojun["school"] = "lagcc";
// console.log(Shaojun);

// console.log(
//   `${Shaojun.firstName} has ${Shaojun.friends.length} friends, and his best friend is ${Shaojun.friends[0]}`
// );

// const Shaojun = {
//   firstName: "Shaojun",
//   lastName: "Li",
//   birthYear: 2002,
//   job: "student",
//   friends: ["Micheal", "Peter", "Steven"],
//   hasDriverLicense: true,

//   //we can add function expression as property: value
//   //function is a value, and function inside a object is called method
//   //   calcAge: function (birthYear) {
//   //     return 2025 - birthYear;
//   //   },

//   //OOP:
//   //   calcAge: function () {
//   //     return 2025 - this.birthYear;
//   //   },

//   calcAge: function () {
//     this.age = 2025 - this.birthYear;
//     return this.age;
//   },

//   //challenge:
//   //here we need to use this.calcAge() because we cannot assume we call calcAge before
//   getSummary: function () {
//     return `${this.firstName} is a ${this.calcAge()}-year old ${
//       this.job
//     }, he as ${this.hasDriverLicense ? "a" : "no"} diver license.`;
//   },
// };

// console.log(Shaojun.calcAge());
// console.log(Shaojun["calcAge"]());
// console.log(Shaojun.age);
// console.log(Shaojun.getSummary());

//code challenge
// const Mark = {
//   fullName: "Mark Miller",
//   mass: 78,
//   height: 1.69,
//   calcBMI: function () {
//     this.BMI = this.mass / this.height ** 2;
//     return this.BMI;
//   },
// };

// const John = {
//   fullName: "John Smith",
//   mass: 92,
//   height: 1.95,
//   calcBMI: function () {
//     this.BMI = this.mass / this.height ** 2;
//     return this.BMI;
//   },
// };

// if (Mark.calcBMI() >= John.calcBMI()) {
//   console.log(
//     `${Mark.fullName}'s BMI(${Mark.BMI}) is higher than ${John.fullName}'s (${John.BMI}).`
//   );
// } else {
//   console.log(
//     `${John.fullName}'s BMI(${John.BMI}) is higher than ${Mark.fullName}'s(${Mark.BMI}).`
//   );
// }

// Mark.BMI > John.BMI ? console.log("Mark") : console.log("John");

// for (let i = 1; i <= 10; i++) {
//   console.log(`This is my repetition ${i}.`);
// }

// const shaojun = [
//   "Shaojun",
//   "Li",
//   2002,
//   "student",
//   ["Michael", "Peter", "Steven"],
//   true,
// ];

// const types = []; //create an empty array

// for (let i = 0; i < shaojun.length; i++) {
//   console.log(shaojun[i], typeof shaojun[i]);
//   types.push(typeof shaojun[i]);
//   //or types[i] = typeof shaojun[i];
// }

// console.log(types);

// const years = [1991, 2002, 2008, 2012];
// const age = [];

// for (let i = 0; i < years.length; i++) {
//   age.push(2025 - years[i]);
// }
// console.log(age);

// console.log("only string");
// for (let i = 0; i < shaojun.length; i++) {
//   if (typeof shaojun[i] !== "string") {
//     continue;
//   }
//   console.log(shaojun[i], typeof shaojun[i]);
// }

// console.log("before number");
// for (let i = 0; i < shaojun.length; i++) {
//   if (typeof shaojun[i] === "number") {
//     break;
//   }
//   console.log(shaojun[i], typeof shaojun[i]);
// }

// //loop backwards:
// for (let i = shaojun.length - 1; i >= 0; i--) {
//   console.log(shaojun[i]);
// }

// for (let exercise = 1; exercise < 5; exercise++) {
//   console.log(`-----Starting exercise ${exercise}------`);

//   for (let i = 1; i < 6; i++) {
//     console.log(`Exercise: ${exercise}, lifting weights repetiion ${i} !`);
//   }
// }

// let dice = Math.trunc(Math.random() * 6) + 1;
// console.log(dice);

// while (dice !== 6) {
//   console.log(`you rolled ${dice}`);
//   dice = Math.trunc(Math.random() * 6) + 1;

//   if (dice === 6) console.log("You rolled 6! The loop is about to end!");
// }

const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];

const calcTip = (bill) => {
    return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
};
const tips = [];
const totals = [];

for (let i = 0; i < bills.length; i++) {
    //   tips.push(calcTip(bills[i]));
    //   totals.push(tips[i] + bills[i]);
    //to reduce using array
    const tip = calcTip(bills[i]);
    tips.push(tip);
    totals.push(tip + bills[i]);
}
console.log(tips, totals);

const calcAverage = (arr) => {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum / arr.length;
};
console.log(calcAverage(totals));
