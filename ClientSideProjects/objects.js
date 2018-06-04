// File: objects.js
// Author: Jeremiah gallagher
// Date:

// Sets up the page when it is loaded
if (window.addEventListener) {
	 window.addEventListener("load", createEventListeners1, false);
}
else if (window.attachEvent) {
	 window.attachEvent("onload", createEventListeners1);
}

function validation(){
	var errorsExist = false;
	// ~~~~~~~~~~~~~~~~~~   validate quantity
	if ((document.forms[0].copies.value < 1)||(document.forms[0].copies.value > 25) || isNaN(document.forms[0].copies.value)){
		document.getElementById('errorPortrait').style.display="inline";
		document.forms[0].copies.style.backgroundColor = "lightyellow";
		document.forms[0].copies.focus();
		document.forms[0].copies.select();
		errorsExist = true;
	}
	else{
		document.forms[0].copies.style.backgroundColor = "#FFF";
		document.getElementById('errorPortrait').style.display="none";
	}

	// ~~~~~~~~~~~~~~~~~~   validate photo size
	if(document.getElementsByName('fileName').checked == false){
		document.getElementById('errorFilename').style.display="inline";
		errorsExist = true;
	}
	else {
		document.getElementById('errorFilename').style.display="none";

	}


	// ~~~~~~~~~~~~~~~~~~   validate image has been selected
	if(document.getElementsByName('size').checked == false){
		document.getElementById('errorSize').style.display="inline";
		errorsExist = true;
	}
	else {
		document.getElementById('errorSize').style.display="none";
}

		// ~~~~~~~~~~~~~~~~~~   validate buyer (name and email - fields have entries)
		if (document.forms[0].buyer.value === "") {
			document.getElementById('errorName').style.display="inline";
			document.forms[0].buyer.style.backgroundColor = "lightyellow";
			document.forms[0].buyer.focus();
			document.forms[0].buyer.select();
			errorsExist = true;
		}
		else{
			document.forms[0].buyer.style.backgroundColor = "#FFF";
			document.getElementById('errorName').style.display="none";
		}

		if (document.forms[0].email.value === "") {
			document.getElementById('errorEmail').style.display="inline";
			document.forms[0].email.style.backgroundColor = "lightyellow";
			document.forms[0].email.focus();
			document.forms[0].email.select();
			errorsExist = true;
		}
		else {
			document.forms[0].email.style.backgroundColor = "#FFF";
			document.getElementById('errorEmail').style.display="none";
		}

		//------------
		if (errorsExist == true){
			return false;
		}
		else {
			GetValues();
			DisplayOutput();
		}
	}

	function clearErrorMessages() {
		//Create an array of labels
	    var eMessages = document.getElementsByTagName("label");

		for (var i=0; i < eMessages.length; ++i) {
		         // extract first 10 characters of the label's id
		    var prefix = eMessages[i].id.substring(0,5);
		         // verify that it is an error message
			if (prefix == "error"){
				//hide the error message
			eMessages[i].style.display="none";
		    }
		 }
	 }
/*
	function PortraitOrder(portrait,copies,size,buyer,orderCost){
		// ~~~~~~~~~~~~~~~~~~   constructor
		//                      properties: portrait, copies, size, buyer, and orderCost
		var portrait: "0",
		var copies: 0,
		var size: " ",
		var buyer: {

		},
		var orderCost = 0.00
		//                      method:  calculate that utilizes CalculateCost function.
	};
*/

	// ~~~~~~~~~~~~~~~~~~   create a new instance of the PortraitOrder calss



	function GetValues(){
		// ~~~~~~~~~~~~~~~~~~   function associated with calculate method found in PortraitOrder class
		// ~~~~~~~~~~~~~~~~~~   get values from form and stores in object properties
		// ~~~~~~~~~~~~~~~~~~   uusing prototype creates a new property "email",
		//                      stores users email in this property
	}




	function CalculateCost(){
		// ~~~~~~~~~~~~~~~~~~   method that computes and returns the cost depending on the size selected

	}


	function DisplayOutput(){
		// ~~~~~~~~~~~~~~~~~~   Call Calculate method
		// ~~~~~~~~~~~~~~~~~~   Concatenate the output (order info including the cost of the order and assign it to innerHTML
		//                      proerty of the <main> block element
		//                      HINT: getElementsByTagName("main")[0]
	}



	// ~~~~~~~~~~~~~~~~~~   Add code to create even listeners
	function createEventListeners1(){
		var btnSubmit = document.getElementById("btnSubmit");
		if (btnSubmit.addEventListener){
			btnSubmit.addEventListener("click", validation, false);
		}
		else if (btnSubmit.attachEvent){
			btnSubmit.attachEvent("onclick", validation);
		}
	}

	// Sets up the page when it is loaded
	if (window.addEventListener) {
	   window.addEventListener("load", createEventListeners1, false);
	}
	else if (window.attachEvent) {
	   window.attachEvent("onload", createEventListeners1);
	}
