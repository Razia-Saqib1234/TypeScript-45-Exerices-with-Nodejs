//make a array of places and print its original order
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var placesTOVisit = ["Saudia e Arab", "China", "Russia", "Germine", "Japan"];
console.log("Original Order", placesTOVisit);
//print array in alphabeticalorder without modifying  actual arry list
console.log("Alphabetical Order", __spreadArray([], placesTOVisit, true).sort());
console.log("Original Order", placesTOVisit);
console.log("Reverse Alphabetical Order", __spreadArray([], placesTOVisit, true).reverse());
console.log("Original Order", placesTOVisit);
console.log("Original Order Reverse", placesTOVisit.reverse());
console.log("Back to Original Order", placesTOVisit.reverse());
console.log("Sort in Alphabetical Order", placesTOVisit.sort());
console.log("Original Order Reverse again", placesTOVisit.reverse());
