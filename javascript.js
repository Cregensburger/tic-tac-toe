//All clickable points on the board
var square0;
var square1;
var square2;
var square3;
var square4;
var square5;
var square6;
var square7;
var square8;

//If player X turn, get their input
function getPlayerXMove(move) {
      if (move === null) {
        move = getInput();
    }
    return move;
}

//If player O turn, get their input
function getPlayerOMove(move) {
      if (move === null) {
        move = getInput();
    }
    return move;
}

//All possible wins for X, if no win, check to see if O did, if not, function tie
function findPlayerXWinner()
{
  if(square0 == " X " && square1 == " X " && square2 == " X ")
  {
    alert("Player X Wins!");
    reset();
  } else if(square3 == " X " && square4 == " X " && square5 == " X ") {
    alert("Player X Wins!");
    reset();
  } else if(square6 == " X " && square7 == " X " && square8 == " X ") {
    alert("Player X Wins!");
    reset();
  } else if(square0 == " X " && square4 == " X " && square8 == " X ") {
    alert("Player X Wins!");
    reset();
  } else if(square6 == " X " && square4 == " X " && square2 == " X ") {
    alert("Player X Wins!");
    reset();
  } else if(square0 == " X " && square3 == " X " && square6 == " X ") {
    alert("Player X Wins!");
    reset();
  } else if(square1 == " X " && square4 == " X " && square7 == " X ") {
    alert("Player X Wins!");
    reset();
  } else if(square2 == " X " && square5 == " X " && square8 == " X ") {
    alert("Player X Wins!");
    reset();
  } else {
    findPlayerOWinner();
    tieCheck();
  }
}

//All possible wins for O, if no win, check to see if X did, if not, function tie
function findPlayerOWinner()
{
  if(square0 == " O " && square1 == " O " && square2 == " O ")
  {
    alert("Player O Wins!");
    reset();
  } else if(square3 == " O " && square4 == " O " && square5 == " O ") {
    alert("Player O Wins!");
    reset();
  } else if(square6 == " O " && square7 == " O " && square8 == " O ") {
    alert("Player O Wins!");
    reset();
  } else if(square0 == " O " && square4 == " O " && square8 == " O ") {
    alert("Player O Wins!");
    reset();
  } else if(square6 == " O " && square4 == " O " && square2 == " O ") {
    alert("Player O Wins!");
    reset();
  } else if(square0 == " O " && square3 == " O " && square6 == " O ") {
    alert("Player O Wins!");
    reset();
  } else if(square1 == " O " && square4 == " O " && square7 == " O ") {
    alert("Player O Wins!");
    reset();
  } else if(square2 == " O " && square5 == " O " && square8 == " O ") {
    alert("Player O Wins!");
    reset();
  } else {
    findPlayerXWinner();
    tieCheck(); 
  }
}

//play three rounds, keeping track of who wins
function playToThree() {
    var playerXWins = 0;
    var playerOWins = 0;
    var playerTie = 0;
     if (winner == "Player X") {
    playerXWins +=1;
    } else if (winner== "Player O") {
        playerOWins +=1;
    } else if (winner=="Tie"){
      tieWin +=1;
    }
  console.log('Player X is at  ' + playerXWins + ' wins. Player O is at ' + playerOWins + 'wins. Total ties are ' + tieWins);
    return [playerXWins, playerOWins, tieWins];
}