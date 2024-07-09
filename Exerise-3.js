//Q 3
var myName = "Razia Saqib";
console.log(myName.toLowerCase()); //Razia
console.log(myName.toUpperCase());
console.log(myName.replace(/\bw/g, function (c) { return c.toUpperCase(); }));
