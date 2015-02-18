//psuedo code
//first make the grid with index and element
//0  1  2  3
//4  5  6  7
//8  9  10 11
//12 13 14 15

//have a number generator that generates the number 2 or the number 4
//have a number placer that places the number on the grid in one of the 16 index

//have a reset function for the new game
//  destroys the board and makes a new board with 2 numbers randomly generated

//have a score function that adds up all the numbers on the board and displays it

//set functions to arrow keys to move the tiles up, down, left, and right.
//if you shift right all the tiles will move as far right as they can go.
  //if there is a different number next to the tile being moved it will not move right
  //if there is the same number the tiles will combine and double

$(document).ready(function() {



function generateNewNumber () {
  var number = Math.random();
  return number < 0.65 ? 2 : 4;
};

function placeNewNumber () {


};


var arr = [16,2,2,2];
var new_arr = [];

for(var i=0; i < arr.length; i++) {
  if (arr[i] !== null) {
    new_arr.push(arr[i])
  }
};

console.log("New Arr")
console.log(new_arr)

var previous_value = null;

var newer_arr = [];

for(var i=0; i < new_arr.length; i++) {
  if (new_arr[i] === previous_value) {
    newer_arr.push(arr[i] * 2);
    previous_value = null;
  };
  previous_value = new_arr[i];
};

console.log("Newer Arr")
console.log(newer_arr);





// var gameBoard = [
//         [0,0,0,0],
//         [0,0,0,0],
//         [0,0,0,0],
//         [0,0,0,0],
//         ];


// for (var i = 0; i < gameBoard.length; i++) {
//   gameBoard[i];
// }

// });


// gameBoard.forEach(function(row) {
//   var $row = $("<div></div>");
//   row.forEach(function(value) {
//     var $tile = $("<div class='tile'>" + "</div>");
//     $tile.addClass('row-' + gameBoard.indexOf(row));
//     $tile.addClass('col-' + row.indexOf(value));
//     $row.append($tile);
//   });
//   $(".board").append($row);
//   console.log($row);
// });
// });



// function () [
//   [null, null, null, null]
//   [null, null, null, null]
//   [null, null, null, null]
//   [null, null, null, null]
// ]


// function shiftRight(row) {
//   return row.reduce(function) (array, currentElement, currentIndex, originalArray) {
//     if (!originalArray[currentIndex + 1]) {
//       array[currentIndex + 1] = currentElement;
//     }
//     return array;
//   }, [null, null, null, null]);
// }



// function() {
//     this.cells = [
//         [0,0,0,0],
//         [0,0,0,0],
//         [0,0,0,0],
//         [0,0,0,0],
//     ]
//     this.move = function(direction){ console.log(direction) }
// }
// $(function() {

//  $('body').keyup(function(event){
//     // var board = { move: function(direction){ console.log(direction)} }
//     var board = new Board()
//      var keyboardHandler = {
//          38: function(){ $('')('up'),
//          40: function(){('down')},
//          37: function(){('left')},
//          39: function(){('right')}
//      };
//      console.log(event.which)
//      console.log(event.keyCode)
//      if(keyboardHandler[event.which] !== undefined){
//          keyboardHandler[event.keyCode]();
//      }
//  });
// });
