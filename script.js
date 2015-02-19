Array.prototype.chunk = function(chunkSize) {
  var array=this;
  return [].concat.apply([],
    array.map(function(elem,i) {
      return i%chunkSize ? [] : [array.slice(i,i+chunkSize)];
    })
  );
}

var reverseGrid = function(grid) {
  var temp_grid = [];
  var temp_arr = [];

  for(var i=0; i < grid.length; i++) {
    for(var j=0; j < grid[i].length; j++) {
      temp_arr.push(grid[j][i]);
    }
  }

  var reversed = temp_arr.chunk(4);
  return reversed;
};

var singleArray = function(arr) {
  var new_arr = [];

  for(var i=0; i < arr.length; i++) {
    if (arr[i] !== null) {
        new_arr.push(arr[i])
      }
    }

  var previous_value = 0;
  var bool_switch = false;
  var newer_arr = [];

  for(var i=0; i < new_arr.length; i++) {
    newer_arr.push(new_arr[i]);

    if (new_arr[i] == previous_value) {
      newer_arr.pop();
      newer_arr.pop();
      newer_arr.push(new_arr[i] * 2);
      previous_value = 0;
      bool_switch = true;
    }

    if (bool_switch == false) {
      previous_value = new_arr[i];
    }
    bool_switch = false;
  }

  return newer_arr;
};


var parseGrid = function(grid, direction) {
  var new_grid = [];
  var temp = [];
  var temp_grid = [];

  if (direction === "left") {
    for (var i=0; i < grid.length; i++) {
      temp = singleArray(grid[i]);
      while (temp.length < 4) {
        temp.push(null);
      }
      new_grid.push(temp);
    }
  } else if (direction === "right") {
    for (var i=0; i < grid.length; i++) {
      temp = singleArray(grid[i]).reverse();
      while (temp.length < 4) {
        temp.unshift(null);
      }
      new_grid.push(temp);
    }
  } else if (direction === "up") {
    var temp_grid = reverseGrid(grid);
    for (var i=0; i < temp_grid.length; i++) {
      temp = singleArray(temp_grid[i]);
      while (temp.length < 4) {
        temp.push(null);
      }
      new_grid.push(temp);
    }
    new_grid = reverseGrid(new_grid);
  } else if (direction === "down") {
    var temp_grid = reverseGrid(grid);
    for (var i=0; i < temp_grid.length; i++) {
      temp = singleArray(temp_grid[i].reverse()).reverse();
      while (temp.length < 4) {
        temp.unshift(null);
      }
      new_grid.push(temp);
    }
    new_grid = reverseGrid(new_grid);
  }
    return new_grid;
};


var gameGrid = [
  [4096,16,16,null],
  [2048,16,256,8],
  [4,512,4,null],
  [4,512,null,16]
];

console.log(parseGrid(gameGrid, "down"));


$(document).ready(function() {

var gameGrid = [
  [8,16,16,8],
  [4,4,4,null],
  [8,8,8,null],
  [16,null,16,null]
];

// function renderBoard(board) {
//   var $board = $('<div class="board"></div>');

//   board.forEach(function (row) {
//     var $row = $board.append('<div class="row"></div>');
//     row.forEach(function (cell) {
//       $row.append('<div class="cell">' + cell + '</div>');
//     });
//   });

//   return $board;
// }

// var myNewBoard = renderBoard(gameGrid);

function Game() {
  this.board = [
      [8,16,16,8],
      [4,4,4,null],
      [8,8,8,null],
      [16,null,16,null]
  ];
}

Game.prototype.render = function () {
  var $board = $('<div class="board"></div>');

  this.board.forEach(function (row) {
    var $row = $board.append('<div class="row"></div>');
    row.forEach(function (cell) {
      $row.append('<div class="cell">' + cell + '</div>');
    });
  });

  return $board;
};

var game = new Game();
var game2 = new Game();



$('body').append(game.render());


  Mousetrap.bind("up",    function() { parseGrid(); console.log('whatever') });
  Mousetrap.bind("down",  function() { parseGrid(); });
  Mousetrap.bind("left",  function() { parseGrid(); });
  Mousetrap.bind("right", function() { parseGrid(); });

});
