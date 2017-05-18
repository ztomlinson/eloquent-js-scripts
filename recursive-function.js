// Based on code challenge from chapter 3 of Eloquent JavaScript

function isEven(wholeNum) {
  // Verify if number is even
    if (wholeNum == 0)
      return true;
    else if (wholeNum == 1)
      return false;
    // Verify if number is negative
    else if (wholeNum < 0)
      return isEven(-wholeNum);
    else
      return isEven(wholeNum - 2);
}
console.log(isEven(50));
// → true
console.log(isEven(75));
// → false
console.log(isEven(-1));
// → false