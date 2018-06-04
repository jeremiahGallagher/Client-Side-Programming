/***********************************************
File Name: CSP.js
Author: Jeremiah Gallagher
Date: September 5, 2017
***********************************************/





            /***********Ch. 2 Functions: BMI Calculator Code **********/


function calcBmi(){

  //Get user input
  var height = document.getElementById("height").value;
  var weight = document.getElementById("weight").value;

  //Convert input to numbers
  var myHeight = parseInt(height);
  var myWeight = parseInt(weight);

  //Perform BMI Calculation

  var myBMI = (myWeight * 703) / (myHeight * myHeight);
  //  alert(myBMI);

  // Output result to BMI text field
  var result = document.getElementById("BMI");
  result.value = Math.round(myBMI);


}

     /***********Ch. 3 Control Flow: Prime Numbers Generator **********/

function validateInput(){
  var start = document.getElementById("startValue").value;
  var stop = document.getElementById("endValue").value;
  if(isNaN(start) || start < 0 || start > stop || start == ""){
    alert("The first number does not meet the requirements");
     document.getElementById("myForm").reset();
  }
  if (isNaN(stop) || stop < start || stop == ""){
    alert("The second number does not meet the requirements");
     document.getElementById("myForm").reset();
  }
  else{
    displayPrimes(start, stop);
  }
}

//This function checks the given input to see if it is a prime number
function isPrime(num) {
if (num < 2) return false;
  for (var i = 2; i < num; i++) {
    if (num % i == 0) return false;
  }
return true;
}

//This function builds a dynamic table using the user inputs
function displayPrimes(start, stop){
  while(start < 0 ){
    alert("The first number must be greater than zero");
  }
  document.write("<head>");
  document.write('<link rel="stylesheet" media="screen" href="main.css">');
  document.write("</head>");
  document.write("<table><tr>");
  var counter = 0;
  for (var i = start; i < stop; i++) {
    if (isPrime(i)) {
      if (counter == 10) {
         document.write('</tr><tr>');
         counter = 0;
      }
     counter++;
     document.write('<td>' + i + '</td>');
    }
  }
  document.write('</tr></table>');
  document.write("<a href='controlFlow.html'>Control Flow</a>");
}

/* ~~~ Chapter 7: Using Object Oriented JavaScript - Photo Order ~~~~ */
            /*--- The JavaScript code is located in objects.js ---*/


/* ~~~Chapter 8: Manipulating Data in Strings and Arrays - Guessing Game ~~~~*/
           /*--- The JavaScript code is located in strings.js ---*/


/* ~~~~~~~~~~~ Chapter 9: Managing State Information and Security - Cookies ~~~~*/
              /*--- The JavaScript code is located in state.js ---*/

/* ~~~~~~~~~~~ Chapter 10: Programming for Touchscreen and Mobile Devices~~~~~~~*/
          /*     The JavaScript code is located in touch.js   */


function getLastModified() {
  var lastTimeModified = new Date(document.lastModified);

  var months = ["January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"];

  var day = lastTimeModified.getDate();
  var monthList = lastTimeModified.getMonth() + 1;
  var year = lastTimeModified.getFullYear();
  return day + '-' + month[monthList] + '-' + year;
}
       /*****************Setup Page ****************/



//This function places the header into all specified pages.
function displayHeader(){
  /*  document.write("<h1>Jeremiah Gallagher's Javascript Website</h1>");*/
  var headerContent = "<h1>Jeremiah Gallagher's Javascript Website</h1>";
  pageHeader = document.getElementsByTagName("header");
  pageHeader[0].innerHTML = headerContent;
}

//This function places the Navigation into all specified pages.
function displayNav(){
  var navContent = "<ul>";
  navContent += "<li><a href='index.html'>Home</a></li>";
  navContent += "<li><a href='functions.html'>Functions</a></li>";
  navContent += "<li><a href='controlFlow.html'>Control Flow</a></li>";
  navContent += "<li><a href='debug.html'>Debug Code</a></li>";
  navContent += "<li><a href='DOM.html'>DOM/DHTML</a></li>";
  navContent += "<li><a href='forms.html'>Forms</a></li>";
  navContent += "<li><a href='objects.html'>Objects</a></li>";
  navContent += "<li><a href='strings.html'>Strings</a></li>";
  navContent += "<li><a href='state.html'>State</a></li>";
  navContent += "<li><a href='csp10.html'>CSP10</a></li>";
  navContent += "<li><a href='csp11.html'>CSP11</a></li>";
  navContent += "<li><a href='csp12.html'>CSP12</a></li>";
  navContent += "</ul>";
  pageNav = document.getElementsByTagName("nav");
  pageNav[0].innerHTML = navContent;
}

//This function places the Footer into all specified pages.
function displayFooter(){
  var footerContent = "<ul>";
  footerContent += "<li><a href='index.html'>Home</a></li>";
  footerContent += "<li><a href='functions.html'>Functions</a></li>";
  footerContent += "<li><a href='controlFlow.html'>Control Flow</a></li>";
  footerContent += "<li><a href='debug.html'>Debug Code</a></li>";
  footerContent += "<li><a href='DOM.html'>DOM/DHTML</a></li>";
  footerContent += "<li><a href='forms.html'>Forms</a></li>";
  footerContent += "<li><a href='objects.html'>Objects</a></li>";
  footerContent += "<li><a href='strings.html'>Strings</a></li>";
  footerContent += "<li><a href='state.html'>State</a></li>";
  footerContent += "<li><a href='csp10.html'>CSP10</a></li>";
  footerContent += "<li><a href='csp11.html'>CSP11</a></li>";
  footerContent += "<li><a href='csp12.html'>CSP12</a></li>";
  footerContent += "</ul><br>";
  footerContent += "<a href='mailto:jeremiah@gallagher.com'>jeremiah@gallagher.com</a>";
  footerContent += "<\script>";
  footerContent += "document.write('<p>This document was last modified on: ')";
  footerContent += "document.write(document.lastModified)";
  footerContent +=" document.write('</p>');";
  footerContent += "</script>";
  footerContent += "<p>Disclaimer: Oklahoma City Community College";
  footerContent += " does not necessarily endorse the content or the";
  footerContent += " respective links of this web page.";
  pageFooter = document.getElementsByTagName("footer");
  pageFooter[0].innerHTML = footerContent;
}


/*****************Event Listeners ****************/

function createEventListeners(){
  //backward compatible Event Listener
  var submitButton = document.getElementById("getPrimes");

  if(submitButton.addEventListener){
    submitButton.addEventListener("click", validateInput, false);
  }
  else if (submitButton.attachEvent) {
    submitButton.attachEvent("onclick", validateInput);
  }
}



function setUpPage(){
displayHeader();
displayNav();
displayFooter();
createEventListeners();
}

if(window.addEventListener){
  window.addEventListener("load", setUpPage, false);
}
else if (window.attachEvent){
  window.attachEvent("onload", setUpPage);
}
