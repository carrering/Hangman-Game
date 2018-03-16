




var keyCodes = {
    65: "a", 
    66: "b", 
    67: "c", 
    68: "d", 
    69: "e", 
    70: "f", 
    71: "g", 
    72: "h", 
    73: "i", 
    74: "j", 
    75: "k", 
    76: "l", 
    77: "m", 
    78: "n", 
    79: "o", 
    80: "p", 
    81: "q", 
    82: "r", 
    83: "s", 
    84: "t", 
    85: "u", 
    86: "v", 
    87: "w", 
    88: "x", 
    89: "y", 
    90: "z" 
  }


var game = {
    numGuess:0,
    guessCount:0,
    guessAllowed:6,
    }

var wordBank = [
    { letterCount:3, word:'car'},
    { letterCount:4, word:'ford'},
    { letterCount:5, word:'chevy'},
    { letterCount:7, word:'mustang'},
    { letterCount:7, word:'porsche'}
]


var guessAllowed = 6; // number of guesses allowed for hangman before losing
var guessCount = 0; // guess counter
var guessIncorrectCount = 0; // number of incorrect guesses
var countSecretWordLength = 0; // number of letters for secret word
var guessedWordLength = 0; 



function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}


function splitWord() {
    var guessDashes = document.getElementById("underScores")
    var guessLetters = document.getElementById("lettersGuessedText")
    var str = wordBank[getRandomInt(0,wordBank.length-1)].word
    var res = str.split("")
    var arrayLength = res.length
    var startCounter = 0

    // document.getElementById("lettersGuessedText").innerHTML = res

    for(var i=0; i<arrayLength; i++){
        guessDashes.innerHTML = guessDashes.innerHTML + "<DIV class='underLine'>_</DIV>"
        guessLetters.innerHTML = guessLetters.innerHTML + "<DIV class='guessLetters' id='letter"+ i +"'>" + res[i] + "</DIV>"
 
    }
    return res
}



 // Let's start by grabbing a reference to the <span> below.
 
 var userStart = document.getElementById("getStartedText")
 var startCounter = 0 //start counter so "press any key" text only appears once
 // Next, we give JavaScript a function to execute when onkeyup event fires.
// while(startCounter<1){
//     startCounter++
 

//  Pick a random word

var answerWord = splitWord()
var guessWord = answerWord
var wrongWord = []
var remainingLetters = 0
var wrongLetter
var correctLetterCounter = 0
var wrongLetterCounter = 0
var guessedWrong = 0

remainingLetters = answerWord.length;

console.log('remaining letters',remainingLetters)
     //splits the word up into divs


var guessLetter

// while (remainingLetters > 0 && ){

// This function is run whenever the user presses a key.
document.onkeyup = function(event){

    userStart.innerHTML = "Please pick a letter!"

    // Determines which key was pressed.
    var userGuess = event.key;

    console.log(userGuess)


    for(i=0;i<answerWord.length;i++){
        

        if(answerWord[i] === userGuess && remainingLetters>0){
            console.log('answerletter',answerWord[i])
            $('#letter'+i).addClass('visible')
            guessWord[i] = "@"
            remainingLetters--
            console.log('remaining letters',remainingLetters)
            console.log('guessWord', guessWord)
            correctLetterCounter++
            console.log('correct letter counter',correctLetterCounter)

        }  
        else if(answerWord[i] !== userGuess && remainingLetters>0){
            wrongLetterCounter++
            console.log('wronglettercounter',wrongLetterCounter)
        }
 
        if(wrongLetterCounter>0 && wrongLetterCounter === remainingLetters){

            $('#wrongLetters').append(userGuess)
            guessedWrong++
            console.log('guessedwrong',guessedWrong)
            wrongLetterCounter = 0
            }
    
 
    }//end for loop
console.log('wrong counter', wrongLetterCounter)
console.log('correct letter counter', correctLetterCounter)

 


if(guessedWrong<6){
    switch (guessedWrong) {
        case 1:
            $('#strike1').toggleClass('hidden','visible');
            console.log('hey i got a case 1');
            break;
        case 2:
            $('#strike2a').toggleClass('hidden','visible');
            $('#strike2b').toggleClass('hidden','visible');
            console.log('hey i got a case 2');
            break;
        case 3:
            $('#strike3').toggleClass('hidden','visible');
            console.log('hey i got a case 3');
            break;
        case 4:
            $('#strike4').toggleClass('hidden','visible');
            break;
        case 5:
            $('#strike5').toggleClass('hidden','visible');
    }
}

else{
    $('#strike6').toggleClass('hidden','visible');
    console.log("game over")
    userStart.innerHTML = "Sorry You LOST!";
    $('#reloadme').toggleClass('hidden','visible');
}



    // for(i=0;i<guessWord.length;i++){

    //     if(guessWord[i] !== "@"){
    //         $('#letter'+i).addClass('visible')
    //         guessWord[i] = "@"
    //         remainingLetters--
    //         console.log('remaining letters',remainingLetters)
    //         console.log('guessWord', guessWord)
    //         correctLetterCounter++
            
    //     }  
    //     else{
    //         wrongLetterCounter++
    //     }
  
 
    // }//end for loop





    


    

       
 

    
}//end document.onkeyup

// }//end while loop


//  While the word has not been guessed {

// 

// remainingLetters=1

//  }


//   Show the player their current progress

//   Get a guess from the player


//   If the player wants to quit the game {

//   Quit the game

//   }


//   Else If the guess is not a single letter {


//   Tell the player to pick a single letter


//   }
//   Else {


//   If the guess is in the word {


//   Update the player's progress with the guess
//   }

//   }

//  }
//  Congratulate the player on guessing the word




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