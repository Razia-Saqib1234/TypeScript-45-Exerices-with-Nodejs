// define afunction to print each magicians name from an array
function show_magicians(magicians:string[]){
    magicians.forEach(name => console.log(name));

}
//an Array of magicians name
let magicians_names = ["Alice","David","Chris"];
show_magicians(magicians_names);