// Question 1: Reverse a string

// Write a function, "reverseString", which takes a string and returns the reverse.
function reverseString (input){
var output = input.split("").reverse().join("");
return output;
}



// Testing functions. These will let you know if your function works!
function test(val1, val2) {
  if (val1 === val2) {
    console.log("pass");
  }
  else {
    console.log("fail");
  }
}
test(reverseString("cat"), "tac");
test(reverseString("timmy"), "ymmit");
test(reverseString("bears and bees"), "seeb dna sreab");
test(reverseString("super-speed"), "deeps-repus");
