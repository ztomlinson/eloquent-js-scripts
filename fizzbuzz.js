// Write a program that uses console.log to print all the numbers from 1 to 100
for (var num = 1; num <= 100; num++) {
// numbers divisible by 3, print "Fizz" instead of the number
  var output = "";
  if (num % 3 == 0)
    output += "Fizz";
// for numbers divisible by 5 (and not 3), print "Buzz" instead.
  if (num % 5 == 0)
    num += "Buzz";
// modify your program to print "FizzBuzz", for numbers that are divisible by both 3 and 5 
// still print "Fizz" or "Buzz" for numbers divisible by only one of those).
  console.log(output || num);
}



