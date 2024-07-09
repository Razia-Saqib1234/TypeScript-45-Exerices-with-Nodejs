// Make a Function
function make_shirt(size, printMessage) {
    if (size === void 0) { size = "Large"; }
    if (printMessage === void 0) { printMessage = "I Love TypeScript"; }
    console.log("creat a ".concat(size, " shirt with the ").concat(printMessage, " prints on shirt"));
}
//Call aFunction by default value
make_shirt();
// Call Function with Medium size and default message
make_shirt("Medium");
//Call Function with Small and Different message
make_shirt("Small", "I Love JavaScript");
