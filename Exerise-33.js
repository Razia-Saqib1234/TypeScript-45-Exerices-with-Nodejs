// Make Array
var number = [1, 2, 3, 4, 5, 6, 7];
//use for.loop
for (var _i = 0, number_1 = number; _i < number_1.length; _i++) {
    var oneNumber = number_1[_i];
    var ordientalEnding = void 0;
    if (oneNumber === 1) {
        ordientalEnding = "st";
    }
    else if (oneNumber === 2) {
        ordientalEnding = "nd";
    }
    else if (oneNumber === 3) {
        ordientalEnding = "rd";
    }
    else {
        ordientalEnding = "th";
    }
    console.log((oneNumber), (ordientalEnding));
}
