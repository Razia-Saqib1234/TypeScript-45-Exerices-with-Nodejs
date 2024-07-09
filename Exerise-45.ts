// Define a function to creat a car object with optional options... 

function creat_car(manufacturer,model,...options){
    // Initializer a car object with manufacturer and model
    let car = {
        manufacturer:manufacturer,
        model:model,
    };

    // Add Additional options to the car object
    options.forEach(options => {
        let[key,value] = options.split(":");
        car[key.trim()] = value.trim();
    });
    return car;
}

// call the function to creat a car object
let my_car = creat_car("Toyota","Corrolla","color:Black","Sunroof:True","Year:2024");

//print the variable toensure all the information is stored  in the car object

console.log(my_car); 