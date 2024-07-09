// Array of Current User
var current_user = ["Asma", "Ali", "Bena", "maria", "saad"];
//Array of New User
var new_user = ["ahmed", "Bilal", "Maria", "Saad", "Fatima"];
// loop through new_user list 
new_user.forEach(function (new_one_user) {
    var our_condition = current_user.some(function (current_one_user) { return current_one_user.toLowerCase() === new_one_user.toLowerCase(); });
    if (our_condition) {
        console.log("sorry ".concat(new_one_user, ",already has been used"));
    }
    else {
        console.log("this username ".concat(new_one_user, ",is available"));
    }
});
