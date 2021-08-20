// Pulls the player's guess from the input box when the button is clicked and processes the player's guess
document.querySelector("#guessdiv button").addEventListener('click', e => {
	let guess = document.getElementById("keywordinput").value;
	scavengerHunt.makeGuess(guess.toLowerCase().trim());
});

// Pulls the player's guess from the input box when the "Enter" key is pressed and processes the player's guess
document.querySelector('#keywordinput').addEventListener('keypress', e => {
    if (e.key === 'Enter') {
		let guess = document.getElementById("keywordinput").value;
		scavengerHunt.makeGuess(guess.toLowerCase().trim());
    }
});
