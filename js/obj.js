"use strict";

// Додайте “Rock-n-Roll” в кінець масиву.
// Замініть значення в середині масиву на “Classics”. Ваш код для пошуку медіанного елемента має працювати для будь-яких масивів непарної довжини.
// Видаліть перший елемент масиву та покажіть його.
// Вставте Rap та Reggae на початок масиву.
// Вигляд масиву по ходу виконання операцій:

// Jazz, Blues
// Jazz, Blues, Rock-n-Roll
// Jazz, Classics, Rock-n-Roll
// Classics, Rock-n-Roll
// Rap, Reggae, Classics, Rock-n-Roll

// const styles = ["Stoner"];
// styles.push("Prog rock");
// console.log(styles);

// console.log(styles.shift());
// styles.unshift("Post rock", "Glam rock");
// console.log(styles);

// let arr = ["a", "b"];

// arr.push(function () {
//   console.log(this);
// });

// arr[2](); // ?

// Напишіть функцію sumInput() яка:

// Просить користувача ввести дані за допомогою prompt та зберігає їх в масив.
// Закінчує робити запити в користувача після того, як введено не числове значення, порожня строка або натиснуто “відмінити”.
// Підраховує та повертає суму елементів масиву.
// P.S. Нуль 0 це – валідне число, будь ласка, не зупиняйте функцію при введені 0.
// let array = [];

// function sumInput() {
//   let input = prompt("Введіть число");

//   if (input === "" || Number.parseInt(input) === NaN) {
//     return;
//   }
//   array.push(Number.parseInt(input));
//   let sum = 0;
//   for (const number of array) {
//     sum += number;
//   }
//   return sum;
// }

// Напишіть код, виконавши завдання з кожного пункту окремим рядком:

// Створіть порожній об’єкт user.
// Додайте властивість name зі значенням Іван.
// Додайте властивість surname зі значенням Сміт.
// Змініть значення name на Петро.
// Видаліть властивість name з об’єкта.

// let user = {};

// user.name = "Іван";
// user.surname = "Сміт";
// user.name = "Петро";
// delete user.name;

// console.log(user);

// Напишіть функцію isEmpty(obj), яка повертає true, якщо об’єкт не має жодної властивості, інакше false.

// function isEmpty(obj) {
//   for (const key in obj) {
//     return false;
//   }
//   return true;
// }

// let schedule = {};

// console.log(isEmpty(schedule));

// schedule["8:30"] = "Вставай";

// console.log(isEmpty(schedule));

// У нас є об’єкт для зберігання заробітної плати нашої команди:

// Напишіть код для підсумовування всіх зарплат і збережіть у змінній sum. У наведеному вище прикладі має бути 390.

// Якщо об’єкт salaries порожній, то результат має бути 0.

// let salaries = {
//   John: 100,
//   Ann: 160,
//   Pete: 130,
// };

// function sumSalaries() {
//   let sum = 0;
//   for (const key in salaries) {
//     sum += salaries[key];
//   }
//   return sum;
// }
// console.log(sumSalaries());

// Створіть функцію multiplyNumeric(obj), яка примножує всі числові властивості об’єкта obj на 2.
// Зверніть увагу, що multiplyNumeric не потрібно нічого повертати. Слід безпосередньо змінювати об’єкт.

// P.S. Використовуйте typeof для перевірки, що значення властивості числове.

// function multiplyNumeric(obj) {
//   for (const key in obj) {
//     if (typeof obj[key] === "number") {
//       obj[key] *= 2;
//     }
//   }
// }
// // до виклику функції
// let menu = {
//   width: 200,
//   height: 300,
//   title: "Моє меню",
// };

// console.log(menu);

// // після виклику функції
// multiplyNumeric(menu);
// menu = {
//   width: 400,
//   height: 600,
//   title: "Моє меню",
// };
// console.log(menu);

