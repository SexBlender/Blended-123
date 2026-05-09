// Запропонуйте користувачу ввести число за допомогою prompt().
// Збережіть введене значення у змінну number.
// Перевірте, чи дорівнює змінна number числу 10:
//    Якщо так – виведіть повідомлення 'Вірно' у alert().
//    Якщо ні – виведіть 'Невірно'.

// Підказка: prompt завжди повертає рядок (String), тому перед перевіркою
// перетворіть значення на число за допомогою Number().

// const number = Number(prompt("Введіть число"));
// number === 10 ? alert("Вірно") : alert("Невірно");

// У змінній min лежить випадкове число від 0 до 59.
// Визначте, в яку чверть години потрапляє
// це число (у першу, другу, третю чи четверту).
// Виведіть в alert відповідне повідомлення, наприклад:
// "10 входить в першу чверть"

// const min = Math.floor(Math.random() * 59);
// if (min < 15) {
//   alert(`${min} входить в першу чверть`);
// } else if (min < 30) {
//   alert(`${min} входить в другу чверть`);
// } else if (min < 45) {
//   alert(`${min} входить в третю чверть`);
// } else {
//   alert(`${min} входить в четверту чверть`);
// }

// Змінна num може набувати 4 значення: '1', '2', '3' або '4'
// (запитуй це значення у користувача через prompt).
// Якщо вона має значення '1', то у змінну result запишіть 'зима',
// якщо має значення '2' - 'весна' і так далі.
// Розв'яжіть завдання через switch-case.
// Не забудьте про дефолтне значення, на випадок, якщо користувач
// введе в prompt щось інше. В такому випадку result має набувати значення:
// "Вибачте, але ви маєте ввести значення від 1 до 4 включно".
// Значення змінної result виведіть в консоль.

// const num = prompt("Введіть значення від 1 до 4");
// let result;

// switch (num) {
//   case "1":
//     result = "Зима";
//     break;
//   case "2":
//     result = "Весна";
//     break;
//   case "3":
//     result = "Літо";
//     break;
//   case "4":
//     result = "Осінь";
//     break;
//   default:
//     result = "Вибачте, але ви маєте ввести значення від 1 до 4 включно";
// }

// console.log(result);

// Отримуйте від користувача число (кількість хвилин) через prompt
// і виводьте у консоль рядок у форматі годин та хвилин.
// Приклад: користувач вводить в prompt '70' -> в консолі відобразиться '01:10'.
// Корисне посилання для відображення годин та хвилин у потрібному форматі ('01' замість '1'):
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/padStart#examples

// const input = Number(prompt("Введіть к-сть хв"));
// const hours = String(Math.floor(input / 60));
// const minutes = String(input % 60);
// console.log(`${hours.padStart(2, "0")}: ${minutes.padStart(2, "0")} `);

// Напишіть код, який запитуватиме у користувача
// логін за допомогою prompt і виводить результат в консоль браузера

// Після цього додайте перевірку введеного користувачем значення:
// Якщо відвідувач вводить "Адмін",
// то prompt запитує пароль (не забудьте зберігти його у змінну для подальшої перевірки).
// Якщо нічого не ввели або натиснули Cancel,
// Вивести в alert строку "Скасовано"
// В іншому випадку вивести в alert рядок "Я вас не знаю"

// Пароль перевіряти так:
// Якщо введено пароль "Я головний",
// то вивести в alert рядок "Добрий день!",
// в іншому випадку вивести в alert рядок "Невірний пароль!"

// const login = prompt("Введіть логін");
// if (login === null || login === "") {
//   alert("Скасовано");
// } else if (login === "Адмін") {
//   const password = prompt("Введіть пароль");
//   if (password === null || password === "") {
//     alert("Скасовано");
//   } else if (password === "Я головний") {
//     alert("Добрий день!");
//   } else {
//     alert("Невірний пароль");
//   }
// } else {
//   alert("Я Вас не знаю");
// }

// console.log("PASSWORD:", password);

// Використайте цикл while, щоб вивести в console всі числа від 0 до 20 включно.

// let i = 0;

// while (i <= 20) {
//   console.log(i);
//   i++;
// }

