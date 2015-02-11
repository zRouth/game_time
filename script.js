$(function() {

 $('body').keyup(function(event){
    // var board = { move: function(direction){ console.log(direction)} }
    var board = new Board()
     var keyboardHandler = {
         38: function(){board.move('up')},
         40: function(){board.move('down')},
         37: function(){board.move('left')},
         39: function(){board.move('right')}
     };
     console.log(event.which)
     console.log(event.keyCode)
     if(keyboardHandler[event.which] !== undefined){
         keyboardHandler[event.keyCode]();
     }
 });
});


var Board = function() {
    this.cells = [
        [0,0,0,0],
        [0,0,0,0],
        [0,0,0,0],
        [0,0,0,0],
    ]
    this.move = function(direction){ console.log(direction) }
}