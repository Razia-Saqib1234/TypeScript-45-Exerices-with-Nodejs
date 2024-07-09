// Make Array
let number =[1,2,3,4,5,6,7];

//use for.loop
for(let oneNumber of number){
     let ordientalEnding:string;
     if(oneNumber === 1){
        ordientalEnding  = "st"
     }
     else if(oneNumber === 2){
        ordientalEnding ="nd"
     }
     else if(oneNumber === 3){
        ordientalEnding ="rd"
     }
     else{
        ordientalEnding = "th"
     }  
     console.log((oneNumber),(ordientalEnding));
}