
//Triangle
//Use a for loop to log a triangle to console
// #
// ##
// ###
// ####
// #####
// ######
// #######

function ChessBoard(base){
  for(var out = ''; out.length < Number.isInteger(base) ? base : 7;){
    out += '#';
  	console.log(out);
  };
}


//FizzBuzz
//Display fizz for divisible by 3, buzz for divisible by 5, and fizzbuzz for divisible by 3 and 5.
function FizzBuzz(fizzNum, buzzNum, length){
  for(var i = 0; i < (length || 100);){
    var out = '';
    i++;
    
    if (i% (Number.isInteger(fizzNum) ? fizzNum : 3) === 0){
    	 out += 'Fizz';
    };
    
    if (i% (Number.isInteger(buzzNum) ? buzzNum : 5) === 0){
    	out += 'Buzz';
    };
    
    console.log(out || i);
  }
};


//Chess Board
//Use loops to ouput an 8x8 grid

function GridString(size){
  var length = size || 8;
  var output = '';
  for(var i = 0, lastLine = '', lastChar = ''; i < length; i++){
    var line = '';
    for(var j = 0; j < length; j++){
      if(j === 0){
      	char = lastLine.charAt(0) === ' ' ? '#' : ' ';
      }else{
      	char = char === ' ' ? '#' : ' ';
      }
      line += char;
    };
    lastLine = line;
    output += line + "\n";
  };
  
  console.log(output);
}; 


