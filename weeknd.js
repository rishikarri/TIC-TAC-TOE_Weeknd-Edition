
var whosTurn = 1; 
$(document).ready(function(){
	$(".square").click(function(){
		//for each square run this function
		//logic for whether to show an X or a O
		//if the square is x, change it to o and provide the o image
		var thisSquare = $(this);
		if(someoneWon){
			$("#spaceForText").html("Give it up brew, you already lost");
				$("#spaceForText").css({
					"color": "firebrick"
				})
			}else{
		

				if(thisSquare.html() === ""){
					if(whosTurn === 1){
						thisSquare.html("<img src='Images/X-marker.jpeg'>");
						whosTurn = 2;				
						player1Squares.push((thisSquare.attr("id")));
						checkWin(player1Squares, 1);

					}else if (whosTurn === 2){
						thisSquare.html("<img src='Images/O-marker.jpeg'>");				
						whosTurn = 1; 	
						player2Squares.push((thisSquare.attr("id")));					
						checkWin(player2Squares, 2);
					}	
				}else{
						$("#spaceForText").html("Stop cheating, someone is already there")
						$("#spaceForText").show()
						$("#spaceForText").css({
							"color": "firebrick",
							"font-size": "24px"
					})						
					//clears the space after 2 seconds
						setTimeout(clearSpaceForText, 1500);
					}
				
				}	

			})
})

//clear styling and text 
function clearSpaceForText(){
	$("#spaceForText").html("&nbsp");
	$("#spaceForText").css({})
}


//check for winning combos using a neste array
// create one array for each player;

var player1Squares = [];
var player2Squares = [];
//an array that holds winning combos;
var  winningCombos = [
["A1", "A2", "A3"],
["B1", "B2", "B3"],
["C1", "C2", "C3"],
["A1", "B1", "C1"],
["A2", "B2", "C2"],
["A3", "B3", "C3"],
["A1", "B2", "C3"],
["A3", "B2", "C1"]
]


var rowHit = 0; 
someoneWon = false;

function checkWin(playerSquares, playerTurn){
	//outer loop goes through each set of 3 of the winning combos
	for(let i = 0; i < winningCombos.length; i++){
		//inner loop goes through each element of each set of 3 
		// console.log(i);
		for (let j = 0; j < winningCombos[i].length; j++){
			// console.log(winningCombos[i][j]);
			//now check to see if any of the winning combos exist within the array passed to it
			if ((playerSquares.indexOf(winningCombos[i][j]) === -1)){
				// console.log("oh me oh my - not a hit")
			}else{
				rowHit++;
				// console.log(rowHit);
				if(rowHit === 3){
					someoneWon = true;
					$("#spaceForText").html("Player " + playerTurn + " wins!");	
					$("#spaceForText").css({
						"color": "green"
					})
				}
				
			}


		}
		rowHit = 0;

	}
}


//RK Start here
// function checkWin(player, playerSquares){

// 	//outer loop
// 	var rowHit = 0; 
// 	for (let i = 0; i < winningCombos.length; i++){	
// 		//inner loop
// 		for (let j = 0; j < winningCombos[i].length j++){
// 			if()
// 		}
// 	}
// }