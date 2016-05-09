var dictionary = ["doc","skate", "delorean", "dance", "biff",
                  "marty", "sea", "calvin", "time", "flux"];

var word = dictionary[Math.floor(Math.random() * dictionary.length)];


var wordLength = word.length;
document.getElementById('wordLength').innerHTML = `Length of word is: ${wordLength}`;

var guesses = 10;

var start = document.getElementById('blankWord')
.innerHTML = "_"
.repeat(word.length);

var arrWord = word.split("");

var output = start.split("");

var lettersGuessed = [];

document.onkeyup = function(event) {

  //get user input
  var userInput = String.fromCharCode(event.keyCode).toLowerCase();
  //check the letter has been used yet.
  if(lettersGuessed.includes(userInput) == false){
    //reduce the number of guesses
    guesses --
    //display guesses thus far
    lettersGuessed.push(userInput);
    document.getElementById('letters').innerHTML = `Letters guessed: ${lettersGuessed}`;
    //check if letter is in the word
    for(var i = 0; i < word.length; i++){
      if(word[i] === userInput){
        output.splice(i,1,userInput)
        //making sure not mutate output back to a string
        var updated = output.join("");
        document.getElementById('blankWord').innerHTML = updated;
        }
      }

      if(userInput == 7){
        console.log(word);
      }

    //check if user has won the game
    if(output.includes("_") == false){
      document.getElementById('win').innerHTML = "<h1>You Won!</h1>"
      document.getElementById("photo").style.opacity = "1.0";
    }

    if(guesses === 9){
      document.getElementById("photo").style.opacity = "0.9";
    }else if (guesses === 8) {
      document.getElementById("photo").style.opacity = "0.8";
    }else if (guesses === 7) {
      document.getElementById("photo").style.opacity = "0.7";
    }else if (guesses === 6) {
      document.getElementById("photo").style.opacity = "0.6";
    }else if (guesses === 5) {
      document.getElementById("photo").style.opacity = "0.5";
    }else if (guesses === 4) {
      document.getElementById("photo").style.opacity = "0.4";
    }else if (guesses === 3) {
      document.getElementById("photo").style.opacity = "0.3";
    }else if (guesses === 2) {
      document.getElementById("photo").style.opacity = "0.2";
    }else if (guesses === 1) {
      document.getElementById("photo").style.opacity = "0.1";
    }else if (guesses === 0) {
      document.getElementById("photo").style.opacity = "0.0";
      document.getElementById("win").innerHTML = "<h1>Sorry, you lost.</h2>"
    }
  }
};
