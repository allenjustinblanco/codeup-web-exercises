(function(){
    "use strict";

    /**
     * TODO:
     * Create an array of 4 people's names and store it in a variable called
     * 'names'.
     */
    var names = [
        'john',
        'juan',
        'justin',
        'julio'
    ];
    /**
     * TODO:
     * Create a log statement that will log the number of elements in the names
     * array.
     */

    console.log(names);

    /**
     * TODO:
     * Create log statements that will print each of the names individually by
     * accessing each element's index.
     */

    console.log(names[0]);
    console.log(names[1]);
    console.log(names[2]);
    console.log(names[3]);

    /**
     * TODO:
     * Write some code that uses a for loop to log every item in the names
     * array.
     */

    for (var i = 0; i <= names.length; i++) {
        console.log(names[i]);
    }

    /**
     * TODO:
     * Refactor your above code to use a `forEach` loop
     */

    names.forEach(function(element){
        console.log(element);
    });

    /**
     * TODO:
     * Create the following three functions, each will accept an array and
     * return an an element from it
     * - first: returns the first item in the array
     * - second: returns the second item in the array
     * - last: returns the last item in the array
     *
     * Example:
     *  > first([1, 2, 3, 4, 5]) // returns 1
     *  > second([1, 2, 3, 4, 5]) // returns 2
     *  > last([1, 2, 3, 4, 5]) // return 5
     */

    function firstIndex(input){
        return input[0];
    }
    function secondIndex(input){
        return input[1];
    }
    function lastIndex(input){
        return input[input.length - 1];
    }
})();


// More practice w/ loops and arrays
//
// Exercise 1:
// Write a function named oneHundred() that returns an array with integers starting at 1 and ending at 100;
var newArray = [];
function oneHundred(){
    for (var i = 1; i <= 100; i++){
        newArray.push(i);
    }
    return newArray;
}
oneHundred();
// Exercise 2:
// Write a function named reverse() that takes in an array and returns a reversed copy of the provided array. This function should not alter the orignal array sent into it.
function reverse(array){
    console.log(array.reverse());
    array.reverse();
}
//     Exercise 3:
// Write a function named sumAll() that takes in an array of numbers and returns the sum of all the numbers. Use sumAll() on oneHundred() to get the sum of all numbers 1 + 2 + 3... + 100
// function sumAll(array) {
//     if(array === Array.isArray(array)){
//         array.reduce();
//     } else {
//         return false;
//     }
// }
function sumAll(numbers){
    var sum = 0;
    numbers.forEach(function(number) {
        sum += number;
    });
    return sum;
}
// Exercise 4:
// Write a function named multiplyAll() that takes in an array of numbers and returns the product of all numbers. Use multiplyAll on oneOnehundred() to get the product of 1*2*3*...100
// function multiplyAll(array) {
//     if(array === Array.isArray(array)){
//         var sum = 1;
//         for (var i = 0; i < array.length; i++) {
//             sum = sum + array[i];
//         }
//         return sum;
//     } else {
//         return false;
//     }
// }
function multiplyAll(numbers){
    var product = 1;
    numbers.forEach(function(number){
        product *= number;
    });
    return product;
}