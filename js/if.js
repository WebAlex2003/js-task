/* Ветвление if, else if */

const quantity = 2;
let price;

if (quantity === 1) {
  price = 200;
} else if (quantity === 2) {
  price = 400;
} else if (quantity === 3) {
  price = 600;
} else if (quantity === 4) {
  price = 800;
} else {
  price = "More than 1000$";
}

console.log(price);

/* if else */

const balance = 1000;
let message;

if (balance >= 0) {
  message = "positive balance";
} else {
  message = "negative balance";
}

console.log(message);

/* Task 1 конструкция If else с логическим оператором && */
/* Логическое && запинается на лжи */

const a = 1000;
let sms;

if (a > 500 && 1001 < a) {
  sms = "True";
} else {
  sms = "False";
}

console.log(sms);

/* Task 2 конструкция else if c логическим оператором || */
/* Логическое || запинается на правде */

const salary = 10000;
let bonus;

if (salary > 50000 || salary > 99990) {
  bonus = 2000;
} else if (salary >= 10000 || 250000 < salary) {
  bonus = 3000;
} else {
  bonus = "We dont have such a heigh salary";
}

console.log(bonus);