// let band = {
//   name: "Naxatras",
//   genre: "Psych Rock",
//   isActive: true,
//   albums: {
//     1: "1",
//     2: "2",
//     3: "3",
//   },
// };

// let perm1 = { "can play": true };
// let perm2 = { country: "Greece" };

// Object.assign(band, perm1, perm2);
// Object.assign(band, { genre: "Psych/Space Rock" });

// let clone2Band = Object.assign({}, band);

// let clone3Band = structuredClone(band);
// clone3Band.albums[4] = "4";

// let arrBandKeys = Object.keys(band);
// let arrBandValues = Object.values(band);
// for (const element of arrBandKeys) {
//   console.log(element);
// }

// let cloneBand = {};

// for (const key in band) {
//   cloneBand[key] = band[key];
// }
// cloneBand.name = "Kyuss";
// cloneBand.genre = "Desert/Stoner Rock";
// cloneBand.isActive = false;

// Створіть масив styles з елементами 'jazz' і 'blues'
// Додайте до кінця масиву елемент 'rock-n-roll' за допомогою відповідного методу масивів
// Знайдіть елемент 'blues' у масиві та замініть його на 'classic', використовуючи JavaScript-код

// Напишіть функцію logItems(array), яка приймає масив як аргумент
// і виводить у консоль кожен його елемент у форматі:
// "<номер елемента> - <значення елемента>".
// Використайте цикл for для перебору елементів масиву.
// Нумерація елементів повинна починатися з 1 (а не з 0).

// let styles = ["jazz", "blues"];
// styles.push["rock-n-roll"];
// const bluesIdx = styles.indexOf("blues");
// styles[bluesIdx] = "classic";

// function logItems(array) {
//   for (let i = 0; i < array.length; i++) {
//     const element = array[i];
//     console.log(`${i + 1} - ${element}`);
//   }
// }
// logItems(styles);

// Напишіть функцію checkLogin(array), яка:
// Приймає масив логінів як аргумент.
// Запитує ім'я користувача через prompt.
// Перевіряє, чи є введене ім'я у переданому масиві.
// Якщо ім'я є в масиві – виводить повідомлення через alert: "Welcome, <name>!"
// Якщо ім'я відсутнє – виводить повідомлення: "User not found".

// const logins = ["Peter", "John", "Igor", "Sasha"];

// function checkLogin(array) {
//   let inputName = prompt("Введи ім'я");
//   for (const name of array) {
//     if (inputName === name) {
//       alert(`Welcome, ${name}`);
//     }
//   }
//   alert("User not found");
// }
// checkLogin(logins);

// function checkLogin2(array) {
//   let inputName = prompt("Введи ім'я");
//   if (inputName === null) {
//     alert("Введіть ім'я");
//     return;
//   }
//   if (array.includes(inputName)) {
//     alert(`Welcome, ${inputName}`);
//   } else {
//     alert("User not found");
//   }
// }

// checkLogin2(logins);

// Напишіть функцію caclculateAverage(),
// яка приймає довільну кількість
// аргументів і повертає їхнє середнє значення.
// Додайте перевірку, що аргументи - це числа.

// function caclculateAverage() {
//   let total = 0;
//   let counter = 0;
//   for (const args of arguments) {
//     if (typeof args === "number" && !Number.isNaN(args)) {
//       total += args;
//       counter += 1;
//     }
//   }
//   return total === 0 ? 0 : total / counter;
// }
// console.log(caclculateAverage("Banana in your Gina", 2, 6, 2, 4));

// Напишіть функцію, яка сумуватиме сусідні числа
// і пушитиме їх в новий масив.

// const someArr = [22, 11, 34, 5, 12, 13, 14, 15];

// уточнення: складати необхідно перше число з другим, потім друге - з третім,
// третє - з четвертим і так до кінця.
// В результаті функція має повертати масив [33, 45, 39, 17, 25, 27, 29].

