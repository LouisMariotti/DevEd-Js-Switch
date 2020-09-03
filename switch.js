// Look like a if but work differently

/* const text = "avocad";
let fruitNr = 0; */

/* if (text === "banana") {
} else if (text === "Louis"); */

// We can do like the above but its hard to read, in this case we can do a switch

/* switch (text) {
  case "banana":
    console.log("Wow I love banana");
    fruitNr = 1;
    break;
  case "apple":
    console.log("Wow I love apple");
    fruitNr = 2;
    break;
  case "avocado":
    console.log("This is not a fruit");
    fruitNr = 100;
    break;
  default:
    console.log("This is an unknow fruit");
    break;
} */

// We can add as much case as we want, we add break

/* Using if or Switch depends on what you're using it for*/

let userInput = prompt("Tell me a fruit");
let convertedValue = userInput.toLowerCase(); // We make this in order to don't have issues with lowercase or uppercase

switch (convertedValue) {
  case "kiwi":
    console.log("Yes I love Kiwi's");
    break;
  case "banana":
    console.log("Banana is one of my fav");
    break;
  default:
    console.log("I don't like this one");
    break;
}
