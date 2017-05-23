function lessThan(n) {
  var resultIfEqual = "equal";
  return function(x) { 
  	if (x == n) {
       return resultIfEqual;
    } else {
      return x < n;
    }
}
  
}

var output = lessThan(10);
console.log(output(10));
console.log(output(9));
console.log(output(67));