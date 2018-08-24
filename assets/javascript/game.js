// create variables
var availableLetters, words, answerArray, guess, lettersGuessed, lettersMatched, letters, numOfWins, wins, remainingGuesses, lives, currentWord, numLettersMatched, messages, showDestinationImg;

// create Get Elements for later access
numOfWins = document.getElementById('num-wins');
currentWordDisplay = document.getElementById('current-word');
remainingGuesses = document.getElementById('remaining-guesses');
lettersGuessedDisplay = document.getElementById('letters-guessed');
output = document.getElementById('output');
currentDestinationImage = document.getElementById('destination-picture');
countryNameDisplay = document.getElementById('country-name');


// declare variables when game starts
function setup() {
  availableLetters = "abcdefghijklmnopqrstuvwxyz";
  wins = 0;
  lives = 20;
  answerArray = [];
  lettersGuessedArray = [];
  lettersGuessed = lettersMatched = '';
  numLettersMatched = 0

  // create an array of words
  words = [
    "croatia",
    "argentina",
    "japan",
    "namibia",
    "italy",
    "greece",
    "australia",
    "malaysia",
    "france",
    "seychelles",
    "sweden",
    "ecuador",
    "thailand",
    "indonesia"
  ];

  // create messages to interact with users via output.innerHTML
  messages = {
    start: 'Press any key to get started!',
    win: 'You win! I knew you could do it.',
    lose: 'Game Over!',
    correct: 'Nice going! Keep it up.',
    wrong: 'You’re on the right track. Try again.',
    guessed: 'Already guessed, please try again',
    validLetter: 'Please enter a letter from A-Z',
    congrats: "Congratulations! You've completed this word guess challenge!"
  };

}; // End setup function

// create a function to randomly choose a word with
function newWord() {
  // set values that are displayed on the browser to default
  answerArray = [];
  lettersGuessedArray = [];
  lettersGuessed = lettersMatched = '';
  numLettersMatched = 0

  numOfWins.innerHTML = wins;
  remainingGuesses.innerHTML = lives;
  lettersGuessedDisplay.innerHTML = lettersGuessedArray.join(" ");
  output.innerHTML = messages.start;

  // choose a random word 
  currentWord = words[Math.floor(Math.random() * words.length)];
  console.log("word: " + currentWord);
  console.log(words);

  // create the answer array

  for (var i = 0; i < currentWord.length; i++) {
    answerArray[i] = "_";
  }
  console.log(answerArray);
  currentWordDisplay.innerHTML = answerArray.join(" ");
  gameRound();
};

/* Once the window is loaded, run setup(); and newWord(); to start game */
window.onload = setup();
window.onload = newWord();

function gameRound() {
  // take input from the player
  document.onkeyup = function () {
    playAudio();
    var guess = String.fromCharCode(event.keyCode).toLowerCase();
    console.log("User guess: " + guess);

    /* Is guess a valid letter? If so carry on, else display error message
     Use indexOf() to search for 'guess' in a string. (If it returns -1, the value to search for never occurs.) */
    if (availableLetters.indexOf(guess) > -1) {
      // Has it been guessed (missed or matched) already? If so, abadon & add notice
      if ((lettersMatched && lettersMatched.indexOf(guess) > -1) || (lettersGuessed && lettersGuessed.indexOf(guess) > -1)) {
        output.innerHTML = messages.guessed;
      } else if (currentWord.indexOf(guess) > -1) {
        // Does guess exist in current word? 

        // add letter guessed to an answer array
        for (var i = 0; i < currentWord.length; i++) {
          if (currentWord[i] === guess) {
            answerArray[i] = guess;
            console.log("Current answerArray is " + answerArray);
            currentWordDisplay.innerHTML = answerArray.join(" ");
            output.innerHTML = messages.correct;
          }
        }

        // check if letter appears multiple time 
        for (var j = 0; j < currentWord.length; j++) {
          if (currentWord.charAt(j) === guess) {
            numLettersMatched += 1;
          }
        }

        lettersMatched += guess;
        console.log("Letters Matched: " + lettersMatched);
        if (numLettersMatched === currentWord.length) {
            // remove the word that already played out of the 'words' array
            words.splice(words.indexOf(`${currentWord}`), 1);
            replaceImg();
            showCountryName();
            wins++;
            numOfWins.innerHTML = wins;
            endGame(true);
          }

        

      } else {
        // guess doesn't exist in current word and hasn't been guessed before, add to letterGuessed, reduce lives, and update user
        lettersGuessed += guess;
        lettersGuessedArray.push(guess);
        console.log("Letters Guessed: " + lettersGuessed);
        console.log(lettersGuessedArray);
        var letterGuessedUppercase = lettersGuessedArray.map(function toUpper(item) {
          return item.toUpperCase();
        });
        lettersGuessedDisplay.innerHTML = letterGuessedUppercase.join(" ");
        output.innerHTML = messages.wrong;
        lives--;
        remainingGuesses.innerHTML = lives;
        if (lives === 0) {
          endGame(false);
        } else {
          gameRound();
          return;
        }
      }
    } else {
      output.innerHTML = messages.validLetter;
    }
  };
};