// Напишіть функцію getNumbers(min, max), що приймає 2 параметри -
// мінімальне і максимальне число відповідно.
// Напишіть цикл всередині функції, який виводить у консоль
// всі числа від max до min за спаданням.
// Окрім цього, підрахуйте суму всіх парних чисел в цьому циклі
// і поверніть її з функції.

// function getNumbers(min, max) {
//   let sum = 0;
//   for (let i = max; i >= min; i--) {
//     console.log(i);
//     if (i % 2 === 0) {
//       sum += i;
//     }
//   }
//   return sum;
// }

// console.log(getNumbers(2, 10));

// Напишіть функцію min(a, b), яка приймає 2 числа і повертає меньше з них.
// Потрібно додати перевірку, що функція отримує саме числа, в іншому випадку
// повертати з функції рядок - 'Not a number!'.

// function min(a, b) {
//   if (typeof a !== "number" || typeof b !== "number") {
//     return "Not a number!";
//   }
//   if (a < b) {
//     return a;
//   } else {
//     return b;
//   }
// }
// console.log(min(4, 9));
// console.log(min("a", "b"));

// Напишіть функцію isAdult(age), яка  приймає число - вік користувача і повертає true,
// якщо параметр age більше чи дорівнює 18.
// В іншому випадку вона запитує підтвердження через confirm
// і повертає його результат (true/false).

// function isAdult(age) {
//   if (age >= 18) {
//     return true;
//   } else {
//     confirm("Вам 18, чи більше років?");
//   }
// }
// console.log(isAdult(18));

// Напишіть функцію fizzBuzz(num), яка приймає число і перевіряє кожне число від 1 до num:
// Якщо число ділитися  без остачі на 3 - виводить в консоль 'fizz',
// якщо ділиться  без остачі на 5 - виводить в консоль 'buzz',
// якщо ділиться  без остачі і на 3, і на 5 - виводить в консоль 'fizzbuzz'.

// function fizzBuzz(num) {
//   for (let i = 1; i <= num; i++) {
//     if (i % 3 === 0 && i % 5 === 0) {
//       console.log("fizzbuzz");
//     } else if (i % 5 === 0) {
//       console.log("buzz");
//     } else if (i % 3 === 0) {
//       console.log("fizz");
//     }
//   }
// }
// fizzBuzz(15);

// Напишіть функцію checkNumber(num), яка:

// повертає "positive", якщо число більше 0
// "negative", якщо менше 0
// "zero", якщо дорівнює 0

// function checkNumber(num) {
//   if (typeof num !== "number" || Number.isNaN(num)) {
//     return "Not a number";
//   } else if (num > 0) {
//     return "positive";
//   } else if (num < 0) {
//     return "negative";
//   } else {
//     return "zero";
//   }
// }
// console.log(checkNumber(-2));

// Напишіть функцію isEven(num), яка:

// повертає true, якщо число парне
// інакше false

// function isEven(num) {
//   if (num % 2 === 0 && num !== 0) {
//     return "true";
//   } else {
//     return "false";
//   }
// }
// console.log(isEven(0));

// Напишіть функцію getDiscount(age), яка:

// якщо вік менше 18 → повертає "child discount"
// якщо 18–60 → "no discount"
// якщо більше 60 → "senior discount"

// function getDiscount(age) {
//   if (typeof age !== "number" || Number.isNaN(age)) {
//     return "Not a number";
//   } else if (age < 18) {
//     return "child discount";
//   } else if (age >= 18 && age <= 60) {
//     return "no discount";
//   } else {
//     return "senior discount";
//   }
// }
// console.log(getDiscount(76));

// Напишіть функцію sumTo(n), яка:

// обчислює суму чисел від 1 до n
// повертає результат

// function sumTo(n) {
//   let sum = 0;
//   for (let i = 1; i <= n; i++) {
//     sum += i;
//   }
//   return sum;
// }
// console.log(sumTo(5));

// Напишіть функцію printNumbers(n), яка:

// виводить у консоль всі числа від n до 1 (зворотній порядок)

// function printNumbers(n) {
//   for (let i = n; i >= 1; i--) {
//     console.log(i);
//   }
// }
// printNumbers(3);

