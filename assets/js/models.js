// Creates player object
var player = {
	// Starting index, representing the position of the player's first clue
	startidx: 0,
	// Number of clues the player solved
	numright: 0,
	// Returns the player's starting index
	getStartIdx: function(){return this.startidx;},
	// Returns the number of clues the player solved
	getNumRight: function(){return this.numright;},
	// Uses the player's group number to set the player's starting index
	setStartIdx: function(){
		let url = "" + window.location.href;
		let subscript = url.indexOf("groupnum=");
		let groupnum = url.substring(subscript + 9, subscript + 10);
		this.startidx = groupnum - 1;
	},
	// Sets the number of clues the player solved to the value represented by val
	setNumRight: function(val){this.numright = val;},
	// Increments the number of clues the player solved by 1
	addNumRight: function(){this.numright ++;}
};