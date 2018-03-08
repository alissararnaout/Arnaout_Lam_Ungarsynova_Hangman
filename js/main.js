<<<<<<< HEAD
(() => {
  console.log('hangman script fired!');

  //create an array to hold the words to be guessed (MDN -? arrays, MDN connst)
  const words = ["blue","orange", "yellow", "magenta", "violet", "potato", "hexagon", "javascript", "mermaid"];

//set up a variable stack
let currentWord=null,
  wordHint = document.querySelector('.current-word'),
  guessBox = document.querySelector('.guess'),
  wrongGuesses = 0,
  correctGuesses= 0,
  resetScreen = document.querySelector('.reset-screen'),
  resetButton = resetScreen.querySelector('button'),
  wrongLetterList = document.querySelector('.wrong-letters'),
  wrongLetterArray = [];

function showResetScreen(message) {
  resetScreen.classList.add('show-piece');

resetScreen.querySelector('h3').textContent = message;
}

  function resetGame() {
    //debugger;
    let gamePieces = Array.from(document.querySelectorAll('.show-piece'));
    gamePieces.forEach(piece => piece.classList.remove('show-piece'));
    wrongGuesses = 0;
    guessBox.value = "";

    init();
  }
  function showResetScreen() {


    //user has lost, reset stuff and start over
    console.log('you lose, loser!');
    resetScreen.classList.add('show-piece');
  }

  function takeGuess(){
    //debugger;
    console.log(this.value);

    //if there's no letter, exit the game loop -> MDN 'or'
    if (this.value == "" || this.value.length < 1 ) {
      return;
    }

    let currentGuess = this.value;

    //set up the win and lose paths (if/else)
    if (!currentWord.includes(this.value)) {
      //losing path
      //compare the letter guess to the word to see if it's in there
      console.log('valid letter!');
      //store wrong gueses so we can show them to the user
      wrongLetterArray.push(this.value);
      //add them to the paragraph tag on the page
      wrongLetterList.textContent = wrongLetterArray.join(" ");
      //turn on the hangman piece
      document.querySelector(`.wrong${wrongGuesses}`).classList.add('show-piece');

      if (wrongGuesses >= 8) {
        showResetScreen();
      //increase the wrongGUessees variable


    } else {
        wrongGuesses++;
    }
  } else {
    //debugger;
  let matchAgainst = currentWord.split("");
  var hintString = wordHint.textContent.split(" ");

  matchAgainst.forEach((letter, index) => {
    if (letter === currentGuess) {
      hintString[index] = currentGuess;
      correctGuesses++;
    }
  });

wordHint.textContent = "";
wordHint.textContent = hintString.join(" ");

if (correctGuesses === currentWord.length) {
  showResetScreen();
}

  }
}

function init() {
  //look at MDN -> the Math object
currentWord =
words[Math.floor(Math.random()*words.length)];

//fill the hint with unserscores
//array .map method
wordHint.textContent = currentWord.split("").map(letter => letter = "__").join(" ");

console.log(`guess this word: ${currentWord}` );
}

//event handling always goes at the bottom
//initButton.addEventListener('click', init);

guessBox.addEventListener('keyup', takeGuess);
resetButton.addEventListener('click', resetGame);

init();
})();
=======
(() => {
  console.log('hangman script fired!');

  //create an array to hold the words to be guessed (MDN -? arrays, MDN connst)
  const words = ["blue","orange", "yellow", "magenta", "violet", "potato", "hexagon", "javascript", "mermaid"];

//set up a variable stack
let currentWord=null,
  wordHint = document.querySelector('.current-word'),
  guessBox = document.querySelector('.guess'),
  wrongGuesses = 0,
  resetScreen = document.querySelector('.reset-screen'),
  resetButton = resetScreen.querySelector('button'),
  wrongLetterList = document.querySelector('.wrong-letters'),
  wrongLetterArray = [];


  function resetGame() {
    debugger;
    let gamePieces = Array.from(document.querySelectorAll('.show-piece'));
    gamePieces.forEach(piece => piece.classList.remove('show-piece'));
    wrongGuesses = 0;
    guessBox.value = "";

    init();
  }
  function showResetScreen() {


    //user has lost, reset stuff and start over
    console.log('you lose, loser!');
    resetScreen.classList.add('show-piece');
  }

  function takeGuess(){
    //debugger;
    console.log(this.value);

    //if there's no letter, exit the game loop -> MDN 'or'
    if (this.value == "" || this.value.length < 1 ) {
      return;
    }

    //set up the win and lose paths (if/else)
    if (!currentWord.includes(this.value)) {
      //losing path
      //compare the letter guess to the word to see if it's in there
      console.log('valid letter!');
      //store wrong gueses so we can show them to the user
      wrongLetterArray.push(this.value);
      //add them to the paragraph tag on the page
      wrongLetterList.textContent = wrongLetterArray.join(" ");
      //turn on the hangman piece
      document.querySelector(`.wrong${wrongGuesses}`).classList.add('show-piece');

      if (wrongGuesses >= 9) {
        showResetScreen();
      //increase the wrongGUessees variable


    } else {
        wrongGuesses++;
    }
  }
}

function init() {
  //look at MDN -> the Math object
currentWord =
words[Math.floor(Math.random()*words.length)];

//fill the hint with unserscores
//array .map method
wordHint.textContent = currentWord.split("").map(letter => letter = "__").join(" ");

console.log(`guess this word: ${currentWord}` );
}

//event handling always goes at the bottom
//initButton.addEventListener('click', init);

guessBox.addEventListener('keyup', takeGuess);
resetButton.addEventListener('click', resetGame);

init();
})();
>>>>>>> 16a3c02a93648fe253f57025729b7d4cb86a6988