// Перевірка на 5
// Запитай число через prompt.
// Якщо воно дорівнює 5 → вивести "Yes", інакше "No"

// let number = Number(prompt("Введіть число"));
// number === 5 ? console.log("Yes") : console.log("No");

// Є число num.
// Якщо воно від 10 до 20 включно → "OK", інакше "OUT".

// function letNum(num) {
//   if (num >= 10 && num <= 20) {
//     alert("OK");
//   } else {
//     alert("OUT");
//   }
// }
// letNum(20);

// function lastTwoDigits(num) {
//   return num % 100;
// }

// console.log(lastTwoDigits(133));

// 6. Кратність
// Функція isMultiple(a, b):

// перевіряє чи a ділиться на b без остачі
// повертає true/false

// function isMultiple(a, b) {
//   if (a % b === 0) {
//     return true;
//   } else if (b == 0) {
//     return "Чіпуха скул";
//   } else {
//     return false;
//   }
// }

// console.log(isMultiple(4, 0));

// Сума цифр
// Функція sumDigits(num):

// рахує суму всіх цифр числа
// приклад: 123 → 6

// function sumDigits(num) {
//   let sum = 0;
//   while (num > 0) {
//     sum = sum + (num % 10);
//     num = Math.floor(num / 10);
//   }
//   return sum;
// }
// console.log(sumDigits(123));

// 8. Пошук найдовшого слова
// Функція findLongest(str):

// повертає найдовше слово з рядка

// function findLongest(str) {
//   const words = str.split(" ");
//   let longestWord = "";
//   for (let i = 0; i < words.length; i++) {
//     if (longestWord.length < words[i].length) {
//       longestWord = words[i];
//     }
//   }
//   return longestWord;
// }
// console.log(findLongest("Hello word"));

// 🔹 1. Перевірка на конкретне число

// Запитай число через prompt.

// Якщо число дорівнює 7 → виведи "Lucky!"
// Інакше → "Try again"

// let number = prompt("Введіть число");

// if (number === "7") {
//   console.log("Lucky!");
// } else {
//   console.log("Try again");
// }

// 🔹 2. Парне / непарне

// Запитай число через prompt.

// Якщо число парне → "Even"
// Якщо непарне → "Odd"

// let numb = parseInt(prompt("Введіть число"));
// if (isNaN(numb) === true) {
//   console.log("Пыздец");
// } else if (numb % 2 === 0) {
//   console.log("Even");
// } else {
//   console.log("Odd");
// }
// // console.log(typeof numb);

// 3. Діапазон числа

// Запитай число.

// Якщо від 1 до 10 → "Маленьке"
// Якщо від 11 до 100 → "Середнє"
// Якщо більше 100 → "Велике"

// let numb = parseInt(prompt("Введіть число"));
// if (isNaN(numb) === true || numb <= 0) {
//   console.log("Фортеця Макс");
// } else if (numb > 0 && numb <= 10) {
//   console.log("Маленьке");
// } else if (numb > 10 && numb <= 100) {
//   console.log("Середнє");
// } else {
//   console.log("Велике");
// }

// 4. Конвертація годин у хвилини

// Запитай кількість годин.

// Переведи в хвилини
// Виведи в консоль

// let hours = parseInt(prompt("Введіть годину"));
// let minutes = hours * 60;
// if (isNaN(hours) === true) {
//   console.log("Error");
// } else {
//   console.log(`Залишилось хвилин - ${minutes}`);
// }

// 5. Визначення дня тижня (switch)

// Запитай число від 1 до 7.

// 1 → "Понеділок"
// 2 → "Вівторок"
// ...
// 7 → "Неділя"
// інше → "Невірне значення"

// const number = prompt("Введіть число від 1 до 7");
// let result;

// switch (number) {
//   case "1":
//     result = "Понеділок";
//     break;
//   case "2":
//     result = "Вівторок";
//     break;
//   case "3":
//     result = "Середа";
//     break;
//   case "4":
//     result = "Четверг";
//     break;
//   case "5":
//     result = "П'ятниця";
//     break;
//   case "6":
//     result = "Субота";
//     break;
//   case "7":
//     result = "Неділя";
//     break;
//   default:
//     result = "Введіть значення від 1 до 7 включно";
//     break;
// }
// console.log(result);

