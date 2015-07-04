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


//A List
//Write function arrayToList to return an object listing the items in an array.
//Write function listToArray that builds an array from the list written in arrayToList.
//Write helper function prepend that takes an element and a list to create a new list 
//that adds the element to the front of the input list.
//Write nth that takes a list and a number and returns the element at that position or undefined
//Make nth recursive.

function arrayToList(array){
  var newArray = array;
  return {
    value: newArray.shift(),
    rest: newArray.length > 0 ? arrayToList(newArray) : null
  };
};

function listToArray(list){
  var newArray = [];
  
  newArray.push(list.value);
  
  if(list.rest != null){
    newArray.push(listToArray(list.rest)[0]);
  }
  
  return newArray;
};

function prepend(element, list){
  return {value: element, rest:list};
};

//The quick way
function nth(list, num){
  return listToArray(list)[num];
};

//The recursive way since they asked for it.
function nthRecursive(list, index){
  var count = list.count || 0;
  if (count === index) {
    return list.value; 
  } else if (!list.rest) {
    return undefined;
  } else {
    list.rest.count = count + 1;
    return nthRecursive(list.rest, index);
  }
  
};


console.log(arrayToList([10, 20]));
// → {value: 10, rest: {value: 20, rest: null}}
console.log(listToArray(arrayToList([10, 20, 30])));
// → [10, 20, 30]
console.log(prepend(10, prepend(20, null)));
// → {value: 10, rest: {value: 20, rest: null}}
console.log(nth(arrayToList([10, 20, 30]), 1));
// → 20
console.log(nthRecursive(arrayToList([10, 20, 30]), 1));
// → 20


//Deep Comparison
//Make function deepEqual that comapres two things. 
//If the things are objects, compare all of the properties using recursion.

function deepEqual(thing1, thing2){
  //Crazy mested ternary version using reduce and recursion that ws introduced to me in Hack Reactor
  return thing1 === thing2
        ? true : typeof thing1 !== "object" || typeof thing2 !== "object"
            ? false : !!Object.keys(thing1).reduce(function(prev,curr){
                    if (prev) { return deepEqual(thing1[curr], thing2[curr]); }
                }, true);
                
  //Original version
  /*
  if (thing1 === thing2){
    return true;
  }
  
  if((thing1 && typeof thing1 === "object") &&
     (thing2 && typeof thing2 === "object")){
     //Check thing1
    for (var key in thing1){
      if(thing1.hasOwnProperty(key)){
        if (!deepEqual(thing1[key], thing2[key])){
            return false;
        }
      }
    }
    //Check thing2 in case there are properties not present in thing1
    //I feel that there should be a way to pull this out and make it DRY, but it's not coming to me now.
    for (var key in thing2){
      if(thing2.hasOwnProperty(key)){
        if (!deepEqual(thing2[key], thing1[key])){
            return false;
        }
      }
    }
    return true;
  } 
  
  return false;*/
};

var obj = {here: {is: "an"}, object: 2};

console.log(deepEqual(obj, obj));
// → true
console.log(deepEqual(obj, {here: 1, object: 2}));
// → false
console.log(deepEqual(obj, {here: {is: "an"}, object: 2}));
// → true
