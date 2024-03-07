/* Switch */
const browser = "Mozilla";

switch (browser) {
  case "Opera":
    console.log("We can provide this browser");
    break;

  case "Chrome":
    console.log("It is the most popular browser");
    break;

  case "Edge":
    console.log("This is browser for windows");
    break;

  case "Mozilla":
    console.log("We dont provide this browser");
    break;

  default: {
    console.log("We dont have other browsers");
  }
}

/* Task 2 */

const amount = 7;
let message;

switch (amount) {
  case 1:
    message = "We need more than 1";
    break;

  case 2:
    message = "We need more than 2";
    break;

  case 3:
  case 4:
  case 5:
    message = "Better, but we need a little bit more";
    break;

  case 6:
    message = "That is exactly what we need";
    break;

  default: {
    message = "Thats too much for us";
  }
}

console.log(message);