// 6. Сума тільки непарних чисел

// Напиши функцію sumOdd(n):

// рахує суму всіх непарних чисел від 1 до n
// повертає результат

// function sumOdd(n) {
//   let sum = 0;
//   for (let i = 1; i <= n; i++) {
//     if (i % 2 !== 0) {
//       sum += i;
//     }
//   }
//   return sum;
// }
// console.log(sumOdd(3));

// 7. Зворотний рядок

// Напиши функцію reverseString(str):

// приймає рядок
// повертає його у зворотному порядку

// function reverseString(str) {
//   return str.split("").reverse().join("");
//   //   let arrStr = str.split("");
//   //   let updStr = "";
//   //   for (let i = arrStr.length - 1; i >= 0; i--) {
//   //     // console.log(arrStr[i]);

//   //     updStr += arrStr[i];
//   //   }

//   //   return updStr;
// }
// console.log(reverseString("London is the capital"));

// 8. Порахувати голосні

// Напиши функцію countVowels(str):

// рахує кількість голосних (a, e, i, o, u)
// повертає число

// function countVowels(str) {
//   let count = 0;

//   for (let i = 0; i < str.length; i++) {
//     let letter = str[i].toLowerCase();

//     if (
//       letter === "a" ||
//       letter === "e" ||
//       letter === "i" ||
//       letter === "o" ||
//       letter === "u"
//     ) {
//       count++;
//     }
//   }

//   return count;
// }
// // console.log(countVowels("HELLO WORLD"));
// console.log(countVowels("hello world"));

// Напиши функцію multiplyTable(n):

// виводить у консоль таблицю множення від 1 до n

// function multiplyTable(n) {
//   for (let i = 1; i <= n; i++) {
//     console.log(n);
//     for (let idx = 1; idx <= 10; idx++) {
//       console.log(`${i} * ${idx} = ${i * idx}`);
//     }
//   }
// }
// multiplyTable(12);

// "" + 1 + 0; // "10"
// "" - 1 + 0; // -1
// true + false; // 1
// 6 / "3"; //2
// "2" * "3"; //6
// 4 + 5 + "px"; //"9px"
// "$" + 4 + 5; // "$45"
// "4" - 2; //2
// "4px" - 2; //NaN
// "  -9  " + 5; // " -9  5"
// "  -9  " - 5; // -14
// null + 1; // 1
// undefined + 1; // NaN
// " \t \n" - 2; // -2

// Напишіть код, який запитує логін за допомогою prompt.

// Якщо відвідувач вводить "Admin", тоді запропонуйте за допомогою prompt ввести пароль. Якщо введено порожній рядок або натиснуто Esc – показати “Скасовано”. Якщо введено інший рядок – тоді покажіть “Я вас не знаю”.

// Пароль перевіряється наступним чином:

// Якщо він дорівнює “Господар”, тоді покажіть “Ласкаво просимо!”,
// Інший рядок – покажіть “Неправильний пароль”,
// Для порожнього рядка, або якщо введення було скасовано, покажіть “Скасовано”.

// let input = prompt("Введіть логін");
// if (input === "Admin") {
//   let password = prompt("Введіть пароль");
//   if (password === "Господар") {
//     alert("Ласкаво просимо");
//   } else if (password === "" || password === NaN) {
//     alert("Скасовано");
//   } else {
//     alert("Неправильний пароль");
//   }
// } else if (input === null || input === "") {
//   alert("Скасовано");
// } else {
//   alert("Я вас не знаю");
// }

// Напишіть цикл, який пропонує prompt ввести число більше за 100. Якщо відвідувач введе інше число – попросити ввести ще раз, і так далі.

// Цикл повинен запитувати число доти, доки відвідувач не введе число, більше за 100, або не скасує ввід/введе порожній рядок.

// Ми припускаємо, що відвідувач вводитиме лише числа. В цьому завданні не обов’язково реалізовувати оброблення нечислового введення.

