// Make a Function
function make_shirt(size:string="Large",printMessage:string="I Love TypeScript"){
    console.log(`creat a ${size} shirt with the ${printMessage} prints on shirt`);
}

//Call aFunction by default value
make_shirt();

// Call Function with Medium size and default message
make_shirt("Medium");

//Call Function with Small and Different message
make_shirt("Small","I Love JavaScript");