// function sumArr(array) {
//   let newArr = [];
//   for (let i = 0; i < array.length - 1; i++) {
//     newArr.push(array[i] + array[i + 1]);
//   }
//   return newArr;
// }
// console.log(sumArr(someArr));

// Напишіть функцію findSmallestNumber(numbers),
// яка шукає найменше число в масиві.
// Додайте перевірку, що функція отримує саме масив, і
// якщо функція отримує масив - поверніть з функції найменше число,
// в іншому випадку - поверніть 'Sory, it is not an array!'.

// const numbers = [2, 5, 35, 56, 12, 24, 7, 80, 3];

// function findSmallestNumber(numbers) {
//   if (Array.isArray(numbers)) {
//     return Math.min(...numbers);
//   }
//   return "Sory, it is not an array!";
// }
// console.log(findSmallestNumber(numbers));

// Напишіть функцію findLongestWord(string), яка
// приймає довільний рядок, що складається лише зі слів, розділених
// пробілами (параметр string), і повертатиме найдовше слово у реченні.

// Скористайтесь цим прикладом виклику функції для перевірки її роботи:
// console.log(findLongestWord("London is the capital of Great Britain")); // 'capital'

// function findLongestWord(string) {
//   let arrString = string.split(" ");
//   let longestWord = arrString[0];
//   for (let i = 0; i < arrString.length; i++) {
//     if (arrString[i].length > longestWord.length) {
//       longestWord = arrString[i];
//     }
//   }
//   return longestWord;
// }
// console.log(findLongestWord("London is the capital of Great Britain"));

// Напишіть скрипт, який для об'єкту user, послідовно:
// 1 - додасть поле mood зі значенням 'happy',
// 2 - замінить hobby на 'skydiving',
// 3 - замінить значення premium на false,
// 4 - виведе зміст об'єкта user у форматі
// '<ключ>:<значення>' використовуя Object.keys() та for...of

// const user = {
//   name: "John",
//   age: 20,
//   hobby: "tenis",
//   premium: true,
// };
// user.mood = "happy";
// user.hobby = "skydiving";
// user.premium = false;
// const keyUser = Object.keys(user);
// for (const key of keyUser) {
//   console.log(`${key} - ${user[key]}`);
// }

// Є об'єкт, в якому зберігаються зарплати команди
// Напишіть код для додавання усіх зарплат та
// збережіть його результат в змінній sum.
// Якщо об'єкт salaries пустий, то результат має бути 0

// const salaries = {
//   Mango: 100,
//   Poly: 160,
//   Ajax: 1470,
// };

// let sum = 0;
// const salariesValues = Object.values(salaries);
// for (const value of salariesValues) {
//   if (typeof value === "number") {
//     sum += value;
//   }
// }
// console.log(sum);

// Створіть об'єкт calculator з наступними методами:
// read(a, b) - приймає два аргумента і зберігає їх як властивості об'єкта,
// sum() - повертає сумму збереженних значень (з перевіркою на наявність властивостей в об'єкті),
// mult() - перемножає збереженні значення і повертає результат (з перевіркою на наявність властивостей в об'єкті),
// винесіть перевірку на наявність властивостей в об'єкті в окремий метод exist().

// Якщо вказані властивості в обʼєкті відсутні (тобто метод exist повертає false),
// методи sum і mult мають повертати рядок 'No such propeties'

// let calculator = {
//   read(a, b) {
//     this.valueA = a;
//     this.valueB = b;
//   },
//   exist() {
//     return this.valueA !== undefined && this.valueB !== undefined;
//   },
//   sum() {
//     if (!this.exist()) {
//       return "No such propeties";
//     }
//     return this.valueA + this.valueB;
//   },
//   mult() {
//     if (!this.exist()) {
//       return "No such propeties";
//     }
//     return this.valueA * this.valueB;
//   },
// };
// calculator.read(2, 4);
// console.log(calculator.mult());

