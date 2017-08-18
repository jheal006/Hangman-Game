

////////////////////////////
    //Variables
/////////////////////////

var wins = 0;
var html = '';
var guessesLeft = 10;
var guessedLetters = [];
var bodyText = document.querySelector(".game");
var counter = 0;

////////////////////////////
    //Arrays and Objects
/////////////////////////
var alphabet = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];

//Array of Arrays for Movies/HangMan Words, Most efficient way to swap out specfic underscore locations?
var movies = [
  ['Aliens'] , ['_' , '_' , '_', '_' , '_' , '_'],
  ['Predator'] , ['_', '_', '_', '_', '_', '_', '_', '_'],
];
var current = 0;
var currentMovie = movies[current];


////////////////////////////
    //Game Run
/////////////////////////
  html = "<h1>Press Any Button to Start the ~HangMan Game~</h1>";
  bodyText.innerHTML = html;

  // Create Array? for  _ _ _  HangMan Characters, that will update. Array of arrays seems like best choice as we can target specific elements to swap out.
  //Unable to figure out how to best display those characters.
  var hiddenWord = movies[1];

  document.onkeyup = function(event) {

    //Display Game text

    html =
   "<h1>HangMan Game</h1> <br>" +
   "<p>Wins: " + wins + "</p>" +
   "<h2>Current Word: </h2>" + hiddenWord +
   "<p>Guesses Left: " + guessesLeft + "</p>" +
   "<p>Letters Already Guessed: " + guessedLetters.join(', ') + "</p>";



  //Have User Guess Letters

  //Contiue Game if Guesses are at least equal to 1)
  if (guessesLeft != 1) {

    //Collect User Input
     var userInput = String.fromCharCode(event.keyCode).toLowerCase();
     guessedLetters.push(userInput);


    //Cycle through Correct String for Movie Comparrison
     for (i=0; i < 0; i ++){

     if (userInput === str.search()) {
       wins =+ 1;
       hiddenWord[0] = 'a';
     }

   };
     //Reveal Correct Letters, and leave Guess Counter Alone

     //Log Incorrect Letters, Drop Guess Counter

     //Game

    //  if (userInput === computerGuess) {
    //   // Win Condition: Add 1 to the win column, Reset Guesses Array
    //    wins += 1;
    //    guessesLeft = 10;
    //    guesses.push(userInput);
    //    guesses = [];
    //  } else if (userInput !== computerGuess) {
    //    //Countdown Guesses
    //    guessesLeft -= 1;
    //    guesses.push(userInput);
    //  }

  //  } else if (guessesLeft === 1) {
  //    // Loss Condition: Add 1 to the loss column, HangMan is Dead!
  //      losses += 1;
  //      guessesLeft = 10;
  //      guesses = [];
  //   };
  //Create a text to print to the document.


  bodyText.innerHTML = html;

  };
};
