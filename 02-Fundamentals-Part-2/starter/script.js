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

const average = (score1, score2, score3) => (score1 + score2 + score3) / 3;
const averageDolphis = average(85, 54, 41);
const averageKoalas = average(23, 34, 27);

const checkWinner = (aveDophins, aveKoalas) => {
  if (aveDophins >= 2 * aveKoalas) {
    console.log(`Dolphins win (${aveDophins} vs. ${aveKoalas}).`);
    return "Dophins";
  } else if (aveKoalas >= 2 * aveDophins) {
    console.log(`Koalas win (${aveKoalas} vs. ${aveDophins}).`);
    return "Koalas";
  } else {
    console.log("Nobody wins :(");
    return -1;
  }
};

const winner = checkWinner(averageDolphis, averageKoalas);
