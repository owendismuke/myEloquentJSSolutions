//Sum of a range
//Write a range function that takes a start and an end then returns an array with all of the numbers from start to end.
//Write a sum function that takes an array and adds the numbers together
//Mod the function to provide an otpional step parameter for incrementing the array.

function range(start,end,step){
  var array = [];
  
  for (var i = start; step && step < 0 ? i >= end : i <= end; i += step || 1){
    array.push(i);
  }
  return array;
};

function sum(numArray){
	var total = 0;
  	numArray.map(function(value){total += value;});
  	return total;
};


//Reversing an Array
//Without using Array.reverse
//Reversing the array in place definitely made me think.
function reverseArray(oldArray){
  var newArray = [];
  for(var i = 0; i < oldArray.length; i++){
    newArray.unshift(oldArray[i]);
  };
  return newArray;
};

function reverseArrayInPlace(array){
  for(var i = 0, val; i < Math.floor(array.length/2); i++){
    val = array[i];
    array[i] = array[array.length - 1 - i];
    array[array.length - 1 - i] = val;
    };
};

console.log(reverseArray(["A", "B", "C"]));
// → ["C", "B", "A"];
var arrayValue = [1, 2, 3, 4, 5];
reverseArrayInPlace(arrayValue);
console.log(arrayValue);
// → [5, 4, 3, 2, 1]
