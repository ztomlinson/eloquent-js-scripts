var arrays = [[1, 2, 3], [4, 5], [6]];

console.log("The first outcome is " + arrays.reduce(function(flatArray, start) {
  return flatArray.concat(start);
}, []));

// Alternative use of arrow function

var combinedArray = [[6, 1], [9, 5], [47, 8]].reduce(
  ( a, b ) => a.concat(b),
  []
);

console.log("The second array is " + combinedArray);