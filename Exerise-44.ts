// Define a function with a rest parameter that accept items arugments representing our sandwich

function makeSandwich(...items:string[]){
    console.log("\nMaking a sandwich with the following items: \n");
    items.forEach(singleItem => console.log(singleItem));
    console.log("\nNow Sandwich is ready");
}

// Call the function 3 items with 3 different number of arguments
makeSandwich("Chicken","Chees","Mayo","Egg");
makeSandwich("Bread","Butter");
makeSandwich("Bread","Chees","Egg","Mayo","Butter","Chicken","Tomato","Cucumber");