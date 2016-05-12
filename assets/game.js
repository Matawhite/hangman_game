var dictionary = ["doc","skate", "delorean", "dance", "biff",
                  "marty", "sea", "calvin", "time", "flux", "future",
                "back"];

var word = dictionary[Math.floor(Math.random() * dictionary.length)];


var wordLength = word.length;

var guesses = 10;

var start = document.getElementById('blankWord').innerHTML = "_".repeat(word.length) + " ";

var arrWord = word.split("");

var output = start.split("");

var lettersGuessed = [];

var wins = 0;
var losses = 0;

var music = new Audio('assets/music/power_of_love.mp3');
music.play();

var photo = document.getElementById("photo");


//reset function to manage game state.
function reset(){
  word = dictionary[Math.floor(Math.random() * dictionary.length)];
  lettersGuessed = [];
  start = document.getElementById('blankWord').innerHTML = "_".repeat(word.length);
  wordLength = word.length;
  arrWord = word.split("");
  output = start.split("");
  guesses = 10;
}


// start game
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

      //cheat code;
      if(userInput == 7){
        console.log(word);
      }

    //fade photo out after each guess  
    if(guesses === 10){
      photo.style.opacity = "1.0";
    }else if (guesses === 9) {
      photo.style.opacity = "0.9";
    }else if (guesses === 8) {
      photo.style.opacity = "0.8";
    }else if (guesses === 7) {
      photo.style.opacity = "0.7";
    }else if (guesses === 6) {
      photo.style.opacity = "0.6";
    }else if (guesses === 5) {
      photo.style.opacity = "0.5";
    }else if (guesses === 4) {
      photo.style.opacity = "0.4";
    }else if (guesses === 3) {
      photo.style.opacity = "0.3";
    }else if (guesses === 2) {
      photo.style.opacity = "0.2";
    }else if (guesses === 1) {
      photo.style.opacity = "0.1";
    }else if (guesses === 0) {
      photo.style.opacity = "0.0";
      losses ++;
      reset();
    }


    //check if user has won the game
    if(output.includes("_") == false){
      wins ++;
      photo.style.opacity = "1.0";
      reset();
    }

    html = `</p>Instructions go here.</p>
    <p>Word Length: ${wordLength}</p>
    <p>Wins: ${wins}</p>
    <p>Losses: ${losses}</p>`;

    document.getElementById('game').innerHTML = html;
  }
};
