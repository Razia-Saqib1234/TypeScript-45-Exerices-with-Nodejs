function show_magicians(magicians:string[]){
    magicians.forEach(name => console.log(name));
}

//function to make magicians great through .map() it will be modify array 
function make_great(magicians:string[]){
   return magicians.map(name => `The Great ${name}`);
 
}

// an Array of magicians name
let magicians_names =["Alice","David","Chris"];

// call make_great function to modify magicians names
let great_magicians = make_great(magicians_names);

// call show magicians that show modified magicians list
show_magicians(great_magicians);

