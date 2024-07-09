let guestList=[
    "Ayesha",
    "Arfa",
    "Manahil",
];

let dontCome=guestList[0];                                                                      

console.log(dontCome,"could not come");

guestList.splice(0,1,"Hafsa");

guestList.forEach(Name  => console.log(`Hello ${Name},I invite you for an official`));