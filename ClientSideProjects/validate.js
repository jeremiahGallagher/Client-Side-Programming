function validate(){
	   // variable to that will be used to determine if true or false is returned
	   var blnError = false;

	   // Notice that the fields are validated in reverse order so focus is on the first
	   // element on the page that has an error
	   // All id's for labels that contain an error message must begin with "errMessage" This consistency is
	   // needed when a reset is done to clear the messages.  Any text can be used. Just
	   // make the appropriate changes.  The text "errMessage" may NOT be used in assignments.

	   // .select() higlights the text that needs correction. This allows the user to see the text which was entered but does not
	   // need to manually delete the entry

	   // validate credit hours for an entry
	   if ((document.forms[0].txtCreditHours.value <= 0)|| isNaN(document.forms[0].txtCreditHours.value)){
		   document.getElementById('errMessageCreditHours').style.display="inline";
		   document.forms[0].txtCreditHours.style.backgroundColor = "lightyellow";
		   document.forms[0].txtCreditHours.focus();
		   document.forms[0].txtCreditHours.select();
		   blnError = true;
		}else{
		   document.forms[0].txtCreditHours.style.backgroundColor = "#FFF";
		   document.getElementById('errMessageCreditHours').style.display="none";
		}

		//validate class name for an entry
		if (document.forms[0].txtClass.value === "") {
			document.getElementById('errMessageClass').style.display="inline";
			document.forms[0].txtClass.style.backgroundColor = "lightyellow";
			document.forms[0].txtClass.focus();
			 document.forms[0].txtClass.select();
			blnError = true;
		}else{
			document.forms[0].txtClass.style.backgroundColor = "#FFF";
			document.getElementById('errMessageClass').style.display="none";
		}

		// do not submit form if there is an error (false)
		// submit form if fields validate
		if (blnError == true){
			return false;
		}  else {
			return true;
		}
	}
