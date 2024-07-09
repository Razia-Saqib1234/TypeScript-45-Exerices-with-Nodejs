// make a Array
var userName = ["Amna", "Farah", "Admin", "Ftima", "Bisma"];
// ForEach Loop on Array
userName.forEach(function (oneUser) {
    if (oneUser === "Admin") {
        console.log("Hello", (oneUser), "would ypu like to see a status report?");
    }
    else {
        console.log("Hello", (oneUser), "thank you for logging in again");
    }
});
