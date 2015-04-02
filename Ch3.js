//Minimum
//Write a function that returns the lesser of two numbers

function min(num1, num2){
  return num1 < num2 ? num1 : num2;
};


//Recursion
//Define an isEven function to check if number is even using recursion.

//My first version of this just returned the result of num%2 === 0 (which worked great). 
//Since that isn't using recursion, Here is my recursive version.
function isEven(num){
  //Note: Convert negative nums to pos to prevent the following error:
  // RangeError: Maximum call stack size exceeded
  var remainder = (num >= 0 ? num : (num * -1)) %2;
  if(remainder === 0){
    return true;
  } else if (remainder === 1) {
  	return false;
  } else {
    return isEven(remainder-2);
  }
};


//Bean Counting
//Write function to count number of uppercase "B" in a string.
//Write function to count number of a specified variable in a string.
//Rewrite first function to use second function

function countBs(str){
  return countChar(str, "B");
};

function countChar(str,char){
  var count = 0;
    for (var i = 0; i < str.length; i++){
      if(str.charAt(i) === char){
          count++;
      }
    }
    return count;
};

