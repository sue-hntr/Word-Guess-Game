// THIS IS FROM CLASS ON SATURDAY 11/10. USE KEY.UP and look up how to search a string and array for a ::first-letter

var wordArray = ["c3po", "r2d2", "chewbacca", "yoda", "bb8"]; 
//from stack overflow: https://stackoverflow.com/questions/4550505/getting-a-random-value-from-a-javascript-array

//choose a random item number to remove from the array
var randomChoice = Math.floor(Math.random() * wordArray.length);

//find the item from the array and assign it to a variable
var randWord = wordArray[randomChoice];

console.log("remove no. " + randomChoice + " the name is: " + randWord);

//show what's left in the array by temp creating a new array and looking at it

wordArray.splice(randomChoice, 1);
console.log("Newer, Shorter, Word Array: " + wordArray);


// Math.floor returns a whole number closest to number given. Math.random gives random decimal number between 0 & 1
//HOW DO I STORE randWord values for later use? And do I need to? NO I DON'T. I JUST NEED TO REMOVE THE WORD FROM THE ARRAY.

//Assign a varible to the # of letters of the name removed from the array and display it in HTML

var blankLetters = randWord.length;
//Log the word to the console to check it.
console.log(randWord);
document.getElementById("blankLetters").innerHTML = blankLetters;
//Since we have the length of randWord string as "blankLetters", create a blank array, create a loop to fill it with the blank space symbols to represent the "blankLetters", and print it out as  
var newNumLetters = ""; //this is a string
var numLetters = []; 
for (var i = 0; i < blankLetters; i++){
    numLetters.push ("_ ");
    }
newNumLetters = numLetters.join('');
document.getElementById("numLetters").innerHTML = newNumLetters;

console.log("numLetters: " + numLetters);

//in order to more effectively do the letter placement, turn randWord into an array.
var randArray = [];
for(var k = 0; k < blankLetters; k++){
    randArray.push(randWord[k] + ", ");
}
console.log("radWord as an array: " + randArray);


//take the keypress and test to see if it is in the randArray
document.onkeyup = function(event, numLetter) {
    var userGuess = event.key;
    var userGuessA = userGuess.toLowerCase();
    console.log("userGuessA: " + userGuessA);
    var searchLetter = randWord.indexOf(userGuess);
    var numLettersx = []; 
    for (var i = 0; i < blankLetters; i++){
        numLettersx.push ("_ ");
        }


//add a loop to check for duplicate letters
//add a loop to check for duplicate letters

    console.log("search letter: " + searchLetter);
    if(searchLetter !== -1){
        console.log("Good Job. searchLetter is: " + searchLetter);
        numLettersx = numLettersx.splice(searchLetter, 1, userGuess);
        console.log("NumLettersX: " + numLettersx);
//        fruits.splice(2, 0, "Lemon", "Kiwi")
    }else{
        console.log("bad choice, try again. Press another key");
    }
}

// Next: push the correct letters to the right place in the _ _ _ 
// document.onkeyup = function(event) {
//USE THIS FOR Key entry.Determines which key was pressed.
        // var userGuess = event.key;
        // alert("Your key pressed: " + userGuess);
        // var userGuessA = userGuess.toLowerCase();

        // if (userGuess === "h" || userGuess === "d" || userGuess === "w" || userGuess === "t" ){
        //   if (userGuessA === "h"){
        //     car.honk();
        //     reWriteStats(car);
        //   } else if (userGuessA === "d"){
        //     car.driveToWork();
        //     reWriteStats(car);
        //   } else if (userGuessA === "w"){
        //     car.driveAroundWorld();
        //     reWriteStats(car);
        //   } else if (userGuessA === "t" ){
        //     car.getTuneUp();
        //     reWriteStats(car);
        //   }
        // }
    //   }