// Напишіть функцію calcTotalPrice(fruits, fruitName),
// яка приймає массив об'єктів (fruits) і рядок з назвою фрукта (fruitName).
// Функція рахує і повертає загальну вартість фрукта
// з таким ім'ям, ціною та кількістю з об'єкта.

// Зверніть увагу, що в масиві може бути кілька обʼєктів з однаковою
// назвою фрукта, це також треба урахувати.

// const fruits = [
//   { name: "Яблуко", price: 45, quantity: 7 },
//   { name: "Апельсин", price: 60, quantity: 4 },
//   { name: "Банан", price: 125, quantity: 8 },
//   { name: "Груша", price: 350, quantity: 2 },
//   { name: "Виноград", price: 440, quantity: 3 },
//   { name: "Банан", price: 125, quantity: 3 },
// ];

// function calcTotalPrice(fruits, fruitName) {
//   let sum = 0;
//   for (const fruit of fruits) {
//     if (fruit.name === fruitName) {
//       sum += fruit.price * fruit.quantity;
//     }
//   }
//   return sum;
// }
// console.log(calcTotalPrice(fruits, "Груша"));

// const arr = [10, 20, 30];

// const logNumb = (item, index, array) => {
//   console.log(`Index ${index}, value ${item}`);
// };

// arr.forEach(logNumb);

// const students = [
//   { name: "Mango", scores: [83, 65] },
//   { name: "Poly", scores: 59 },
//   { name: "Ajax", scores: 37 },
//   { name: "Kiwi", scores: [94, 99] },
//   { name: "Houston", scores: 64 },
// ];

// const names = students.map((student) => student.name);
// // console.log(names); // ["Mango", "Poly", "Ajax", "Kiwi", "Houston"]
// const flattedScores = students.flatMap((item) => item.scores);
// // console.log(flattedScores);

// const filteredNames = students.filter(
//   (student) => student.name === "Poly" || student.name === "Houston",
// );
// // console.log(filteredNames);

// const reducedNames = students.reduce((student) => student.name);
// console.log(reducedNames);

// function registerGuest(name, callback) {
//   console.log(`Registering ${name}!`);
//   callback(name);
// }

// // Передаємо інлайн-функцію greet у якості колбека
// registerGuest("Mango", function greet(name) {
//   console.log(`Welcome ${name}!`);
// });

// // Передаємо інлайн-функцію notify у якості колбека
// registerGuest("Poly", function notify(name) {
//   console.log(`Dear ${name}, your room will be ready in 30 minutes`);
// });

// const pornHunter = [
//   { name: "Broder", age: 16 },
//   { name: "Verdowitch", age: 16 },
//   { name: "Kvadrowitch", age: 21 },
//   { name: "Ivan Moloduy", age: 18 },
// ];

// const findHunt = pornHunter.find((hunter) => hunter.age === 16);
// console.log(findHunt);

// function petrovitchSexy(name) {
//   console.log(`What a sexy name ${name}`);
// }

// function pornax(name) {
//   console.log(`This is pornax, named ${name}`);
// }

// const names = ["Broder", "Palutch", "Greavy", "Vedrowitch"];
// names.forEach((name, idx) => {
//   if (name === "Vedrowitch") {
//     console.log(`THIS IS PURGEN MIX CALLED ${name}, HIS INDEX - ${idx}`);
//   }
// });

// function dungeonGuest(callback, name) {
//   console.log(`Dungeon slave ${name}`);
//   callback(name);
// }

// dungeonGuest(function petrovitchSexy(name) {
//   console.log(`What a sexy name ${name}`);
// }, "Verdov");
// dungeonGuest((name) => {
//   console.log(`This is pornax, named ${name}`);
// }, "Verdov");

// const numbers = [12, 3, -6, -2, 34, 12];

// const totalNumbers = numbers.reduce((previousValue, number) => {
//   return previousValue + number;
// }, 0);

// console.log(totalNumbers);

