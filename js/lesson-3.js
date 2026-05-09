// Дано масив чисел [1, 2, 3, 4, 5]. Створіть новий масив, що містить
// квадрати кожного елементу вхідного масиву.
// Очікуваний результат: [1, 4, 9, 16, 25].

// const numbers = [1, 2, 3, 4, 5];

// const doubleNumbers = numbers.map((number) => number ** 2);
// // console.log(doubleNumbers);

// const getDoubleNumbers = (array) => array.map((number) => number ** 2);
// console.log(getDoubleNumbers(numbers));

// Дано масив об'єктів. Створіть новий масив, що містить всі значення
// з масивів values кожного об'єкту, збережених в одному масиві.
// Очікуваний результат: [1, 2, 3, 4, 5, 6, 7, 8, 9].

const data = [
  { id: 1, values: [1, 2, 3] },
  { id: 2, values: [4, 5, 6] },
  { id: 3, values: [7, 8, 9] },
];

const result = data.map((item) => item.values).flat();

// console.log(result);

// Дано масив об'єктів.
// Перевірте, чи є хоча б один об'єкт з віком менше 20 років.
// Очікуваний результат: true.

const people = [
  { name: "John", age: 27 },
  { name: "Jane", age: 31 },
  { name: "Bob", age: 19 },
];

const resObj = people.some((element) => element.age < 20);
// console.log(resObj);

// Дано масив чисел [2, 4, 6, 8, 10].
// Перевірте, чи є кожен елемент масиву парним. Очікуваний результат: true.

const numbers = [2, 4, 6, 8, 10];

const result2 = numbers.every((element) => element % 2 === 0);
// console.log(result2);

// Знайдіть перше непарне число

const numbers2 = [2, 1, 6, 8, 9, 10, 12];
const res3 = numbers2.find((number) => number % 2 === 1);
// console.log(res3);

// Відсортуйте масив чисел [4, 2, 5, 1, 3]
// у порядку зростання. Очікуваний результат: [1, 2, 3, 4, 5].

const numbersArray = [4, 2, 5, 1, 3];

const sortedNumbers = numbersArray.toSorted((a, b) => a - b);
// console.log(sortedNumbers);

// Відсортуйте масив рядків ["banana", "orange", "apple", "pear"]
//  у порядку алфавіту.
// Очікуваний результат: ["apple", "banana", "orange", "pear"].

const stringArray = ["banana", "orange", "apple", "pear"];
const sortedArr = stringArray.toSorted((a, b) => a.localeCompare(b));
// console.log(sortedArr);

const getSorted = (arr) => arr.toSorted((a, b) => a.localeCompare(b));
// console.log(getSorted(stringArray));

//  Відсортуйте масив об'єктів за віком у порядку зростання.
// Очікуваний результат: [{name: "Bob", age: 19}, {name: "John", age: 27}, {name: "Jane", age: 31}].

const users = [
  { name: "John", age: 27 },
  { name: "Jane", age: 31 },
  { name: "Bob", age: 19 },
];

const getSortedAge = (array) => array.toSorted((a, b) => a.age - b.age);
// console.log(getSortedAge(users));

// Дано масив об'єктів.
// Створіть новий масив, що містить тільки об'єкти, в яких
// вік більше 20 років.
// Очікуваний результат: [{name: "John", age: 27}, {name: "Jane", age: 31}]

const user = [
  { name: "John", age: 27 },
  { name: "Jane", age: 31 },
  { name: "Bob", age: 19 },
];

const getFilteredArr = (array) => array.filter((elem) => elem.age > 20);
// console.log(getFilteredArr(user));

// Дано масив чисел [1, 2, 3, 4, 5].
// Застосуйте метод для обчислення суми елементів масиву.

const numbers3 = [1, 2, 3, 4, 5];

const getSumEl = (array) => array.reduce((acc, curr) => acc + curr, 0);
// console.log(getSumEl(numbers3));

// 10. Знайти найдорожчий продукт у категорії "meat"
// Напиши для цього функцію getMostExpensiveMeatProduct(products)

const products = [
  { name: "Apple", category: "fruits", price: 1.2, stock: 50 },
  { name: "Banana", category: "fruits", price: 0.8, stock: 100 },
  { name: "Carrot", category: "vegetables", price: 0.5, stock: 200 },
  { name: "Broccoli", category: "vegetables", price: 1.0, stock: 150 },
  { name: "Milk", category: "dairy", price: 1.5, stock: 20 },
  { name: "Cheese", category: "dairy", price: 2.5, stock: 5 },
  { name: "Chicken", category: "meat", price: 5.0, stock: 30 },
  { name: "Beef", category: "meat", price: 7.0, stock: 25 },
];

function getMostExpensiveMeatProduct(products) {
  const meatProducts = products.filter(
    (product) => product.category === "meat",
  );
  return meatProducts.reduce((mostExpensive, product) => {
    return product.price > mostExpensive.price ? product : mostExpensive;
  });
}
// console.log(getMostExpensiveMeatProduct(products));

