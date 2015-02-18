var arr = [null,256,null,256];

console.log("Original Arr")
console.log(arr);

var new_arr = [];

for(var i=0; i < arr.length; i++) {
  if (arr[i] !== null) {
    new_arr.push(arr[i])
  }
};

console.log("New Arr")
console.log(new_arr)

var previous_value = 0;

var bool_switch = false;

var newer_arr = [];

for(var i=0; i < new_arr.length; i++) {
  newer_arr.push(new_arr[i]);
  // console.log("Outside IF Newer Arr"); console.log(newer_arr);
  // console.log("New Arr[i]"); console.log(new_arr[i]);
  // console.log("Previous Value Outside IF"); console.log(previous_value);
  if (new_arr[i] == previous_value) {
    newer_arr.pop();
    newer_arr.pop();
    newer_arr.push(new_arr[i] * 2);
    // console.log("Previous Value Inisde IF Before Assignment"); console.log(previous_value);
    previous_value = 0;
    bool_switch = true;
    // console.log("Previous Value Inisde IF After Assignment"); console.log(previous_value);
    // console.log("Inside IF Newer Arr");
    // console.log(newer_arr);
  }
  // console.log("Previous value just after IF"); console.log(previous_value)
  // console.log("bool switch after if"); console.log(bool_switch);
  if (bool_switch == false) {
    previous_value = new_arr[i];
  }

  bool_switch = false;

  // console.log("Previous value just after IF 2nd Time"); console.log(previous_value)

};


console.log("Newer Arr")
console.log(newer_arr);
