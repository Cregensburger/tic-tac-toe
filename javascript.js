//Needed vars
var player = 1;

var xWins = 0;
var oWins = 0;
var tie = 0;

//table cells
var cells = ["square0", "square1", "square2", "square3",
  "square4", "square5", "square6", "square7", "square8"];

//possible win combinations
var possibleWins = [["square0","square1","square2" ], 
  ["square3","square4","square5"], ["square6","square7","square8"],
  ["square0","square3","square6"], ["square","square4","square7"], 
  ["square2","square5","square8"], ["square0","square4","square8"], 
  ["square2","square4","square6"]];


//reset the board
/*function clearStats(one.column clearBtn){
  xWon = 0;
  oWon = 0;
  catsGame = 0;
  drawStats();
}*/

/*function clickBtn(btn){
  if (player == 1){
    document.getElementByClassName('btn').value = 'X';
    player -= 1;
  } else {
    document.getElementByClassName('btn').value = 'O';
    player += 1;
  }
};*/



//something possibly useful
//document.getElementsByClassName('.two.columns.offset-by-one.column')
