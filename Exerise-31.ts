let userName=["Amna","Farah","Admin","Fatima","Bisma"];

userName=[];

if(userName.length === 0){
    console.log("Array is empty We need to find some users")
}else{

    userName.forEach(oneUser =>{
    if(oneUser === "Admin"){
      console.log(`Hello ${oneUser},would you like to see a status report?`);
    }else{
        console.log(`Hello ${oneUser},thank you for logging in again`);
    }
    })
}