var exp = document.getElementById("form");

var higherthan = null;
var lowerthan = null;
var max = 100;
var min = 0;


function insert(x) {
	exp.textview.value = x;
}

function calculate(x) {
	console.log(min);
	console.log(max);
	var exp = document.getElementById("form");
	var currentNum = exp.textview.value;
	if (x == true) {
		if (currentNum == "Is it higher than 50?") {
			insert(75);
			min = 50;
			return;
		} else {
			min = Math.floor(exp.textview.value);
			newexp = Math.floor((Math.floor(currentNum) + max)/2);
			insert(newexp);
			return;
		}
	}
	if (x == false) {
		if (currentNum == "Is it higher than 50?") {
			max = 50;
			insert(25);
			return;
		} else {
			max = Math.floor(exp.textview.value);
			newexp = Math.floor((Math.floor(currentNum) + min) / 2);
			insert(newexp);
			return;
		}
	}
}

function celebrate() {
	var exp = document.getElementById("form");
	number = exp.textview.value;
	var exp = document.getElementById("answer");

	if (number == 69){
		exp.textviews.value = "Nice.";
	} else if (number == "Is it higher than 50?") {
		number = 50;
		exp.textviews.value = "Your answer is " + number + "!";
	} else {
		exp.textviews.value = "Your answer is " + number + "!"; 
	}

	insert("Yay! I guessed it!");
}