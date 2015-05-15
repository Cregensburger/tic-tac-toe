//Needed vars
var player = 1;

var xWins = 0;
var oWins = 0;
var tie = 0;

//table cells
var cells = ["cell0", "cell1", "cell2", "cell3",
  "cell4", "cell5", "cell6", "cell7", "cell8"];

//possible win combinations
var possibleWins = [["cell0","cell1","cell2" ], 
  ["cell3","cell4","cell5"], ["cell6","cell7","cell8"],
  ["cell0","cell3","cell6"], ["cell1","cell4","cell7"], 
  ["cell2","cell5","cell8"], ["cell0","cell4","cell8"], 
  ["cell2","cell4","cell6"]];



//something possibly useful
//document.getElementsByClassName('.two.columns.offset-by-one.column')


