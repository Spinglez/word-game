
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


// defining words available
  let word1 = "we rise";
  let word2 = "show me";
  let word3 = "voices in my head";
  let word4 = "light";
  let word5 = "byu";
  let word6 = "A light tes"
  let word7 = "randomch"


// array of available choices
  var words = [word1, word2, word3, word4, word5, word6, word7];
// end arrray

// pulling a random word from the array above
  var word = words[Math.floor(Math.random() * words.length)];

  var targetDiv1 = document.getElementById('gameDiv');
  var targetDiv2 = document.getElementById('scoreBox')
// making the chosen word from the random choice above display as _ (underscores)
  var answerArray = [];
  for (var i = 0; i < word.length; i++){
    answerArray[i] = " _";
    // targetDiv.appendChild(answerArray[i]);
    // console.log(answerArray[i]);
  }
  gameDiv.innerHTML = answerArray;

  for (var j = 0; i < word.length; i++){
    targetdiv2.a
  }

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

// begin objects for array (now thinking objects is too much)
  //
  // var word1 {
  //   word: "we rise",
  //   length: 7,
  // }
  //
  // var word2 {
  //   word: "show me",
  //   length: 7,
  // }
  //
  // var word3 {
  //   word: "voices in my head",
  //   length: 17,
  // }
