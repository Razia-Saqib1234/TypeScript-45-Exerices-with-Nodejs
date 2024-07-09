 //make a array of places and print its original order

 let placesTOVisit=["Saudia e Arab","China","Russia","Germine","Japan"];
console.log("Original Order",placesTOVisit);
//print array in alphabeticalorder without modifying  actual arry list
console.log("Alphabetical Order",[...placesTOVisit].sort());  

console.log("Original Order",placesTOVisit);

console.log("Reverse Alphabetical Order",[...placesTOVisit].reverse()); 

console.log("Original Order",placesTOVisit);

console.log("Original Order Reverse",placesTOVisit.reverse());

console.log("Back to Original Order",placesTOVisit.reverse());

console.log("Sort in Alphabetical Order",placesTOVisit.sort());

console.log("Original Order Reverse again",placesTOVisit.reverse());


