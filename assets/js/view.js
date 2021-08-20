/* displays the current clue given by clue
 * @param clue is a String
 */
function showClue (clue){
	document.getElementById("cluepar").innerHTML = clue;
}

/* displays a message given by msg
 * @param msg is a String
 */
function showMessage (msg){
	document.getElementById("messagepar").innerHTML = msg;
}

// clears the player's guess from the input box
function clearInput(){
	document.getElementById("keywordinput").value = "";
}