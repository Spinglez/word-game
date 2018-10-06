
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

document.getElementById("start").onclick = gametime;

function gametime(){

  // defining words available
    let word1 = "we rise";
    let word2 = "show me";
    let word3 = "voices in my head";
    let word4 = "light";
    let word5 = "byu";
    let word6 = "a light tes"
    let word7 = "randomch"

  // array of available choices
    var words = [word1, word2, word3, word4, word5, word6, word7];
  // end arrray

    let guessLeft = 8;

    function increment(){
          guessLeft --;
          return guessLeft;
        }

    let guess = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"," "];

  // pulling a random word from the array above
    var word = words[Math.floor(Math.random() * words.length)];

  // Targets for gameBox
    var targetDiv1 = document.getElementById("gameDiv");
    var targetDiv2 = document.getElementById("scoreBox");

  // Giving a count ofthe word length to the user
    var letters = word.length;

  // drawing the _ for each words
    var answerArray = [];
    for (var i = 0; i < word.length; i++){
      answerArray[i] = " _";
    }
    gameDiv.innerHTML = answerArray;
    guesses.innerHTML = guessLeft;
    score.innerHTML = letters;

    // guesses.innerHTML = guessLeft;

    document.onkeyup = function(event){
      let playerGuess = event.key;
      for (j = 0; j < word.length; j++){
        if (word[j] === playerGuess){
          answerArray[j] = playerGuess;
          letters --;
          score.innerHTML = letters;
          guesses.innerHTML = guessLeft;
          gameDiv.innerHTML = answerArray;
          }
        else if (word[j] !== playerGuess){
            increment();
            guesses.innerHTML = guessLeft;
          }
          console.log("guess check", guessLeft);
          if (letters == 0) { //this will watch the letter count then give a prompt to restart the game you can choose not to play as well
              gameDiv.innerHTML = word;
              var r  = setTimeout(function() { confirm("Congratulations you win! Play again?");
              if (r == true){
                gametime();
                }
                else {
                  return;
                } }, 550);}
          }

      }

                console.log(answerArray);
                console.log(word);
}







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
