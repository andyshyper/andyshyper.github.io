var y_score = 0;
var c_score = 0;
const userScore_span = document.getElementById("user-score");
const compScore_span = document.getElementById("comp-score");
const message_div = document.querySelector("#message");
const c = document.getElementById("c");
const b = document.getElementById("b");
const s = document.getElementById("s");

document.addEventListener("load", init());

function updateMessage(messageD) {
	message_div.innerHTML = messageD;
}

function updateScores() {
	userScore_span.innerHTML = y_score;
	compScore_span.innerHTML = c_score;
}

function genCompChoice() {
	return Math.floor(Math.random() * 3);
}

function game(userChoice) {
	var compChoice = genCompChoice();
	if (compChoice === 0) {
		compChoice = "c";
	} else if (compChoice === 1) {
		compChoice = "b";
	} else {
		compChoice = "s";
	}

	switch(userChoice + compChoice) {
		
		case "cb":
			y_score ++;
			updateScores();
			updateMessage("Charmander burns Bulbasaur. You Win!");
			break;
		case "bs":
			y_score ++;
			updateScores();
			updateMessage("Bulbasaur whips Squirtle. You Win!");
			break;
		case "sc":
			y_score ++;
			updateScores();
			updateMessage("Squirtle dampens Charmander. You Win!");
			break;

		
		case "bc":
			c_score ++;
			updateScores();
			updateMessage("Bulbasaur is scorched by Charmander. You lose...");
			break;
		case "sb":
			c_score ++;
			updateScores();
			updateMessage("Squirtle is drained by Bulbasaur. You lose...");
			break;
		case "cs":
			c_score ++;
			updateScores();
			updateMessage("Charmander is drenched by Squirtle. You lose...");
			break;
			

		case "bb":
			updateMessage("You both picked Bulbasaur! It's a Draw!");
			break;
		case "ss":
			updateMessage("You both picked Squirtle! It's a Draw!");
			break;
		case "cc":
			updateMessage("You both picked Charmander! It's a Draw!");
			break;
	}

	console.log("User: " + userChoice + " and Comp: " + compChoice);
}

function init() {
	c.addEventListener("click", function(){game("c")});
	b.addEventListener("click", function(){game("b")});
	s.addEventListener("click", function(){game("s")});
}

function main() {

}
main();