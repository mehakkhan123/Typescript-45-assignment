// creating array
let userNames = ["usman","babar","admin","nimra","amna"];

userNames.forEach(oneUser => {
    if(oneUser === "admin"){
        console.log(`hello ${oneUser}, would you like to see a atatus repport?`);
    }
    else{
        console.log(`hello ${oneUser}, thank you for logging in again`);
    }
}
)