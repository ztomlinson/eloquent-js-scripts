// Based on code challenge from chapter 3 of Eloquent JavaScript

// Return the minimum of two arguments
function returnMinimum(arg1, arg2) {
  if (arg1 < arg2)
    return arg1;
  else   
    return arg2;
}

console.log(returnMinimum(4, 16));

console.log(returnMinimum(0, -10));
