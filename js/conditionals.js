"use strict";

/**
 * TODO:
 * Write some JavaScript that uses a `confirm` dialog to ask the user if they
 * would like to enter a number. If they click 'Ok', prompt the user for a
 * number, then use 3 separate alerts to tell the user:
 *
 * - whether the number is even or odd
 * - what the number plus 100 is
 * - if the number is negative or positive
 *
 * if what the user enters is not a number, use an alert to tell them that, and
 * do *not* display any of the above information.
 *
 * Can you refactor your code to use functions?
 */
var userInput = confirm('Would you like to enter a number? If so press OK');
if (userInput) {
    var num = prompt('Enter a number');
}
var isOdd = function isOdd(num) {
    return num % 2;
};
if (isOdd(num)){
    alert('number is odd');
} else {
    alert('number is even');
}
if (parseInt(num)){
    alert('Your number plus 100 is ' + (parseInt(num) + 100));
}
if (num > 0) {
    alert('The number ' + num + ' is positive.');
} else {
    alert('The number ' + num + ' is negative.')
}
/* ########################################################################## */

/**
 * TODO:
 * Create a function named `analyzeColor` that accepts a string that is a color
 * name as input. This function should return a message that related to that
 * color. Only worry about the colors defined above, if the color passed is not
 * one of the ones defined above, return a message that says so
 *
 * Example:
 *  > analyzeColor('blue') // returns "blue is the color of the sky"
 *  > analyzeColor('red') // returns "Strawberries are red"
 *  > analyzeColor('cyan') // returns "I don't know anything about cyan"
 *
 * You should use an if-else-if-else block to return different messages.
 *
 * Test your function by passing various string literals to it and
 * console.logging the function's return value
 */
var colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
var randomColor = colors[Math.floor(Math.random() * colors.length)];
function analyzeColor() {
    var colorpreference = prompt("What is your favorite color? choose one of the following: red, orange, yellow, green, blue, indigo, or violet.");
    switch(colorpreference) {
        case "red":
            alert("What a coincidence, my blood is that color!");
            break;
        case "orange":
            alert("orange is the color of the oranges on a summer day.");
            break;
        case "yellow":
            alert("yellow is the color of a sunflower.");
            break;
        case "green":
            alert("green is the color of grass.");
            break;
        case "blue":
            alert("blue is the color of the ocean.");
            break;
        case "indigo":
            alert("indigo, that's so specific lol.");
            break;
        case "violet":
            alert("violet is a really cool color!");
            break;
        default:
            alert(colorpreference + " isn't an option...");
            break;
    }
}
// Don't change the next two lines!
// These lines create two variables for you:
// - `colors`: a list of the colors of the rainbow
// - `randomColor`: contains a single random color value from the list (this
//                  will contain a different color everytime the page loads)

/**
 * TODO:
 * Pass the `randomColor` variable to your function and console.log the results.
 * You should see a different message everytime you refresh the page
 */
console.log(analyzeColor(randomColor));
/**
 * TODO:
 * Refactor your above function to use a switch-case statement
 */

/**
 * TODO:
 * Prompt the user for a color when the page loads, and pass the input from the
 * user to your `analyzeColor` function. Alert the return value from your
 * function to show it to the user.
 */

/* ########################################################################## */

/**
 * TODO:
 * Suppose there's a promotion in Walmart, each customer is given a randomly
 * generated "lucky number" between 0 and 5. If your lucky number is 0 you have
 * no discount, if your lucky number is 1 you'll get a 10% discount, if it's 2,
 * the discount is 25%, if it's 3, 35%, if it's 4, 50%, and if it's 5 you'll get
 * all for free!.
 *
 * Write a function named `calculateTotal` that accepts a lucky number and total
 * amount, and returns the discounted price.
 *
 * Example:
 * calculateTotal(0, 100) // returns 100
 * calculateTotal(4, 100) // returns 50
 * calculateTotal(5, 100) // returns 0
 *
 * Test your function by passing it various values and checking for the expected
 * return value.
 */
var numbers = ['0', '1', '2', '3', '4', '5'];
var luckyNumber = numbers[Math.floor(Math.random() * numbers.length)];
var priceofitem = prompt('Enter the price of the item you are purchasing below.');

    confirm("Press OK to receive a number and enter to win a discounted price on any item in the store!");
switch(luckyNumber) {
    case '0':
        alert('Unfortunately your number is ' + luckyNumber + ' , so no discount is going to be applied.');
        break;
    case '1':
        alert("Your number is " + luckyNumber + ' so you will receive a 10% discount!');
        alert('Your final price comes out to ' + (parseInt(priceofitem) * .90) + '!');
        break;
    case '2':
        alert("Your number is " + luckyNumber + ' so you will receive a 25% discount!');
        alert('Your final price comes out to ' + (parseInt(priceofitem) * .75) + '!');
        break;
    case '3':
        alert("Your number is " + luckyNumber + ' so you will receive a 35% discount!');
        alert('Your final price comes out to ' + (parseInt(priceofitem) * .65) + '!');
        break;
    case '4':
        alert("Your number is " + luckyNumber + ' so you will receive a 50% discount!');
        alert('Your final price comes out to ' + (parseInt(priceofitem) * .50) + '!');
        break;
    case '5':
        alert("Your number is " + luckyNumber + ' so you will receive a 100% discount!');
        alert('Your item is 100% free!!');
        break;
    default:
        alert(luckyNumber + " isn't an option...");
        break;
}

/**
 * TODO:
 * Uncomment the line below to generate a random number between 0 and 6.
 * Prompt the user for their total bill, then use your `calculateTotal` function
 * and alerts to display to the user what their lucky number was, what their
 * price before the discount was, and what their price after the discount is.
 */
// Generate a random number between 0 and 6
// var luckyNumber = Math.floor(Math.random() * 6);