// const students = [
//   { name: "Ponton", score: 87 },
//   { name: "Chepuh", score: 43 },
//   { name: "Broder", score: 76 },
//   { name: "Digaga", score: 87 },
// ];

// const totalScore = students.reduce((total, student) => {
//   return total + student.score;
// }, 0);
// const avarageScore = Math.round(totalScore / students.length);
// console.log(avarageScore);

// const numbers = [23, 21, -5, 4, 24, 83, 43, -14, -2, 0, 15];

// const ascendingNumbers = numbers.toSorted((a, b) => a - b);
// const descendingNumbers = numbers.toSorted((a, b) => b - a);

// console.log(ascendingNumbers);
// console.log(descendingNumbers);

// const sort = "a".localeCompare("b");
// console.log(sort);

// const names = [
//   "Brigader",
//   "Diga-ga",
//   "Verdowitch",
//   "Prikoller",
//   "Shimagoga",
//   "Anatoliy",
//   "Kvadrowitch",
// ];

// const sortedNames = names.toSorted((a, b) => a.localeCompare(b));
// console.log(sortedNames);

// const holuies = [
//   { name: "Brigader", score: 67 },
//   { name: "Diga-ga", score: 76 },
//   { name: "Verdowitch", score: 32 },
//   { name: "Prikoller", score: 67 },
//   { name: "Shimagoga", score: 100 },
// ];

// const holuiesInAccedingScore = holuies.toSorted(
//   (firstPidor, secondPidor) => firstPidor.score - secondPidor.score,
// );
// const holuiesInDecendingScore = holuies.toSorted(
//   (firstPidor, secondPidor) => secondPidor.score - firstPidor.score,
// );

// const holuieNameInAlphabet = holuies.toSorted((firstPidor, secondPidor) =>
//   firstPidor.name.localeCompare(secondPidor.name),
// );
// console.log(holuiesInAccedingScore);
// console.log(holuiesInDecendingScore);
// console.log(holuieNameInAlphabet);

// const holuies = [
//   { name: "Brigader", score: 67, pidorNames: ["pidorstics", "pornax"] },
//   { name: "Diga-ga", score: 76, pidorNames: ["psyies", "vodax"] },
//   { name: "Verdowitch", score: 32, pidorNames: ["pidorstics", "analogy"] },
//   { name: "Prikoller", score: 65, pidorNames: ["gonastic", "pornax"] },
//   { name: "Shimagoga", score: 100, pidorNames: ["vodax", "trashsix"] },
// ];

// const uniqueSortedPidorNames = holuies
//   .flatMap((holuie) => holuie.pidorNames)
//   .filter((pidor, index, arr) => arr.indexOf(pidor) === index)
//   .toSorted((a, b) => a.localeCompare(b));

// console.log(uniqueSortedPidorNames);

// const names = holuies
//   .toSorted((firstPidor, secondPidor) => firstPidor.score - secondPidor.score)
//   .map((pidor) => pidor.name);
// console.log(names);

// function showPenis() {
//   console.log("This is showPenis: ", this);
// }
// // showPenis();

// const penis = {
//   username: "Kakaha",
// };
// penis.shaveAnal = showPenis;
// penis.shaveAnal();

// function someBodyWantsToTellMe(str, sir) {
//   console.log(
//     `${str}, ${sir} ${this.slaveName}, your slave number is ${this.slaveNumber}`,
//   );
// }

// const mrPain = {
//   slaveName: "Anal Bomber",
//   slaveNumber: 666,
// };

// const doggySlave = {
//   slaveName: "Final Cockdown",
//   slaveNumber: 1488,
// };

// const res = someBodyWantsToTellMe.call(mrPain, "Welcome", "dear");
// const res2 = someBodyWantsToTellMe.apply(doggySlave, ["Hello", "it's a"]);
// console.log(res);

// const prickoller = {
//   name: "Jazzist",
//   sayPriccccko() {
//     console.log(`Hello, ${this.name}`);
//   },
// };
// // prickoller.sayPriccccko();
// const dickHead = prickoller.sayPriccccko.bind(prickoller);
// dickHead();

