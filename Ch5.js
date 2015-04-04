//Flattening
//Note: I rewrote a solution in Chapter 4 based on this solution.

var arrays = [[1, 2, 3], [4, 5], [6]];

console.log(
  arrays.reduce(function(prev, cur){
  return prev.concat(cur);
  }));
//I have to admit that I wasn't grasping the idea behind reduce. 
//It's still a bit of a struggle, but will get easier with use.

// → [1, 2, 3, 4, 5, 6]

