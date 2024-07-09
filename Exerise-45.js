// Define a function to creat a car object with optional options... 
function creat_car(manufacturer, model) {
    var options = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        options[_i - 2] = arguments[_i];
    }
    // Initializer a car object with manufacturer and model
    var car = {
        manufacturer: manufacturer,
        model: model,
    };
    // Add Additional options to the car object
    options.forEach(function (options) {
        var _a = options.split(":"), key = _a[0], value = _a[1];
        car[key.trim()] = value.trim();
    });
    return car;
}
// call the function to creat a car object
var my_car = creat_car("Toyota", "Corrolla", "color:Black", "Sunroof:True", "Year:2024");
//print the variable toensure all the information is stored  in the car object
console.log(my_car);
