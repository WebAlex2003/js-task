/* String methods */
// -toUpperCase/toLowerCase
// -includes
// -trim
// -slice
// -splice
// -indexOf
// startWith/endWith

/* toUpperCase/toLowerCase */
// const simpleWord = "impossible";

// console.log(simpleWord.toUpperCase()); // выведет в консоль строку в верхнем регистер

/* includes */

const names = ["WebAlex2003", "Alexe2003", "OlegKoltavski", "lesha30032003"];

const findFunction = function (allLogins, loginToFind) {
  let resoult = allLogins.includes(loginToFind)
    ? `логин ${loginToFind} найден`
    : `логин ${loginToFind} не найден`;

  return resoult;
};

console.log(findFunction(names, "WebAlex2003"));
console.log(findFunction(names, "Alexe2003"));
console.log(findFunction(names, "OlegKoltavskiy"));
console.log(findFunction(names, "lesha300320032"));

/* indexOf */

const message = "We are gonna get the victory in this war";

const letter = message.indexOf("gonna");

console.log(letter)

/* Practise with indexOf in function */

const fnA = function (text) {
  const index = text.indexOf(" ");
  console.log(index);

  if(index > 9) {
    return text.slice(0, index)
  } else {
    return text
  }
};

console.log(fnA("JavaScript and CSS"));
