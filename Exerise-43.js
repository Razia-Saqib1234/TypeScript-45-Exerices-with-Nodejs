function show_magicians(magicians) {
    magicians.forEach(function (name) { return console.log(name); });
}
//function to make magicians great through .map() it will be modify array 
function make_great(magicians) {
    return magicians.map(function (name) { return "The Great ".concat(name); });
}
// an Array of magicians name
var magicians_names = ["Alice", "David", "Chris"];
// make a copy of original array through .slice() function
var copy_magicians_names = magicians_names.slice();
//modify the copy array include "The Great" with thier names 
var copy_great_magicians = make_great(copy_magicians_names);
//show both arrays original and copied
//original
console.log("Original Array\n");
show_magicians(magicians_names);
//copied
console.log("\nCopied Array");
show_magicians(copy_great_magicians);
