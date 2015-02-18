$(function() {

 $('body').keyup(function(event){
    var board = new Board()
     var keyboardInput = {
         38: function(){ $('.grid-cell').toggleClass('turn-black')},
         40: function(){board.move('down')},
         37: function(){board.move('left')},
         39: function(){board.move('right')}
     };
     if(keyboardInput[event.which] !== undefined){
         keyboardInput[event.keyCode]();
     }
 });
});
