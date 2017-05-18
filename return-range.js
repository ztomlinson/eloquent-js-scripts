// Based on code challenge from chapter 4 of Eloquent JavaScript

function findRange(start, end, step) {

	// Increment by default in the absence of step value
	if (step == null) step = 1;
	// Create array
  	var array = [];

  	if (step > 0) {
  	// Set inclusive boundaries
    for (var i = start; i <= end; i += step)
      array.push(i);
  	} else {
    for (var i = start; i >= end; i += step)
      array.push(i);
  }

  return array;

}

function findSum(array) {
	var sum = 0;
	for (var i = 0; i < array.length; i++)
		sum += array[i];
	return sum;
 
}

console.log(findRange(1, 10));
// → [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
console.log(findRange(5, 2, -1));
// → [5, 4, 3, 2]
console.log(findSum(findRange(1, 10)));
// → 55
