var userInput;
do {
    userInput = prompt('Enter an odd number between 1 and 50');
    userInput = parseFloat(userInput);
    if (parseFloat(userInput) === userInput && userInput % 2 === 1 && userInput >= 1 && userInput <= 50){
        break;
    }
} while (true);

console.log(userInput);


for (var i = 1; i <= 50; i++) {
    if(i % 2 === 1){
        console.log('Here is an odd number: ' + i);
    }
}