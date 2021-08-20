// Creates a scavenger hunt 
var scavengerHunt = {
	gpPlayer: player,
	// List of clues to be displayed
	clues: ['It is here that reflection happens, but there is no looking glass. It is here that people are bound, and strings and rings are shared. Where am I?',
			'My namesake was a monopoly man. They say he had nerves of steel. I know I was built in the early 1900s, but don’t judge me by my cover, as I have integrated technology over time. Where am I?',
			'I could be sold almost anywhere, hot or cold, as a liquid or a solid. However, here I am something more: a classroom discussion topic, a unique opportunity for eager engineering and chemistry students to analyze. Where am I?',
			'I have seen it all: fires, cows, and pranks with chairs. After all of this, I was riddled with age, so it was high-time for a renovation to my Victorian-era walls. Where am I?',
			'Many say that their college experiences stem from here. Leave the pie behind, but there is still a crunch to come. Don’t spiral out of control, 3 is prime. A gathering place, a helping hand, your resource for a problem yet unsolved is where you shall go. Where am I?'],
	// List of keywords used to solve clues
	keywords: ['stained glass', 'broken windows', 'guatemala', 'admissions'],
	// Determines the player's starting index, displays the first clue, and hides the "Next Clue" button
	initialize: function(){
		this.gpPlayer.setStartIdx();
		showClue(this.clues[this.gpPlayer.getStartIdx()]);
		document.querySelector("#nextdiv button").disabled = true;
	},
	/* Processes the player's guess and determines if it solves the clue. If the clue was solved, a congratulatory message is displayed. 
	 * Otherwise, a message is displayed informing the user that the guess was incorrect.
	 * @param guess is a String
	 */
	makeGuess: function(guess){
		let startidx = this.gpPlayer.getStartIdx();
		let numright = this.gpPlayer.getNumRight();
		if (this.keywords[(startidx + numright) % 4] != guess)
			showMessage("Try again");
		else{
			this.gpPlayer.addNumRight();
			document.querySelector("#nextdiv button").disabled = false;
			document.querySelector("#guessdiv button").disabled = true;
			showMessage("Great Job. Click the button below for the next clue.");
		}
	},
	
	// Displays the next clue. Ensures the last clue is last for every player regardless of starting index.
	showNextClue: function(){
		let startidx = this.gpPlayer.getStartIdx();
		let numright = this.gpPlayer.getNumRight();
		clearInput();
		document.querySelector("#nextdiv button").disabled = true;
		document.querySelector("#guessdiv button").disabled = false;
		if (numright == this.keywords.length){
			showClue(this.clues[this.clues.length - 1]);
			document.querySelector("#guessdiv input").style.display = "none";
			document.querySelector("#guessdiv button").style.display = "none";
			document.getElementById("nextdiv").style.display = "none";
			document.querySelector("#guessdiv p").innerHTML = "There is no keyword for this clue. We will be waiting for you at this location.";
		}
		else
			showClue(this.clues[(startidx + numright) % 4]);
		window.scrollTo(0,0);
		showMessage("");
	}
};

scavengerHunt.initialize();
