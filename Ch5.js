//Flattening
//Flatten an array of arrays using reduce and concat.

var arrays = [[1, 2, 3], [4, 5], [6]];

console.log(
  arrays.reduce(function(prev, cur){
  return prev.concat(cur);
  }));
//I have to admit that I wasn't grasping the idea behind reduce. 
//It's still a bit of a struggle, but will get easier with use.

// → [1, 2, 3, 4, 5, 6]

//Mother-Child Age Difference
//Using sample data in chapter computer average age difference between mothers and children.

//Function given by author
function average(array) {
  function plus(a, b) { return a + b; }
  return array.reduce(plus) / array.length;
}
//Function given by author
var byName = {};
ancestry.forEach(function(person) {
  byName[person.name] = person;
});

//My solution starts below.
function mother(p){
  return byName[p.mother] != null;
};

function mothersAge(p){
  return p.born - byName[p.mother].born;
};

console.log(Math.round(average(ancestry.filter(mother).map(mothersAge)) * 10)/10);

//Historical Life Expectancy -- Incomplete. I wanted to save my work.
//Compute and output average age of the people in the ancestry data set per century
function average(array) {
  function plus(a, b) { return a + b; }
  return array.reduce(plus) / array.length;
}

function group(person){
  return Math.ceil(person.died/100);
}

//Bonus group by function
function groupBy(array, fn){
  var result = {};
  for (var i = 0, localArray = array, ii = localArray.length; i < ii; i++){
  	var group = fn(localArray[i]);
    
    if (result.hasOwnProperty(group)){
      result[group].push(localArray[i]);
    } else {
      result[group] = [localArray[i]];
    }
  }
  
  return result;
}

//TODO finish the logic that actually works the averaging.
console.log(groupBy(ancestry, group));

// → 16: 43.5
//   17: 51.2
//   18: 52.8
//   19: 54.8
//   20: 84.7
//   21: 94
