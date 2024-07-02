// creating array
var userNames = ["usman", "babar", "admin", "nimra", "amna"];
userNames.forEach(function (oneUser) {
    if (oneUser === "admin") {
        console.log("hello ".concat(oneUser, ", would you like to see a atatus repport?"));
    }
    else {
        console.log("hello ".concat(oneUser, ", thank you for logging in again"));
    }
});
