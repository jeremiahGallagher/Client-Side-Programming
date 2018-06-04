/*    JavaScript 6th Edition
 *    Chapter 8
 *    Guessing Game
 *    VArrays and Strings
 *    Author: Jeremiah Gallagher
 *    Date:  November 2017
 *    Filename: strings.js
 */


/* Global Variables */

// This array is a list of available words for guessing game
 var wordList = ["dog", "cat", "box"];

 //this string holds the randomly chosen word from the array 
 var newWord = randomWord();

// This string will be used to store the letters of the chosen word for display
var myString;

// This array will start as asterisks and have it's elements replaced by matching letters as they are discovered
var asteriskArray = [];


 /* functions */ 

 //This function uses Math.random to randomly choose one of the words in the array for use in the game
 function randomWord(){
 	return wordList[Math.floor(Math.random() * wordList.length)];
 };

//This function will determine the length of the chosen word and add asterisks for each character
function buildString()  {
	for (var i = 0; i < newWord.length; i++){
		asteriskArray[i] = "*";
	}
	//build the string with a space as delimiter and display on page
	myString = asteriskArray.join(" ");
	document.getElementById("wordHolder").innerHTML = "Mystery Word: " + myString;
}
// This function will check to see if the current guess is found inside the string and place it there if it is
function userGuess(){
	var testString = "";
	
	var guess = document.getElementById("userInput").value;
	if (guess.length > 0){
		for (var i = 0; i < newWord.length; i++){
			if (newWord[i] === guess){
				asteriskArray[i] = guess;
				if (testString.split("") === newWord){
			alert("grats!");

		}
			}
		}
		document.getElementById("wordHolder").innerHTML = asteriskArray.join("");
		testString = asteriskArray.toString();
		document.getElementById("userInput").value = "";
		
	}
	else {
		alert("you must choose a letter!");
	}
	
}

// This function creates the event listener for the submit button
function createGuessingEventListeners(){
	var letterSubmitButton = document.getElementById("letterSubmitButton");
	if (letterSubmitButton.addEventListener){
		letterSubmitButton.addEventListener("click", userGuess, false);
	}
	else if (letterSubmitButton.attachEvent) {
		letterSubmitButton.attachEvent("onclick", userGuess);
	}
}

// This function will run on page load tostart the game
function setUp(){
	buildString();
	createGuessingEventListeners();
}

//run setUp function
if (window.addEventListener) {
	window.addEventListener("load", setUp, false);
}
else if (window.attachEvent){
	window.attachEvent("onload", setUp);
}