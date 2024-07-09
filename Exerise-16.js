var guestList = [
    "Ayesha",
    "Arfa",
    "Manahil",
];
var dontCome = guestList[0];
console.log(dontCome, "could not come");
guestList.splice(0, 1, "Hafsa");
console.log("Glad to Inform that We have Found a Bigger Table For Dinner");
guestList.unshift("Asma");
guestList.push("Fatima");
var middleIndex = Math.floor(guestList.length / 2);
guestList.splice(middleIndex, 0, "Hira");
console.log("Upated List of Names");
guestList.forEach(function (Name) { return console.log("Hello ".concat(Name, ",I invite yuo for an official dinner")); });
