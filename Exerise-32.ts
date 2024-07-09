// Array of Current User
let current_user=["Asma","Ali","Bena","maria","saad"];

//Array of New User
let new_user=["ahmed","Bilal","Maria","Saad","Fatima"];

// loop through new_user list 

new_user.forEach(new_one_user => {

    let our_condition = current_user.some(current_one_user => current_one_user.toLowerCase () === new_one_user.toLowerCase())
        
 if (our_condition){
    console.log(`sorry ${new_one_user},already has been used`);
 }else{
    console.log(`this username ${new_one_user},is available`);
 }

 })


