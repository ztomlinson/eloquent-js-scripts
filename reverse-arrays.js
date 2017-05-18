// Based on code challenge from chapter 4 of Eloquent JavaScript

function reverseArray(array) {
	// Initialize array
	var greetingsArray = [];
	// Iterate backwards
	for (var i = array.length - 1; i >= 0; i--)
		greetingsArray.push(array[i]);
	return greetingsArray;
}

function reverseArrayInPlace(array) {
	// Math.floor bypasses odd lengths
	for (var i = 0; i < Math.floor(array.length / 2); i++) {
		// Temporarily store an element in a local variable
		var oldArray = array[i];
		array[i] = array[array.length - 1 - i];
		// Overwrite value
		array[array.length - 1 - i] = oldArray;
	}

	return array;
}

console.log(reverseArray(["Hi", "Salaam", "Hola", "Marhaba", "Lebes"]));