// const zaeba = {
//   firstZaeba: "Anal slave chebureck",
//   secondZaeba: "Downcheck",
//   getFullOfHate() {
//     return `${this.firstZaeba} ${this.secondZaeba}`;
//   },
// };

// function makeMessage(callback) {
//   const username = callback();
//   console.log(`Processing an application from ${username}`);
// }
// makeMessage(zaeba.getFullOfHate.bind(zaeba));

// const library = {
//   books: 1923,
//   logBookCount() {
//     console.log(this.books);
//   },
// };

// const showBooks = library.logBookCount.bind({ books: 724 });

// showBooks();

// const showThis = () => {
//   console.log("this in showThis: ", this);
// };

// showThis.call({ username: "Mango" }); // this in showThis: window
// showThis.apply({ username: "Mango" }); // this in showThis: window

// const boundShowThis = showThis.bind({ username: "Broder" });
// boundShowThis(); // this in showThis: window

// const pidoras = {
//   pizda: true,
// };

// const pizdec = Object.create(pidoras);
// pizdec.name = "Pizda Ebanaya(B)";

// const analEbanko = Object.create(pizdec);
// analEbanko.age = 69;

// console.log(analEbanko);
// console.log(analEbanko.hasOwnProperty("name"));

// for (const key of Object.keys(pizdec)) {
//   console.log(key);
// }

// console.log(pidoras.isPrototypeOf(pizdec));
// console.log(pizdec.hasOwnProperty("name"));

// const res = [1, 2, 3].map((elem) => elem * 2);
// console.log(res);

// class PetrovichLoh {
//   name;
//   #age;

//   constructor(params) {
//     console.log(params.name);
//     this.name = params.name;
//     this.#age = params.age;
//   }

//   getAge() {
//     return this.#age;
//   }
//   changeName(newName) {
//     return (this.name = newName);
//   }
// }

// const newVedro = new PetrovichLoh({ name: "Verdrov", age: 69 });

// const Chepukh = new PetrovichLoh({ name: "Broder", age: "Stoned" });
// console.log(newVedro.getAge());
// newVedro.changeName("Digaga");

// const allPlacesToBurn = [
//   {
//     city: "Govenky",
//     location: "Podzalupnie Tvorojky",
//     age: "Stoned",
//     amount: 50,
//     price: 2,
//   },
//   {
//     city: "Navalivaet",
//     location: "Anal Cunt",
//     age: 1488,
//     amount: 66,
//     price: 10,
//   },
//   {
//     city: "Gopniky",
//     location: "Hueta",
//     age: 14,
//     amount: 16,
//     price: 20,
//   },
// ];

// const getLocation = (location = []) =>
//   allPlacesToBurn.map((elem) => elem.location);
// console.log(getLocation(allPlacesToBurn));

// const getPriceWithDiscount = (places, discount) => {
//   return places.map((place) => {
//     return {
//       ...place,
//       price: place.price * (1 - discount),
//     };
//   });
// };
// console.log(getPriceWithDiscount(allPlacesToBurn, 0.2));

// const prikolers = [
//   { id: 1, name: "Shimagoga", timePlayed: 231, points: 59, online: true },
//   { id: 2, name: "Broder", timePlayed: 542, points: 73, online: false },
//   { id: 3, name: "Digaga", timePlayed: 410, points: 67, online: true },
//   { id: 4, name: "Vedrov", timePlayed: 197, points: 43, online: false },
//   { id: 5, name: "Kavidrov", timePlayed: 659, points: 98, online: true },
// ];

// const extraTime = 300;

// const extraPrikolers = prikolers.map((prikoler) => {
//   if (prikoler.timePlayed >= extraTime) {
//     return {
//       ...prikoler,
//       points: prikoler.points + 10,
//     };
//   }
//   return {
//     ...prikoler,
//   };
// });

