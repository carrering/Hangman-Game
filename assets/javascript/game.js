

var wordBank = ["jquery", "browser","psuedo","syntax","laptop"]


var guessAllowed = 6; // number of guesses allowed for hangman before losing
var guessCount = 0; // guess counter
var guessIncorrectCount = 0; // number of incorrect guesses
var countSecretWordLength = 0; // number of letters for secret word
var guessedWordLength = 0; 


var game = {
    numGuess:0,
    guessCount:0,
    guessAllowed:6,
    }

var wordBank = [
    { letterCount:3, word:'one'},
    { letterCount:4, word:'java'},
    { letterCount:5, word:'apple'},
    { letterCount:6, word:'jungle'},
    { letterCount:7, word:'porsche'}
]


function splitWord() {
    var str = wordBank[0].word

    var res = str.split("")
    document.getElementById("lettersGuessedText").innerHTML = res
    console.log(res)
    
}



 // Let's start by grabbing a reference to the <span> below.
 var userStart = document.getElementById("getStartedText")
 var startCounter = 0 //start counter so "press any key" text only appears once
 // Next, we give JavaScript a function to execute when onkeyup event fires.
while(startCounter<1){
 document.onkeyup = function(event) {
 userStart.innerHTML = "Please pick a letter!"
 splitWord()//splits the word up into divs
 }

 startCounter++

}




//    userText.textContent = event.key


// pick random array which word to use for the game

// create hangman stand

// for loop to create dashes for entry of that word based on lenght of the word

// for loop captures their entry

// comparison function

//while total wrong guess is less than total allowed guesses then
// if letter guessed matches a letter in the word then
// populateletter function letter in gui (replace underscore with letter)
// else if wrong after going through entire word increcment counters
// wrong guess counter

// game object
// properties
// 

// 

//word object
// properties
// word length
// word itself
// 