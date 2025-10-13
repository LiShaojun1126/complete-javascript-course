// let js = "amazing";
// console.log(40 + 8);

// let firstName = "shaojun";
// console.log(firstName);

// console.log(typeof firstName);

// let year;
// console.log(typeof year);

// console.log(typeof null); //this is a error, the type of null shoule be null

// const birthYear = 2002; //we must initialize a const variable when we declare it.

//we should use const as many as possible, and never use var

// const nowYear = 2025;
// const shaojunAge = nowYear - 2002;
// const yachenAge = nowYear - 2012;

// console.log(shaojunAge, yachenAge);

// const markWeight = 78;
// const markHeight = 1.69;

// const johnWeight = 92;
// const johnHeight = 1.95;

// const markWeight = 95;
// const markHeight = 1.88;

// const johnWeight = 85;
// const johnHeight = 1.76;

// const markBMI = markWeight / markHeight ** 2;
// const johnBMI = johnWeight / johnHeight ** 2;

// const markHigherBMI = markBMI > johnBMI;

// console.log("Mark's BMI is " + markBMI);
// console.log("John's BMI is " + johnBMI);

// if (markHigherBMI) console.log("Mark has higher BMI");

//template literals
// const job = "student";
// const shao = `I'm ${firstName}, a ${birthYear} born ${job}`; //${} is called placeholder
// console.log(shao);
// console.log(`You can also use backticks in regular string.`);

// console.log(`backticks
// can also be used
// in
// multiple lines`);

// const age = 22;

// if (age >= 18) {
//   console.log("I am able to drive! 🚗");
// }

// const birthYear = 2002;
// let century;
// if (birthYear >= 2000) {
//   century = 21;
// } else {
//   century = 20;
// }
// console.log(century);

// if (markBMI > johnBMI) {
//   console.log("Mark's BMI is higher than John's.");
//   console.log(`Mark's BMI (${markBMI}) is higher than John's (${johnBMI})!`);
// } else {
//   console.log("John's BMI is higher than Mark's.");
//   console.log(`John's BMI (${johnBMI}) is higher than Mark's (${markBMI})!`);
// }

// //type conversion

// const inputYear = "2002"; //usually input is a string
// console.log(Number(inputYear), inputYear);
// console.log(`In ${Number(inputYear) + 18}, you will be an adult.`);
// //you cannot always convert a string into a number
// const name = "shaojun";
// console.log(Number(name));

// console.log(String(2002), 2002); //first one is a string

// //type coercion: automatically
// console.log("I am " + 22 + " yeas old"); //+ , convert number to string
// console.log("23" - "10" + 3); //-, will convert string to number

// //same for * and /
// console.log(("23" * "2") / "3");

// //only 5 falsy value: 0, '', undefined, null, NaN
// console.log(`This value in boolean is ${Boolean("")}`); //empty string
// console.log(`This value in boolean is ${Boolean(0)}`);
// console.log(`This value in boolean is ${Boolean(undefined)}`);
// console.log(`This value in boolean is ${Boolean(null)}`);
// console.log(`This value in boolean is ${Boolean(NaN)}`);

// const money = 0;
// if (money) {
//   console.log("Don't spend it all!");
// } else {
//   //money = 0 will trigger this else statement
//   console.log("Earn some!");
// }

// let height = 0;
// if (height !== undefined) {
//   // we cannot use if(height), that will cause a bug
//   console.log("Height is defined");
// } else {
//   console.log("height is undefined");
// }
// const age = 18;
// if (age === 18) console.log("You just turned to an adult!");
// // === : strict equality operator ==: loose equality operator, try to avoid this.

// //prompt input
// const favorite = Number(prompt("What is your favorite number?"));
// // the prompt value is always string, we need to convert it manually
// if (favorite === 6) {
//   //we dont need to convert now
//   console.log("6 is a great number!");
// }

//boolean operators:
// const hasDriverLisence = true;
// const hasGoodVision = true;

// if (hasDriverLisence && hasGoodVision) {
//   console.log("You are allowed to drive!");
// } else {
//   console.log("You are not allowed to drive!");
// }

// const isTired = true;
// if (hasDriverLisence && hasGoodVision && !isTired) {
//   console.log("you are allowed to drive!");
// } else if (isTired) {
//   console.log("Have some rest!");
// } else {
//   console.log("you are not allowed to drive!");
// }

// const dolphinsScore1 = 97;
// const dolphinsScore2 = 112;
// const dolphinsScore3 = 81;
// const dolphinsAverage = (dolphinsScore1 + dolphinsScore2 + dolphinsScore3) / 3;

// const kolasScore1 = 109;
// const kolasScore2 = 95;
// const kolasScore3 = 86;
// const kolasAverage = (kolasScore1 + kolasScore2 + kolasScore3) / 3;
// console.log("Dolphins Average is: " + dolphinsAverage);
// console.log("Kolas Average is: " + kolasAverage);

// if (dolphinsAverage > kolasAverage) {
//   console.log("Dolphins Win!");
// } else if (dolphinsAverage < kolasAverage) {
//   console.log("Kolas Win!");
// } else {
//   console.log("Draw!");
// }
// //bouns 1:

// if (dolphinsAverage > kolasAverage && dolphinsAverage >= 100) {
//   console.log("Dolphins Win!");
// } else if (dolphinsAverage < kolasAverage && kolasAverage >= 100) {
//   console.log("Kolas Win");
// } else {
//   console.log("Draw!");
// }

// //bonus 2:
// if (dolphinsAverage > kolasAverage && dolphinsAverage >= 100) {
//   console.log("Dolphins Win!");
// } else if (dolphinsAverage < kolasAverage && kolasAverage >= 100) {
//   console.log("Kolas Win!");
// } else if (
//   dolphinsAverage === kolasAverage &&
//   dolphinsAverage >= 100 &&
//   kolasAverage >= 100
// ) {
//   console.log("Draw!");
// } else {
//   console.log("Nobody Wins :(!");
// }

// const day = "Friday";

// switch (day) {
//   case "Monday": //day === "Monday"
//     console.log("Physical Lab");
//     break;
//   case "Tuesday":
//     console.log("Math");
//     console.log("Web development");
//     console.log("Physics");
//     break;
//   case "Wednesday":
//     console.log("urban socialology and physics");
//     break;
//   case "Thursday":
//     console.log("math");
//     console.log("web development");
//     break;
//   case "Friday":
//   case "Saturday":
//   case "Sunday":
//     console.log("Enjoy your weekend!");
//     break;

//   default:
//     console.log("unvalid day!");
//     break;
// }

// if (day === "Monday") {
//   console.log("Physical Lab");
// } else if (day === "Tuesday") {
//   console.log("Math");
//   console.log("Web development");
//   console.log("Physics");
// } else if (day === "Wednesday" || day === "Thursday") {
//   console.log("math");
//   console.log("web development");
// } else if (day === "Friday" || day === "Saturday" || day === "Sunday") {
//   console.log("Enjoy your weekend!");
// } else {
//   console.log("Unvalid Day!");
// }

// //expressions : values
// //statements: actions

//conditional (ternary)operator: another way to write if-else statement
// const age = 23;

// age > 18 ? console.log("I like to drive!") : console.log("I like riding bike");

// //operator is a XPathExpression, which means it can produce value

// const drink = age > 18 ? "wine" : "water";

// console.log(drink);

// console.log(`I like to drink ${age > 18 ? "wine" : "water"}`);

// //code challenge 4:
// const bill = 430;
// const tip = bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;

// console.log(
//   `The bill was ${bill}, the tip was ${tip}, and the total was ${bill + tip}.`
// );
