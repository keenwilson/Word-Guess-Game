# Word-Guess-Game

A word guess game  (*Hangman*) with **a destination theme** using Vanilla JavaScript
This app has been created with HTML, CSS Bootstrap, and JavaScript. 

## Destination Edition
We ramp up the *destination* theme by having the brownser play a *tropical house* song once the user press any key to get started.
Words that user has to guess are country names of *destinations* around the world i.e., Italy, Thailand, Namibia, Sweden etc.

## How It Works

* The app randomly picks a word, and the user has to guess which word the app choose by entering correct letters.

* At the begining of the game, the user will receive **20 guesses** to play, as shown under *Number of Guesses Remaining*.

* If the user missed the correct letters, the browser will display the letters guessed under *Letters Already Guessed*.

* The user wins when the word has been guessed correctly. The browser will
    * update *the number of wins*
    * display *the destination picture* of current word
    * reveal *the text of current word* under the destination picture

* Afther the user wins, the game automatically chooses another word and make the user play it. When the user completes all the word guess challenge, the game displays *a stylized congratulations message*.



