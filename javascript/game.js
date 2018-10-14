
// Begin objectives
// obective: to build a hangman type game
// First use a random object to preload first challenge
// then have user press button to start a round, once started game will continue until window is closed
// load first word in "wordGame" column
// display word with dashed lines (use 'object.word'.length)
//
// second recognize variables (user input) use onkeyup
//  when pressed log letter that was pressed
//  if letter pressed was corrent display on "word line"
//  if letter was incorrect put underneath word line as "guessed"
//  display progress (number of guesses remaining and correct amount guessed)
//

// array of available choices
words = ["we rise", "show me", "voices in my head", "light", "bwu", "lift me from the ground", "i still see your face"]
  // end arrray
  var guess = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"," "];
  var word = "";
  var wins = 0;
  var answerArray = [];
  var wrongGuess = "";
  var guessLeft = "";
  var letters = "";

function wordFinder(){
    word = words[Math.floor(Math.random() * words.length)];
    console.log(word);
    return word;
  }

  // drawing the _ for each word
function arrayDisplay(){
    for (var i = 0; i < word.length; i++){
      answerArray[i] = " _";
      gameDiv.innerHTML = answerArray.join();
    }
  }

function letterNum(){
  for (var i = 0; i < word.length; i++) {
    word[i] = letters;
    return letters;
  }
}

function reset(){
  word = ""
  answerArray = [];
  wrongGuess = "";
  guessLeft = "";
  letters = "";
  completedWord.innerHTML = "";
  start();
}

function setup(){
  letters = word.length;
  winNum.innerHTML = wins;
  score.innerHTML = letters;
  gletters.innerHTML = "";
  gameDiv.innerHTML = answerArray.join('');
}

  // pulling a random word from the array above

  // Giving a count ofthe word length to the user

function start(){
  wordFinder();
  arrayDisplay();
  setup();
}

function win(){
   completedWord.innerHTML += word;
   winNum.innerHTML = wins;
   alert("Congratulations you win!");
   reset();
}

function lose(){
    alert("you lose!");
    reset();
}

function naw(){
  guess.splice(playerGuess.indexOf(guess), 1);
  gletters.innerHTML += " " + playerGuess;
  wrong.innerHTML = wrongGuess;
}

function checker(playerKey){
  wrongGuess++;
  wrong.innerHTML = wrongGuess;
  gletters.innerHTML += playerKey;
  if (wrongGuess == 10) {
    lose();
  }
  else{
    return playerKey;
  }
}

// this should watch for key up from user and update each field depending on conditions
  document.onkeyup = function (event){
      var playerGuess = event.key;
      for (j = 0; j < word.length; j++){
        if (word[j] !== playerGuess && wrongGuess > 1){
          checker(playerGuess);
          return;
        }
        else if (playerGuess == answerArray[j]) {
          alert("you've guessed that already");
          return;
        }
        if (word[j] == playerGuess){
          answerArray[j] = playerGuess;
          letters --;
          score.innerHTML = letters;
          gameDiv.innerHTML = answerArray.join('');
        }
        else if (letters == 0){
          wins++;
          win();
        }
      }
    }


start();




    // else {
    //   guessLeft - 1;
    // if (typeof playerGuess == number) {
    //   alert("Guess a letter or a space!")
    // }
  // }

// making the chosen word from the random choice above display as _ (underscores)

// include the onclick into the this array for entering in the words


// Original semi working on onkeyup
// document.onkeyup = function(playerGuess){
//   for (var j = 0; j < word.length; j++){
//     if (word[j] === playerGuess){
//       answerArray[j] = playerGuess;
//       answerArray.join();
//       letters--;
//       }
//     }
//   }
// }


     // playerGuess.word[i].join();
  //
  // for (i = 0; i < answerArray.length; i++){
  //   var newDiv = document.createElement("div");
  //   newDiv.innerHTML
  //    = answerArray[i];
  // }

  // targetDiv.documentWrite(answerArray[i]);
  //
  // var lettersLeft = word.length;

  // var playerGuess =

// printing the chosen word into the targeted
  // var displayDiv getElementById('gameDiv');
  //
  //   displayDiv.textContent = answerArray.join(" ");
