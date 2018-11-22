// Make a function named isOdd(number)
function isOdd(input) {
  var remainder = input % 2;
  if (remainder === 1) {
    return true;
  } else {
    return false;
  }
}
// Make a function named isEven(number)
function isEven(input) {
    var remainder = input % 2;
    if (remainder === 0) {
        return true;
    } else {
        return false;
    }
}
// Make a function named identity(input) that returns the input exactly as provided.
function identity(input) {
    return input;
}
// Make a function named isFive(input)
function isFive(input) {
  var output = input === 5;
  if (output) {
    console.log(input + ' is in fact five.');
  } else {
    console.log(input + ' is not five...');
  }
}
// Make a function named addFive(input) that adds five to some input.
function addFive(input) {
    return input + 5;
}
// Make a function named isMultipleOfFive(input)
function isMultipleofFive(input) {
    if (input % 5 === 0) {
        alert(input + ' is a multiple of 5.')
    } else {
        alert(input + ' is not a multiple of 5.')
    }
}
// Make a function named isThree(input)
function isThree(input) {
    input = 3;
}
// Make a function named isMultipleOfThree(input)
function isMultipleOfThree(input) {
    if (input % 3 === 0) {
        alert(input + ' is multiple of 3.')
    } else {
        alert(input + ' is not a multiple of 3.')
    }

}
// Make a function named isMultipleOfThreeAndFive(input)
function isMultipleOfThreeAndFive(input) {
  if ((input % 3 === 0)&&(input % 5 === 0)) {
    console.log(input + ' is a multiple of three and five.');
  } else {
    console.log(input + ' is not a multiple of three and five.');
  }
}
// Make a function named isMultipleOf(target, n) which checks if target is evenly divisible by n
function isMultipleOf(target, n) {
  if (target % n === 0) {
    console.log(target + ' is a multiple of ' + n);
  }
}
// Make a function named isTrue(boolean)
function isTrue(boolean) {
  if (boolean === true) {
    console.log(boolean + ' is true.');
  } else {
    console.log(boolean + ' is false.');
  }
}
// Make a function named isFalse(boolean)
function isFalse(boolean) {
  if (boolean === false) {
    console.log(boolean + ' is false.');
  } else {
    console.log(boolean + ' is true.');
  }
}
// Make a function named isTruthy(input), remember that values other than true will behave like true
function isTruthy(input) {

}
// Make a function named isFalsy(input), remember that values other than false behave like false
function isFalsy(input) {

}
// Make a function named isVowel(letter)
function isVowel(x) {
    var result;
    result = x == "A" || x == "E" || x == "I" || x == "O" || x == "U";
    return result;
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
  if (string)
}
// Make a function named isSpace(letter) that returns if a character is a space character
function isSpace(letter) {

}
// Make a function named isZero(number)
function isZero(number) {
  if (number === 0) {
    return (number + ' is zero')
  } else {
    return (number + ' is not zero')
  }
}
// Make a function named notZero(input) that returns true if the input is not zero
function notZero(input) {
  if (number !=== 0) {
    return (number + ' is not zero')
  } else {
    return (number + ' is zero')
  }
}
// Write a function named lowerCase(string)
function lowerCase(string) {
  string.toLowercase;
}
// Write a function named double(n) that returns a number times two
function double(n) {
  console.log(n, n);
}
// Write a function named triple(n) that returns a number times 3
function triple(n) {
  console.log(n, n, n);
}
// Write a function named quadruple(n) that returns a number times 4
function quadruple(n) {
  console.log(n, n, n, n);
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

}
// Make a function named areIdentical(input1, input2) that returns if both inputs are same value and data type.Make a function named not(input) returns the input with a flipped boolean
function areIdentical(input1, input2) {
  if (input1 === input2) {
    return ('Both inputs are identical');
  } else {
    return ('Both inputs are not identical');
  }
}
// Make a function named notNot(input) that the negation of the negation of the input.Make a function named and(predicate1, predicate2) that returns the logical operation of AND
function notNot(input) {

}
// Make a function named or(predicate1, predicate2) that returns the logical operation of OR
function or(predicate1, predicate2) {

}
// Write a function called reverseString(string) that reverses a string
function reverseString(string){
    return string.reverse();
}
// Make a function named absoluteValue(number) that returns the absolute value of a number.Make a function named rollDice(sides) that takes in an argument containing the number of sides the die should have. Generate a random number between 1 up to and including the number of sides.
function absoluteValue(number) {

}
