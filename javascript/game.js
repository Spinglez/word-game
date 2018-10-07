
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
words = ["we rise", "show me", "voices in me head", "light", "bwu", "lift me from the ground", "i still see your face"]
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

function arrayDisplay(){
    for (var i = 0; i < word.length; i++){
      answerArray[i] = " _";
      gameDiv.innerHTML = answerArray.join();
    }
  }

function increment(){
        wins ++;
        return wins;
    }
function decrement(){
     wrongGuess --;
     return wrongGuess;
  }

function wordLength(){
    guessLeft = (word.length + 5);
    }

function letterNum(){
    for (var i = 0; i < word.length; i++) {
      word[i] = letters;
      return letters;
    }
  }
  // pulling a random word from the array above

  // Giving a count ofthe word length to the user

function start(){
  wordFinder();
  arrayDisplay();
  letters = word.length;
  wordLength();
  winNum.innerHTML = wins;
  score.innerHTML = letters;
  gameDiv.innerHTML = answerArray.join('');
  clear(),1;
  return;
}

function win(){
   clear(),1;
   completedWord.innerHTML = word;
   increment(), 1;
   winNum.innerHTML = wins;
   alert("Congratulations you win!");
   start(),1;
}

function lose(){
    winNum.innerHTML = wins;
    clear();
    alert("you lose!");
    start(),1;
}

  // drawing the _ for each words

  function clear() {
    document.getElementById("scoreBox").innerHTML = "";
  }
// function gametime(){

// this should watch for key up from user and update each field depending on conditions
    document.onkeyup = function(event){
      var playerGuess = event.key;
      let wrongGuess = "5";
      if (playerGuess == gletters.html){
        return;
      }
      for (var k = 0; k < guess.length; k++) {
        if (guess[k] == playerGuess){
          wrongGuess --;
          guess.splice(playerGuess.indexOf(guess), 1);
          gletters.innerHTML += " " + playerGuess;
          wrong.innerHTML = wrongGuess;
        }
      }
      for (j = 0; j < word.length; j++){
        if (word[j] === playerGuess){
          answerArray[j] = playerGuess;
          letters --;
          score.innerHTML = letters;
          gameDiv.innerHTML = answerArray.join('');
          }
          else if (letters === 0) {
            clear();
            win(),1;
            return;
        }

        }
      }


document.getElementById("reStart").onclick = start(),1;





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
