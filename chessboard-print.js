// Define gride size of board
var gridsize = 8;

var chessboard = "";

// Loop printing until size limit is reached
for (var y = 0; y < gridsize; y++) {
  for (var x = 0; x < gridsize; x++) {
  	// Determines printing pattern
          chessboard += " ";
if ((x + y) % 2 == 0)
    else
      chessboard += "#";
  }
  chessboard += "\n";
}

console.log(chessboard);