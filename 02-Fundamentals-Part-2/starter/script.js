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
