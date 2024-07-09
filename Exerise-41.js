// define afunction to print each magicians name from an array
function show_magicians(magicians) {
    magicians.forEach(function (name) { return console.log(name); });
}
//an Array of magicians name
var magicians_names = ["Alice", "David", "Chris"];
show_magicians(magicians_names);
