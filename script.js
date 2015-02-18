$(function() {

 $('body').keyup(function(event){
    // var board = { move: function(direction){ console.log(direction)} }
    var board = new Board()
     var keyboardHandler = {
         38: function(){ $('.grid-cell').toggleClass('turn-black')},
         40: function(){board.move('down')},
         37: function(){board.move('left')},
         39: function(){board.move('right')}
     };
     if(keyboardHandler[event.which] !== undefined){
         keyboardHandler[event.keyCode]();
     }
 });
});


// var Board = function() {
//     this.cells = [
//         [0,0,0,0],
//         [0,0,0,0],
//         [0,0,0,0],
//         [0,0,0,0],
//     ]
//     this.move = function(direction){ console.log(direction) }
// }

// function shiftRight(row) {
//   return row.reduce(function) (array, currentElement, currentIndex, originalArray) {
//     if (!originalArray[currentIndex + 1]) {
//       array[currentIndex + 1] = currentElement;
//     }
//     return array;
//   }, [null, null, null, null]);
// }
