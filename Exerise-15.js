var guestList = [
    "Ayesha",
    "Arfa",
    "Manahil",
];
var dontCome = guestList[0];
console.log(dontCome, "could not come");
guestList.splice(0, 1, "Hafsa");
guestList.forEach(function (Name) { return console.log("Hello ".concat(Name, ",I invite you for an official")); });
