let current_users = ["usman","babar","umair","Nimra","Ayesha"];
let new_users = ["umair","hamza","sana","Nimra","bilal"];

// loop through new_users to check for user_names available
new_users.forEach(new_one_user => {
    let our_condition = current_users.some(current_one_user => current_one_user.toLowerCase() === new_one_user.toLowerCase())
    
    if(our_condition){
        console.log(`sorry ${new_one_user} is already taken!`)
    }
    else{
        console.log(`this username ${new_one_user} is available`)
    }
})
