function show_magicians(magicians:string[]){
    magicians.forEach(name => console.log(name));
}

//function to make magicians great through .map() it will be modify array 
function make_great(magicians:string[]){
   return magicians.map(name => `The Great ${name}`);
 
}

// an Array of magicians name
let magicians_names =["Alice","David","Chris"];

// make a copy of original array through .slice() function

let copy_magicians_names = magicians_names.slice()

//modify the copy array include "The Great" with thier names 

let copy_great_magicians = make_great(copy_magicians_names);

//show both arrays original and copied

//original
console.log("Original Array\n");
show_magicians(magicians_names);

//copied
console.log("\nCopied Array");
show_magicians(copy_great_magicians);
