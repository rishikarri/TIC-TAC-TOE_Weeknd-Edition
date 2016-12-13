
var whosTurn = 1; 
$(document).ready(function(){
	$(".square").click(function(){
		//for each square run this function
		//logic for whether to show an X or a O
		//if the square is x, change it to o and provide the o image
		var thisSquare = $(this);
		if(thisSquare.html() === ""){
			if(whosTurn === 1){
				thisSquare.html("<img src='Images/X-marker.jpeg'>");
				whosTurn = 2;
				
				player1Squares.push((thisSquare.attr("id")));
				console.log(player1Squares);
			}else if (whosTurn === 2){
				thisSquare.html("<img src='Images/O-marker.jpeg'>");
				(console.log("o"));
				whosTurn = 1; 	
				player2Squares.push((thisSquare.attr("id")));
				console.log(player2Squares);
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
		
	

	})
})

//clear styling and text 
function clearSpaceForText(){
	$("#spaceForText").html("&nbsp");
	$("#spaceForText").css({})
}


//check for winning combos using a neste array
// create one array for each player;

var player1Squares = 
var player2Squares = ;
var  winningCombos = [
["A1", "A2", "A3"],
["B1", "B2", "B3"],
["C1", "C2", "C3"],
["A1", "B1", "C1"],
["A2", "B2", "C2"],
[]

]