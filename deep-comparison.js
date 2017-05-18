// Based on code challenge from chapter 4 of Eloquent JavaScript

/* Returns true if: 
same value or are objects with the same properties 
whose values are also equal when compared with 
*/
function deepEqual(a, b) {
  if (a === b) return true;
  
  if (a == null || typeof a != "object" ||
      b == null || typeof b != "object")
    return false;
  
  var propertiesA = 0, propertiesB = 0;

  // Test if objects have same property names and values 
  for (var property in a)
    propertiesA += 1;
  //  Check values for a recursive call to deepEqual.
  for (var property in b) {
    propertiesB += 1;
    if (!(property in a) || !deepEqual(a[prop], b[prop]))
      return false;
  }

  return propertiesA == propertiesB;
}

var obj = {here: {is: "an"}, object: 2};
console.log(deepEqual(obj, obj));
// → true
console.log(deepEqual(obj, {here: 1, object: 2}));
// → false
console.log(deepEqual(obj, {here: {is: "an"}, object: 2}));
// → true