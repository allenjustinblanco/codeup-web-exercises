// ================================= OBJECTS BONUSES
// BONUS 1 (create a dog object):
//     The dog object should have properties for:
//         breed (string),
//         weightInPounds (number),
//         age (number),
//         color (string),
//         sterilized (boolean),
//         shotRecords (array of objects with properties for date and typeOfShot)
//     The dog object should have methods to:
//         bark() - will console.log "Woof!"
//         getOlder() - will increase age by 1
//         fix() - will set sterile to true if dog sterilized property is false
//         vaccinate() - takes in an argument for the name of the shot and adds a new shot with the current date to the shotRecords array

 var dog = {
   'breed': 'yorkie',
   'weightInPounds': 45,
   'age': 7,
   'color': 'brown',
   'sterilized': true,
   'shotRecords': {
       date: 6 / 27 / 2012,
       typeOfShot: 'rabies'
   },
   'bark': function () {
    return 'bark';
   },
   'getOlder': function () {
       this.age++;
   },
   'fix': function () {
       this.sterilized = true;
   },
   'vaccinate': function(nameOfShot) {
       this.shotRecords.typeOfShot.push({nameOfShot: nameOfShot, date: new Date()});
   }
 };


// BONUS 2 (expanding on the books object exercise):
//     Add a property "keywords" that contains an array of possible genres the book may be categorized by
//     Add a boolean property "available" and set it to true
//     Add a dateAvailable property that has a string of the date/time when the book will be available
//     Add a method lend() that...
//         - changes the available property to false if it is not already false
//         - sets the dateAvailable to a date exactly two weeks from when the lend() method is called
//         (to do this, research the JS Date object and use methods from it in your code)
//     Add a method receive() that...
//         - changes the available property to true
//         - changes the dateAvailable property to the string "now"

books.push({
    'keywords': ['Fiction', 'Non-Fiction'],
    'available': true,
    'dateAvailable': 'November 30, 2018 - December 1, 2018',
    'lend': function() {
        this.available = false;
        this.dateAvailable = ;
    },
    'receive': function () {
        this.available = true;
        this.dateAvailable = 'now';
    }
});


// BONUS 3 (expanding on the books object exercise):
//     Create an application to take in user input to build the books array of objects.
//     Allow the user to continue adding books or to finish adding books.
//     Once the books have been added, output the books array in the console.
//     Allow a user to delete a book or a group of books by title or author last name
//     Allow a user to edit a book by index number in the books array
//



// -- more --
// Define an object called jackBox.
// Include properties for...
//    triggered - whether or not the box has been sprung (should be false by default)
//   intervalId - set to null
//       play() - once called, if triggered is false, console.log one new element in the lyrics array every second
//                after the lyrics, stop the interval, set the triggered property to true, and alert POP!
//     windUp() - once called will stop the play() method and set triggered to false
//       lyrics - an array with the following elements:
//     "All a-...",
//     "-round the ...",
//     "mulberry...",
//     "bush, The...",
//     "monkey...",
//     "chased the...",
//     "wea-...",
//     "-sel...",
//     "The monkey...",
//     "stopped to...",
//     "pull up his...",
//     "sock,...",
//     "Pop!...",
//     "goes the...",
//     "wea-...",
//     "-sel."
// When running, current lyrics should also be displayed on the page.
var things = ['Rock', 'Paper', 'Scissor'];
var thing = things[Math.floor(Math.random()*things.length)];
var interval = 1000;
var jackBox = {
  triggered: false,
  intervalidId: null,
  'play': setInterval(function(input){
      if(input === false) {
          for(var i = 1; i < this.lyrics.length; i++){
              console.log(this.lyrics[i] + thing)
          }
      }
  }, interval),
  'windUp': function() {
      this.play = true
  },
  lyrics: [
      "All a-...",
      "-round the ...",
      "mulberry...",
      "bush, The...",
      "monkey...",
      "chased the...",
      "wea-...",
      "-sel...",
      "The monkey...",
      "stopped to...",
      "pull up his...",
      "sock,...",
      "Pop!...",
      "goes the...",
      "wea-...",
      "-sel."
  ]
};

// BONUS 2: Build a Stop Watch
// Define an object called stopWatch.
// Include the following properties...
//   intervalId
//   count
// Include the following methods...
//   start() - starts console logging an increasing count every second
//   pause() - pauses counter
//   reset() - stops counter and resets count to zero
//
// Test in console first then transfer to browser
var max = 1000;
var intervalId = setInterval(function () {
    if (stopWatch.count >= max) {
        clearInterval(intervalId);
        console.log('All done');
    } else {
        stopWatch.count++;
        console.log('Repeating this line ' + stopWatch.count);
    }
}, interval);
var stopWatch = {
  intervalId: intervalId,
  count: 0,
  'start': function () {
      console.log(this.count++)
  },
  'pause': function pause(){

  },
  'reset': function reset(){
      this.count = 0;
  }
};




// -- more --
//
// Coding Challenge Amateur
// 1. Write a function that takes in a sentence and returns the length of the
// longest word.
//   a. Example: "I like going out to parties with friends or watching TV."
//     i.Return: 8
// 2. Write a function that takes three parameters: a, b, c. Return the boolean
// true if a^2 + b^2 = c^2, false if not.
//   a. Example: 3, 4, 5
//     i. Return true
//   b. Example: 4, 5, 6
//     i. Return false
// 3. Write a function that takes a string and returns a "title case" string
//   a. Example: "The QUICK brown fox JuMpS ovER the LAZy dog"
//     i. Return: The Quick Brown Fox Jumps Over The Lazy Dog"
// 4. Write a function that returns and object with keys set to the argument passed
// in and values equal to the types of the corresponding keys. Arguments will be
// type "number", "string", or "boolean".
//   a. Example: "hey", 1, "Jeffrey wants to goto the store", false
//     i. Return:
//       {
//         hey: "string",
//         1: "number",
//         "Jeffrey wants to goto the store": "string",
//         false: boolean
//       }

function longestWord(input){
    if(input === String(input)){
        var splitInput = input.split(' ');
        for(var i = 1; i < splitInput.length; i++){
            var stringLength = [];
            stringLength += splitInput[i].length
        }
        return Math.max(stringLength);
    } else {
        return false;
    }
}

// 5. Write a function that takes two strings as input and returns true or false
// depending on whether they are anagrams(contain exactly the same letters). Only
// lowercase letters will be passed.
//   a. Example: "overcast", "overacts"
//     i. Return: true
//   b. Example: "Jimbo", "Jason"
//     i. Return: false