// console.table(extraPrikolers);

// const prikolerIdToUpdate = 3;

// const updPrikolers = prikolers.map((prikoler) => {
//   if (prikoler.id === prikolerIdToUpdate) {
//     return {
//       ...prikoler,
//       timePlayed: prikoler.timePlayed + 10,
//     };
//   }
//   return prikoler;
// });

// console.table(updPrikolers);

// const prikolers2 = [
//   {
//     id: 1,
//     name: "Shimagoga",
//     timePlayed: 231,
//     points: 59,
//     online: true,
//     prikols: ["AXAXA", "Zalet", "Pizda te"],
//   },
//   {
//     id: 2,
//     name: "Broder",
//     timePlayed: 542,
//     points: 73,
//     online: false,
//     prikols: ["Jopster", "Chimich", "Valen0k"],
//   },
//   {
//     id: 3,
//     name: "Digaga",
//     timePlayed: 410,
//     points: 67,
//     online: true,
//     prikols: ["Noob", "Gomnovitch", "Toolick"],
//   },
//   {
//     id: 4,
//     name: "Vedrov",
//     timePlayed: 197,
//     points: 43,
//     online: false,
//     prikols: ["Noob", "Gomnovitch", "Petrovitch"],
//   },
//   {
//     id: 5,
//     name: "Kavidrov",
//     timePlayed: 659,
//     points: 98,
//     online: true,
//     prikols: ["Kab", "Gomno", "Tolick008"],
//   },
// ];

// const prikols = prikolers2.flatMap((prikoler) => prikoler.prikols);

// console.log(prikols);

// class Drovitch {
//   static roles = {
//     role1: "Huesos",
//     role2: "Pizdoliz",
//     role3: "Chepukh",
//   };
//   static #takenEmails = [];

//   static isEmailTaken(email) {
//     return this.#takenEmails.includes(email);
//   }
//   name;
//   #role;
//   #age;
//   #email;
//   constructor(params) {
//     this.name = params.name;
//     this.#age = params.age;
//     this.#role = params.role || Drovitch.roles.role3;
//     if (this.#validateEmail(params.email)) {
//       this.#email = params.email;
//       Drovitch.#takenEmails.push(params.email);
//     }
//   }
//   get role() {
//     return this.#role;
//   }
//   set role(newRole) {
//     return (this.#role = newRole);
//   }
//   get age() {
//     return this.#age;
//   }
//   setName(newName) {
//     return (this.name = newName);
//   }
//   get email() {
//     return this.#email;
//   }
//   set email(newEmail) {
//     if (this.#validateEmail(newEmail)) {
//       return (this.#email = newEmail);
//     }
//     return `Веселі помідори`;
//   }
//   #validateEmail(email) {
//     return email.includes("@");
//   }
// }

// const analCunt = new Drovitch({
//   name: "Digaga",
//   age: 69,
//   email: "buga-gaga@vodochnuy.ucoz",
//   role: Drovitch.roles.role1,
// });
// const prikolerVedrover = new Drovitch({
//   name: "Vedrovitch",
//   age: "Stoned",
//   email: "buga-gaga0vodochnuy.ucoz",
// });

// // analCunt.email = "Dogy-dogy2pidor.com";
// // console.log(Drovitch.isEmailTaken("buga-gaga@vodochnuy.ucoz"));
// console.log(analCunt.setName("Pidoras"));

const vasichka = {
  name: "Gomnovitch",
  age: 69,
  penisSize: 22,
  getMessageToVedrovitch(location) {
    return `${this.name} - name, ${this.age} years - age, ${this.penisSize} sm - penis, ${location} - country`;
  },
};
// console.log(vasichka.getMessageToVedrovitch("Kvadrovia"));

// const parenekGoPoVodochke = () => {
//   console.log("This is vodochka", this);
// };

