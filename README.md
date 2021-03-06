# Word Guess Game

A word guess game with **a destination theme**  [Click to Play](https://keenwilson.github.io/Word-Guess-Game/ "Destination Word Guess Game")
---
## Destination Edition
We ramp up the *destination* theme by having the brownser play a *tropical house* song once the user press any key to get started.
Words that user has to guess are country names of *destinations* around the world i.e., Italy, Thailand, Namibia, Sweden etc.

## How This Application Works

![Welcome the user and random a word](./assets/screenshots/screenshot-startgame.png)
* The app randomly picks a word, and the user has to guess which word the app choose by entering correct letters.
* At the begining of the game, the user will receive **20 guesses** to play, as shown under *Number of Guesses Remaining*.

![Letters already guessed](./assets/screenshots/screenshot-showalreadyguessed.png)
* If the user missed the correct letters, the browser will display the letters guessed under *Letters Already Guessed*.

![Correct guess](./assets/screenshots/screenshot-showcorrectguess.png)
* The user wins when the word has been guessed correctly. The browser will
    * update *the number of wins*
    * display *the destination picture* of current word
    * reveal *the text of current word* under the destination picture
    * automatically chooses another word for the user to play

![Game over](./assets/screenshots/screenshot-gameover.png)
. When the user completes all the word guess challenge, the game displays *a stylized congratulations message*.
* When the user's *Number of Guesses Remaining* is reduced to zero, the user loses and the game displays *a game over message*.s

## Technical Approach
* Create a clean modern-looking layout with `HTML5` and `CSS Bootstrap` framework
* Use variables, arrays, loops, and conditionals in `JavaScript` to create a simple word guessing game
* Use the `document.onkeyup()` function to collect input from the user's keyboard
* Create a function to capitalize the first letter of the word for display
```
function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}
```
* Use HTML DOM `.innerHTML`  property to change the HTML content
* User HTML DOM `.setAttribute()` method to set the attribute to an element and give it  the specificed value
---
## Author
[Keen Wilson](https://keenwilson.github.io/ "Keen Wilson's Portfolio")
