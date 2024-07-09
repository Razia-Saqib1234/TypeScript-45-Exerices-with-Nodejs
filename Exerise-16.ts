let guestList=[
    "Ayesha",
     "Arfa",
     "Manahil",
];
let dontCome=guestList[0];

console.log(dontCome,"could not come");

guestList.splice(0,1,"Hafsa");

console.log("Glad to Inform that We have Found a Bigger Table For Dinner");

guestList.unshift("Asma");

guestList.push("Fatima");

let middleIndex:number= Math.floor(guestList.length/2);

guestList.splice(middleIndex,0,"Hira"); 

console.log("Upated List of Names");

guestList.forEach(Name =>console.log(`Hello ${Name},I invite yuo for an official dinner`));