// vasichka.showVodochka = parenekGoPoVodochke;
// vasichka.showVodochka();

// function analCaravan(str) {
//   console.log(
//     `${str}, ${this.name} - your name, lohoped. ${this.age} years - your age`,
//   );
// }

// const dogy = {
//   name: "Dodik",
//   age: 69,
// };

// const digaga = {
//   name: "Broder",
//   age: 18,
// };

// const mudak = {
//   name: "Svolotch",
//   age: 1488,
// };

// analCaravan.call(dogy, "Gomnar");
// analCaravan.apply(digaga, ["Chepukh"]);
// const muden = analCaravan.bind(mudak, "Mudak");
// muden();

// const obj = {
//   firstPedik: "Chepukha",
//   secondPedik: "Ebanaya",
//   getFullOfHate() {
//     return `${this.firstPedik} ${this.secondPedik}`;
//   },
// };

// function showMessage(callback) {
//   const username = callback();
//   console.log(`${username} - chlenohuy`);
// }

// showMessage(obj.getFullOfHate.bind(obj));

// const obj = {
//   key1: "Value 1",
//   key2: "Value 2",
//   makeValues() {
//     return `${this.key1} and ${this.key2} - chepukha`;
//   },
// };

// function makeMessage(callback) {
//   console.log(callback());
// }

// const result = makeMessage(obj.makeValues.bind(obj));

// const chepukh = {
//   gomnar: true,
// };

// const govno = Object.create(chepukh);
// govno.name = "Vedrovitch";
// govno.age = "Stoned";

// for (const element of Object.keys(chepukh)) {
//   console.log(element);
// }

// for (const key in govno) {
//   if (govno.hasOwnProperty(key)) {
//     console.log(key);
//   }
// }

// for (const key in govno) {
//   if (!Object.hasOwn(govno, key)) continue;

//   const element = govno[key];
//   console.log(element);
// }
// console.log(chepukh.hasOwnProperty("name"));

class RecordStudio {
  name;
  static #takenEmails = [];
  #email;
  static isEmailTaken(email) {
    return RecordStudio.#takenEmails.includes(email);
  }

  constructor(params) {
    // console.log(name, email);
    this.name = params.name;
    RecordStudio.#takenEmails.push(params.email);
  }
  getName() {
    return this.name;
  }
  get email() {
    return this.#email;
  }
  set email(newEmail) {
    if (newEmail === "") {
      console.log("Yo're a lokhotenko");
      return;
    } else if (this.#validateEmail(newEmail)) {
      return (this.#email = newEmail);
    } else {
      console.log("Sosy hui pidor");
      return;
    }
  }
  #validateEmail(email) {
    return email.includes("@");
  }
}

class prikolsAtStudio extends RecordStudio {}

const toshaRecords = new RecordStudio({
  name: "Ponton",
  email: "LokhotenkoPonton@dikhmet.com",
});
const metalkekStudioGarage = new prikolsAtStudio({
  name: "Debitch",
  email: "BananaInYour(Va)Gina@ucoz.com.ua",
});
toshaRecords.email = "yaLokhotenkoPonton@dikhmet.com.ua";
// console.log(prikolsAtStudio.isEmailTaken("BananaInYour(Va)Gina@ucoz.com.ua"));

// console.log(toshaRecords);

class User {
  constructor(email) {
    this.email = email;
  }

  getEmail() {
    return this.email;
  }

  setEmail(newEmail) {
    this.email = newEmail;
  }
}

class Admin extends User {
  role;
  constructor(params) {
    super(params.email);
    this.role = params.role;
    this.online = params.online;
    this.porns = params.porns;
  }
  addPorn(newPron) {
    this.porns.push(newPron);
  }
}

const editor2 = new Admin({
  role: "editor",
  email: "Chepukha@hui.nah",
  online: true,
  porns: [],
});
editor2.addPorn("Anal Hookers");
editor2.addPorn("Fart to your mouth");
console.log(editor2);
