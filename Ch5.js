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

//Historical Life Expectancy
//Compute and output average age of the people in the ancestry data set per century

