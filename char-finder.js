function countChar(string, ch) {
  var counted = 0;
  // Initialize loop
  for (var i = 0; i < string.length; i++)
  	// Increase counter if character is found
    if (string.charAt(i) == ch)
      counted += 1;
  return counted;
}

function countOs(string) {
  return countChar(string, "O");
}

// Display results
console.log("Number of selected characters found:");
console.log(countOs("Orlando"));
console.log(countChar("Lyanna", "n"));