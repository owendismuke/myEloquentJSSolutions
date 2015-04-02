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