// let num;
// do {
//   num = prompt("Введіть число більше 100");
// } while (Number(num) <= 100 && num != null && num != "");

// Напишіть код, який виводить всі прості числа в діапазоні від 2 до n.

// Для n = 10 результат повинен бути 2,3,5,7.

// P.S. Код також повинен легко модифікуватися для будь-якого числа n.

// let n = 10;

// for (let i = 2; i <= n; i++) {
//   let isPrime = true;

//   for (let j = 2; j < i; j++) {
//     if (i % j === 0) {
//       isPrime = false;
//       break;
//     }
//   }

//   if (isPrime) {
//     console.log(i);
//   }
// }

// Напишіть код з використанням if..else, що відповідає наступній конструкції switch:

// let browser = "Edge";
// if (browser === "Edge") {
//   alert("You've got the Edge!");
// } else if (
//   browser === "Chrome" ||
//   browser === "Firefox" ||
//   browser === "Safari" ||
//   browser === "Opera"
// ) {
//   alert("Ми підтримуємо і ці браузери");
// } else {
//   alert("Маємо надію, що ця сторінка виглядає добре!");
// }

// switch (browser) {
//   case "Edge":
//     alert("You've got the Edge!");
//     break;

//   case "Chrome":
//   case "Firefox":
//   case "Safari":
//   case "Opera":
//     alert("Ми підтримуємо і ці браузери");
//     break;

//   default:
//     alert("Маємо надію, що ця сторінка виглядає добре!");
// }

// Перепишіть код нижче використовуючи одну конструкцію switch:

// let a = +prompt("a?", "");

// if (a == 0) {
//   alert( 0 );
// }
// if (a == 1) {
//   alert( 1 );
// }

// if (a == 2 || a == 3) {
//   alert( '2,3' );
// }

// switch (a) {
//   case 0:
//     alert(0);
//     break;
//   case 1:
//     alert(1);
//     break;
//   case 2:
//   case 3:
//     alert("2,3");
//     break;
// }

// Напишіть функцію min(a, b), яка повертає менше з двох чисел a та b.

// function min(a, b) {
//   if (isNaN(a) || isNaN(b)) {
//     return "Обосратушки";
//   } else if (a === b) {
//     return "Один хуй за всіх";
//   } else if (a < b) {
//     return a;
//   } else {
//     return b;
//   }
// }

// console.log(min("2", "2"));

// Напишіть функцію pow(x, n), яка повертає число x, піднесене до степеня n. Інакше кажучи, множить число x саме на себе n разів і повертає результат.
// Створіть сторінку, яка запитує x та n, а потім показує результат pow(x, n)

// Замініть Функціональні Вирази на стрілкові функції у коді нижче:

// function ask(question, yes, no) {
//   if (confirm(question)) yes();
//   else no();
// }

// ask(
//   "Ви згодні?",
//   function () {
//     alert("Ви погодились.");
//   },
//   function () {
//     alert("Ви скасували виконання.");
//   },
// );

// let ask = (question, yes, no) => {
//   if (confirm(question)) yes();
//   else no();
// };

// ask(
//   "Ви згодні?",
//   () => alert("Ви погодились."),
//   () => alert("Ви скасували виконання."),
// );

// Просте число – це натуральне число, яке має два дільники (1 і саме число).

// Інакше кажучи, n > 1 – просте, якщо воно більше за 1 і ділиться без остачі на 1 та n.

// Наприклад, число 5 – просте, тому що воно не ділиться без остачі на 2, 3 і 4. Воно ділиться без остачі лише на 1 і на 5.

// Напишіть код, який виводить всі прості числа в діапазоні від 2 до n.

// Для n = 10 результат повинен бути 2,3,5,7.

// P.S. Код також повинен легко модифікуватися для будь-якого числа n.

// let n = 10;

// nextPrime: for (let i = 2; i <= n; i++) {
//   for (let j = 2; j < i; j++) {
//     if (i % j === 0) {
//       continue nextPrime;
//     }
//   }
//   console.log(i);
// }

// let key = "name";
// let obj = { [key]: "Anton" };
// obj["na" + "me"];
// obj[key];
// // console.log(obj);
// console.log("name" in obj);