// Розроби клас Calculator, який дозволяє виконувати арифметичні
//  операції над числом за допомогою методів класу, підтримуючи
// ланцюжковий виклик (method chaining).
//
// Вимоги до класу Calculator
// - Метод number(value)
// Встановлює початкове значення для наступних обчислень.
// Повертає сам об'єкт (this) для підтримки ланцюжкових викликів.

// - метод getResult, Повертає поточний результат усіх операцій.
// Не змінює значення, просто повертає його.

// - метод add - Додає value до поточного значення.
// Повертає сам об'єкт (this) для підтримки ланцюжкових викликів.

// - метод subtract - Віднімає value від поточного значення. Повертає this.

// - метод divide - Ділить поточне значення на value, якщо value не дорівнює 0.
// Якщо value === 0, викидає помилку з повідомленням про неможливість ділення.
// Повертає сам об'єкт (this) для підтримки ланцюжкових викликів.

// - метод multiply -Множить поточне значення на value. Повертає this.

// Об'єкт класу може проводити послідовні операції у вигляді ланцюжка

// Приклад використання:
// const calc = new Calculator();

// const result = calc
//   .number(10)   // Встановлюємо початкове значення 10
//   .add(5)       // Додаємо 5 (10 + 5 = 15)
//   .subtract(3)  // Віднімаємо 3 (15 - 3 = 12)
//   .multiply(4)  // Множимо на 4 (12 * 4 = 48)
//   .divide(2)    // Ділимо на 2 (48 / 2 = 24)
//   .getResult(); // Отримуємо результат: 24

//   console.log(result); // 24

class Calculator {
  constructor() {
    this.result = 0;
  }
  number(value) {
    this.result = value;
    return this;
  }
  getResult() {
    return this.result;
  }
  add(value) {
    this.result += value;
    return this;
  }
  subtract(value) {
    this.result -= value;
    return this;
  }
  divide(value) {
    if (value === 0) {
      console.error("Error. Go home");
    } else {
      this.result /= value;
    }
    return this;
  }
  multiply(value) {
    this.result *= value;
    return this;
  }
}

// const calc = new Calculator();
// const result4 = calc
//   .number(10) // Встановлюємо початкове значення 10
//   .add(5) // Додаємо 5 (10 + 5 = 15)
//   .subtract(3) // Віднімаємо 3 (15 - 3 = 12)
//   .multiply(4) // Множимо на 4 (12 * 4 = 48)
//   .divide(2) // Ділимо на 2 (48 / 2 = 24)
//   .getResult(); // Отримуємо результат: 24

// console.log(result4); // 24

// Завдання 12:
// Напиши клас Client який створює об'єкт з властивостями login email.
// Оголоси приватні властивості #login #email, доступ до яких зроби
// через геттер та сеттер login email

class Client {
  #login;
  #email;
  constructor(params) {
    this.#login = params.login;
    this.#email = params.email;
  }
  get login() {
    return this.#login;
  }
  set login(newlogin) {
    this.#login = newlogin;
  }
  get email() {
    return this.#email;
  }
  set email(newEmail) {
    if (typeof newEmail === "string" && newEmail.includes("@")) {
      this.#email = newEmail;
      return;
    }
    console.log("Invalid format");
  }
}

const newClient = new Client({
  login: "Sex_Blender",
  email: "adikhtenko@gmail.com",
});
newClient.login = "qwe";
newClient.email = "valenok@loh";
// console.log(newClient);

//  Наслідування у класах!
// Cтворіть клас `Person`, який містить наступні властивості:
//  - `name` - ім'я людини;
//  - `age`- вік людини;
//  - `gender` - стать людини;
//  - `email`- електронна пошта людини.

// Крім того, клас `Person` має мати метод `getDetails()`,
// який повертає об'єкт з ім'ям, віком, статтю
//та електронною поштою людини.

//
// Потім Створіть клас `Employee`, який розширює клас `Person` і містить наступні властивості:
//  - salary - зарплата співробітника;
//  - department - відділ, в якому працює співробітник.
// Крім того, клас `Employee` має мати метод `getEmployeeDetails()`, який повертає об'єкт з зарплатою співробітника та відділом, в якому він працює.

class Person {
  constructor(name, age, gender, email) {
    this.name = name;
    this.age = age;
    this.gender = gender;
    this.email = email;
  }
  getDetails() {
    return {
      name: this.name,
      age: this.age,
      gender: this.gender,
      email: this.email,
    };
  }
}

class Employee extends Person {
  constructor(name, age, gender, email, salary, department) {
    super(name, age, gender, email);
    this.salary = salary;
    this.department = department;
  }
  getEmployeeDetails() {
    return {
      ...super.getDetails(),
      salary: this.salary,
      department: this.department,
    };
  }
}

const Employer = new Employee(
  "Anton",
  29,
  "male",
  "adikhtenko@gmail.com",
  9999999,
  "circus",
);
console.log(Employer.getEmployeeDetails());
