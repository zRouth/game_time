Array.prototype.chunk = function(chunkSize) {
    var array=this;
    return [].concat.apply([],
        array.map(function(elem,i) {
            return i%chunkSize ? [] : [array.slice(i,i+chunkSize)];
        })
    );
}

var grid = [
  [null,2,3,4],
  [5,6,7,8],
  [9,10,11,12],
  [13,14,15,16]
];

var grid2 =  [
  [ null, 5, 9, 13 ],
  [ 2, 6, 10, 14 ],
  [ 3, 7, 11, 15 ],
  [ 4, 8, 12, 16 ]
];

var reverseGrid = function(grid) {
  var temp_grid = [];
  var temp_arr = [];

  for(var i=0; i < grid.length; i++) {
    for(var j=0; j < grid[i].length; j++) {
      temp_arr.push(grid[j][i]);
    }
  }

  var hello = temp_arr.chunk(4);
  return hello;
};



console.log(reverseGrid(grid));
console.log(reverseGrid(grid2));

var temp_grid = [];
var temp_arr = [];

for(var i=0; i < grid.length; i++) {
  for(var j=0; j < grid[i].length; j++) {
    temp_arr.push(grid[j][i]);
  }
}

var hello = temp_arr.chunk(4);
// console.log(hello);

var temp_arr1 = [];

for(var i=0; i < hello.length; i++) {
  for(var j=0; j < hello[i].length; j++) {
    temp_arr1.push(hello[j][i]);
  }
}

var hello1 = temp_arr1.chunk(4);

// console.log(hello1)
