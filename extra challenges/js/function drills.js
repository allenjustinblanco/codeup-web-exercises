// Make a function named isOdd(number)
function isOdd(input) {
    return parseFloat(input) % 2 === 1;
}
// Make a function named isEven(number)
function isEven(input) {
    return parseFloat(input) % 2 === 0;
}
// Make a function named identity(input) that returns the input exactly as provided.
function identity(input) {
    return input;
}
// Make a function named isFive(input)
function isFive(input) {
    return input === 5;
}
// Make a function named addFive(input) that adds five to some input.
function addFive(input) {
    return input + 5;
}
// Make a function named isMultipleOfFive(input)
function isMultipleofFive(input) {
    return parseFloat(input) % 5 === 0;
}
// Make a function named isThree(input)
function isThree(input) {
    return input === 3;
}
// Make a function named isMultipleOfThree(input)
function isMultipleOfThree(input) {
    return parseFloat(input) % 3 === 0;
}
// Make a function named isMultipleOfThreeAndFive(input)
function isMultipleOfThreeAndFive(input) {
    return (input % 3 === 0 && input % 5 === 0);
}
// Make a function named isMultipleOf(target, n) which checks if target is evenly divisible by n
function isMultipleOf(target, n) {
    return target % n === 0;
}
// Make a function named isTrue(boolean)
function isTrue(boolean) {
    return boolean === true;
}
// Make a function named isFalse(boolean)
function isFalse(boolean) {
    return boolean === false;
}
// Make a function named isTruthy(input), remember that values other than true will behave like true
function isTruthy(input) {
    return !(input === (undefined || null || 0 || '' || NaN));
}
// Make a function named isFalsy(input), remember that values other than false behave like false
function isFalsy(input) {
    return (input === (undefined || null || 0 || '' || NaN));
}
// Make a function named isVowel(letter)
function isVowel(x) {
    return String(x).toLowerCase() === (a || e || i || o || u);
}
// Make a function named isConsonant(letter)
function isConsonant(letter) {

}
// Make a function named isCapital(letter)
function isCapital(letter) {

}
// Make a function named isLowerCase(letter)
function isLowerCase(letter) {
  return letter.lowerCase;
}
// Make a function named hasLowerCase(string) that returns if a string has any lower cased letter
function hasLowerCase(string) {
    return (String(string) !== String(string).toUpperCase());
}
// Make a function named isSpace(letter) that returns if a character is a space character
function isSpace(letter) {
    return (String(letter) !== String(letter))
}
// Make a function named isZero(number)
function isZero(number) {
  return parseFloat(number) === 0;
}
// Make a function named notZero(input) that returns true if the input is not zero
function notZero(input) {
  return parseFloat(input) !== 0;
}
// Write a function named lowerCase(string)
function lowerCase(string) {
  return (string.toLowercase);
}
// Write a function named double(n) that returns a number times two
function double(n) {
  return n * 2;
}
// Write a function named triple(n) that returns a number times 3
function triple(n) {
  return n * 3;
}
// Write a function named quadruple(n) that returns a number times 4
function quadruple(n) {
  return n *4;
}
// Write a function named half(n) that returns 1/2 of the provided input
function half(n) {
  return n / 2;
}
// Write a function named subtract(a, b) that returns a minus b
function substract(a,b) {
    return a - b;
}
// Write a function named multiply(a, b) that returns the product of a times b
function multiply(a, b) {
    return a * b;
}
// Write a function named divide(a, b) that returns a divided by b
function divide(a, b) {
  return a / b;
}
// Write a function named remainder(a, b) that returns the remainder after dividing a by b
function remainder(a, b) {
  return a % b;
}
// Make a function named modulo(a, b) that returns the returns the remainder after dividing a by b
function modulo(a, b) {
  return a % b;
}
// Write a function named cube(n) that returns n * n * n
function cube(n) {
  return n * n * n;
}
// Write a function named squareRoot(n) that returns the square root of the input
function squareRoot(n) {
  return Math.sqrt(n);
}
// Write a function named cubeRoot(n) that returns the cube root of the input
function cubeRoot(n) {
  return Math.cbrt(n);
}
// Write a function named invertSign(number) that returns a negative version of a postive number, a positve version of negative, and false for all else.
function invertSign(number) {
  return x *= -1;
}
// Write a function named degreesToRadians(number)
function degreesToRadians(number) {
  return angle * (180 / Math.PI);
}
// Write a function named radiansToDegrees(number)
function radiansToDegrees(number) {

}
// Make a function named isBlank(input) that determines if a given input is spaces, newline characters, or tabs.Make a function named trim(string) that removes empty spaces before and after the input.Make a function named areEqual(input1, input2) that returns if both inputs have the same value
function isBlank(input) {
    return (input === (''.trim()));
}
// Make a function named areIdentical(input1, input2) that returns if both inputs are same value and data type.Make a function named not(input) returns the input with a flipped boolean
function areIdentical(input1, input2) {
    return input1 === input2;
}
// Make a function named notNot(input) that the negation of the negation of the input.Make a function named and(predicate1, predicate2) that returns the logical operation of AND
function notNot(input) {
    return input === true;
}
// Make a function named or(predicate1, predicate2) that returns the logical operation of OR
function or(predicate1, predicate2) {
    return predicate1 || predicate2;
}
// Write a function called reverseString(string) that reverses a string
function reverseString(string){
    return string.reverse();
}
// Make a function named absoluteValue(number) that returns the absolute value of a number.Make a function named rollDice(sides) that takes in an argument containing the number of sides the die should have. Generate a random number between 1 up to and including the number of sides.
function absoluteValue(number) {

}
