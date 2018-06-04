/*
        Hands-On Project 7-5
        Jeremiah Gallagher
        October 30, 2017
*/

"use strict";

var delivInfo = {};
var delivSummary = document.getElementById("deliverTo");
var foodInfo = {};
var foodSummary = document.getElementById("order");

function processFood() {
	var prop;
	var crustOpt = document.getElementsByName("crust");
	var toppings = 0;
	var toppingBoxes = document.getElementsByName("toppings");
	var instr = document.getElementById("instructions");
	if (crustOpt[0].checked) {
		foodInfo.crust = crustOpt[0].value;
	} else {
		foodInfo.crust = crustOpt[1].value;
	}
	foodInfo.size = document.getElementById("size").value;
	for (var i = 0; i < toppingBoxes.length; i++) {
		if (toppingBoxes[i].checked) {
			toppings++;
			foodInfo["topping" + toppings] = toppingBoxes[i].value;
		}
		if (!(instr.value === "")) {
			foodInfo.instructions = instr.value;
		}
	}
	foodSummary.innerHTML += "<p><span>Crust</span>: " + foodInfo.crust + "</p>";
	foodSummary.innerHTML += "<p><span>Size</span>: " + foodInfo.size + "</p>";
	foodSummary.innerHTML += "<p><span>Topping(s)</span>: " + "</p>";
	foodSummary.innerHTML += "<ul>";
	for (var i = 1; i < 6; i++) {
		if (foodInfo["topping" + i]) {
			foodSummary.innerHTML += "<li>" + foodInfo["topping" + i] + "</li>";
		}
	}
	foodSummary.innerHTML += "</ul>";
	foodSummary.innerHTML += "<p><span>Instructions</span>: " + foodInfo.instructions;
	document.getElementById("order").style.display = "block";
}

function processDeliveryInfo() {
  var prop;
  delivInfo.name = document.getElementById("nameinput").value;
  delivInfo.addr = document.getElementById("addrinput").value;
  delivInfo.city = document.getElementById("cityinput").value;
  delivInfo.email = document.getElementById("emailinput").value;
  delivInfo.phone = document.getElementById("phoneinput").value;
  for (prop in delivInfo) {
	  delivSummary.innerHTML += "<p>" + delivInfo[prop] + "</p>";
  }
}

function previewOrder() {
	processDeliveryInfo();
	processFood();
	document.querySelector("section").style.display = "block";
	document.getElementById("deliverTo").style.display = "block";
}

function createEventListeners() {
	var submitButton = document.getElementById("previewBtn");
	if (submitButton.addEventListener) {
		submitButton.addEventListener("click", previewOrder, false);
	} else if (submitButton.attachEvent) {
		submitButton.attachEvent("onclick", previewOrder);
	}
}

if (window.addEventListener) {
	window.addEventListener("load", createEventListeners, false);
} else if (window.attachEvent) {
	window.attachEvent("onload", createEventListeners);
}
