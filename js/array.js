// Task 1

// function getLastElementMeta(array) {
//   const newArray = [];
//   const lastIndex = array.length - 1;

//   const result = newArray.push(lastIndex, array[lastIndex]);

//   // return newArray
//   console.log(newArray);
// }
// getLastElementMeta(["apple", "peach", "pear", "banana"]);
// getLastElementMeta(["apple", "peach", "pear"]);
// getLastElementMeta(["apple", "peach"]);
// getLastElementMeta(["apple"]);

// Task 2

// function getExtremeElements(array) {
//   const newArray = [];

//   const firstIndex = array[0];
//   const lastIndex = array.length - 1;

//   newArray.push(firstIndex, array[lastIndex]);

//   console.log(newArray);
//   return newArray;
// }

// getExtremeElements([1, 2, 3, 4, 5]);
// getExtremeElements(["Earth", "Mars", "Venus"]);
// getExtremeElements(["apple", "peach", "pear", "banana"]);

// Методы массивов

/* Метод массива join применяется для того что бы соеденить какие либо значения */

// function getLength(array) {
//   return array.join("").length;
// }

// console.log(getLength(["Mango", "hurries", "to", "the", "train"]));
// console.log(getLength(["M", "a", "n", "g", "o"]));
// console.log(getLength(["top", "picks", "for", "you"]));

/* Метод массива split этот метод делает обратный результат методу join(), так как разбивает строки на элементы массива */

// const message = "JavaScript essentials";
// const words = message.split(" ");
// console.log(words); // ["JavaScript", "essentials"]

// const name = "Mango";
// const letters = name.split("");
// console.log(letters); // ["M", "a", "n", "g", "o"]

// Task 1

// function calculateEngravingPrice(message, pricePerWord) {
//   const array = message.split(" ");
//   const length = array.length;

//   return length * pricePerWord;
// }

/* Более оптимизирвоанный вариант */

// function calculateEngravingPrice(message, pricePerWord) {
//   return message.split(" ").length * pricePerWord;
// }

// calculateEngravingPrice("JavaScript is in my blood", 10);

// console.log(calculateEngravingPrice("JavaScript is in my blood", 10));
// console.log(calculateEngravingPrice("JavaScript is in my blood", 20));
// console.log(calculateEngravingPrice("Web-development is creative work", 40));
// console.log(calculateEngravingPrice("Web-development is creative work", 20));

/* Метод массива push() используется тогда, когда нам нужно добавить в массив новый элемент */

// function createArrayOfNumbers(min, max) {
//   const numbers = [];
//   for (let i = min; max >= i; i += 1) {
//     numbers.push(i);
//   }

//   return numbers;
// }

// console.log(createArrayOfNumbers(1, 3));
// console.log(createArrayOfNumbers(14, 17));
// console.log(createArrayOfNumbers(29, 34));
// console.log(createArrayOfNumbers());

// Задачки на массивы и функции

// Task 1

// function calculateTotalPrice(order) {
//   let totalQuantity = 0;
//   for (let i = 0; order.length > i; i += 1) {
//     totalQuantity += order[i];
//   }

//   return totalQuantity;
// }

// console.log(calculateTotalPrice([12, 85, 37, 4]));
// console.log(calculateTotalPrice([164, 48, 291]));
// console.log(calculateTotalPrice([412, 371, 94, 63, 176]));

// Task 2

// function getEvenNumbers(start, end) {
//   const emptyArray = [];
//   for (let i = start; end >= i; i += 1) {
//     if (i % 2 === 0) {
//       emptyArray.push(i);
//     } else {
//       emptyArray;
//     }
//   }

//   return emptyArray;
// }

// console.log(getEvenNumbers(2, 5));
// console.log(getEvenNumbers(3, 11));
// console.log(getEvenNumbers(6, 12));
// console.log(getEvenNumbers(8, 8));
// console.log(getEvenNumbers(7, 7));

// Task 3

// function checkStorage(storage, item) {
//   const normalized = item.toLowerCase();

//   if (storage.includes(normalized)) {
//     return `${normalized} is available to order!`;
//   } else {
//     return "Sorry! We are out of stock!";
//   }
// }

// console.log(checkStorage(["apple", "plum", "pear"], "plum"));
// console.log(checkStorage(["apple", "plum", "pear"], "pLuM"));
// console.log(checkStorage(["apple", "plum", "pear"], "pear"));
// console.log(checkStorage(["apple", "plum", "pear"], "pEAr"));
// console.log(checkStorage(["apple", "plum", "pear"], "orange"));
// console.log(checkStorage(["apple", "plum", "pear"], "carrot"));

// task 3

// function getCommonElements(array1, array2) {
//   const emptyArray = [];

//   for (let i = 0; array1.length > i; i += 1) {
//     console.log(array1[i]);

//     if (array2.includes(array1[i])) {
//       emptyArray.push(array1[i]);
//     }
//   }

//   return emptyArray;
// }

// console.log(getCommonElements([1, 2, 3], [2, 4]));
// console.log(getCommonElements([1, 2, 3], [2, 1, 17, 19]));
// console.log(getCommonElements([24, 12, 27, 3], [12, 8, 3, 36, 27]));
// console.log(getCommonElements([10, 20, 30, 40], [4, 30, 17, 10, 40]));
// console.log(getCommonElements([1, 2, 3], [10, 20, 30]));

/* Task 4 */

// function calculateTotalPrice(order) {
//   let totalAmount = 0;
//   for (const ord of order) {
//     totalAmount += ord;
//   }

//   return totalAmount;
// }

// console.log(calculateTotalPrice([12, 85, 37, 4]));
// console.log(calculateTotalPrice([164, 48, 291]));
// console.log(calculateTotalPrice([412, 371, 94, 63, 176]));
// console.log(calculateTotalPrice([]));

// Task 5
// Первое решение 
// function createReversedArray() {
//   const emptyArray = []
//   console.log(arguments)

//   for(const arg of arguments) {

//     emptyArray.push(arg)
//   }

//   return emptyArray
// }

// console.log(createReversedArray(12, 85, 37, 4));
// console.log(createReversedArray(164, 48, 291));
// console.log(createReversedArray(412, 371, 94, 63, 176));
// console.log(createReversedArray());

//Второе решение

function createReversedArray() {
  // console.log(arguments)

  const arg = Array.from(arguments)

  return arg

}

console.log(createReversedArray(12, 85, 37, 4));
console.log(createReversedArray(164, 48, 291));
console.log(createReversedArray(412, 371, 94, 63, 176));
console.log(createReversedArray());