// function to capitalize first letter
function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}


// function to prompt for new game
function endGame(won) {
  if (won) {
    if (words.length == 0) {
      // Say Congrats when users have answer all the words correctly
      output.setAttribute("class", "message-congrats");
      output.innerHTML = messages.congrats;
      document.onkeyup = function () {
        /* Remove an effect from .onkeyup
        User can no longer type anything more. */
      }
    } else {
      // say You Win!
      output.innerHTML = messages.win;
      // randomly choose a new word for user to keep playing
      newWord();
    }

  } else {
    output.setAttribute("class", "message-gameover");
    console.log(capitalizeFirstLetter(currentWord));
    output.innerHTML = messages.lose + " The correct answer was " + capitalizeFirstLetter(currentWord) + ".";
    document.onkeyup = function () {
      /* Remove an effect from .onkeyup
      User can no longer type anything more. Game over! */
    }
  }
};

// replace an image to match the answer
function replaceImg() {
  showDestinationImg = currentWord;

  switch (showDestinationImg) {
    case "croatia":
      console.log("Show croatia");
      currentDestinationImage.src = 'assets/images/img-croatia.jpg';
      break;
    case "argentina":
      console.log("Show argentina");
      currentDestinationImage.src = 'assets/images/img-argentina.jpg';
      break;
    case "japan":
      console.log("Show japan");
      currentDestinationImage.src = 'assets/images/img-japan.jpg';
      break;
    case "namibia":
      console.log("Show namibia");
      currentDestinationImage.src = 'assets/images/img-namibia.jpg';
      break;
    case "italy":
      console.log("Show italy");
      currentDestinationImage.src = 'assets/images/img-italy.jpg';
      break;
    case "greece":
      console.log("Show greece");
      currentDestinationImage.src = 'assets/images/img-greece.jpg';
      break;
    case "australia":
      console.log("Show australia");
      currentDestinationImage.src = 'assets/images/img-australia.jpg';
      break;
    case "malaysia":
      console.log("Show malaysia");
      currentDestinationImage.src = 'assets/images/img-malaysia.jpg';
      break;
    case "france":
      console.log("Show france");
      currentDestinationImage.src = 'assets/images/img-france.jpg';
      break;
    case "seychelles":
      console.log("Show seychelles");
      currentDestinationImage.src = 'assets/images/img-seychelles.jpg';
      break;
    case "sweden":
      console.log("Show sweden");
      currentDestinationImage.src = 'assets/images/img-sweden.jpg';
      break;
    case "sweden":
      console.log("Show sweden");
      currentDestinationImage.src = 'assets/images/img-sweden.jpg';
      break;
    case "ecuador":
      console.log("Show ecuador");
      currentDestinationImage.src = 'assets/images/img-ecuador.jpg';
      break;
    case "thailand":
      console.log("Show thailand");
      currentDestinationImage.src = 'assets/images/img-thailand.jpg';
      break;
    case "indonesia":
      console.log("Show indonesia");
      currentDestinationImage.src = 'assets/images/img-indonesia.jpg';
      break;
  }
};

// Display correct answer
function showCountryName() {
  countryName = currentWord;

  switch (countryName) {
    case "croatia":
      console.log("Text croatia");
      countryNameDisplay.innerHTML = 'Croatia';
      break;
    case "argentina":
      console.log("Text argentina");
      countryNameDisplay.innerHTML = 'Argentina';
      break;
    case "japan":
      console.log("Text japan");
      countryNameDisplay.innerHTML = 'Japan';
      break;
    case "namibia":
      console.log("Text namibia");
      countryNameDisplay.innerHTML = 'Namibia';
      break;
    case "italy":
      console.log("Text italy");
      countryNameDisplay.innerHTML = 'Italy';
      break;
    case "greece":
      console.log("Text greece");
      countryNameDisplay.innerHTML = 'Greece';
      break;
    case "australia":
      console.log("Text australia");
      countryNameDisplay.innerHTML = 'Australia';
      break;
    case "malaysia":
      console.log("Text malaysia");
      countryNameDisplay.innerHTML = 'Malaysia';
      break;
    case "france":
      console.log("Text france");
      countryNameDisplay.innerHTML = 'France';
      break;
    case "seychelles":
      console.log("Text seychelles");
      countryNameDisplay.innerHTML = 'Seychelles';
      break;
    case "sweden":
      console.log("Text sweden");
      countryNameDisplay.innerHTML = 'Sweden';
      break;
    case "ecuador":
      console.log("Text ecuador");
      countryNameDisplay.innerHTML = 'Ecuador';
      break;
    case "thailand":
      console.log("Text thailand");
      countryNameDisplay.innerHTML = 'Thailand';
      break;
    case "indonesia":
      console.log("Text indonesia");
      countryNameDisplay.innerHTML = 'Indonesia';
      break;
  }
};
// play an background audio
var x = document.createElement("AUDIO");
x.setAttribute("src", "assets/audio/tropicalhouse.mp3");
x.setAttribute("controls", "controls");
document.body.appendChild(x);

function playAudio() {
  x.play();
}
