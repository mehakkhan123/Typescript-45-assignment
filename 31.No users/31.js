// version1
var userNames = ["Usman", "Babar", "Admin", "Nimra", "Amna"];
if (userNames.length === 0) {
    console.log("your Array is emptty we need to find some users!");
}
else {
    userNames.forEach(function (oneUser) {
        if (oneUser === "admin") {
            console.log("hello ".concat(oneUser, ", would you like to see a atatus repport?"));
        }
        else {
            console.log("hello ".concat(oneUser, ", thank you for logging in again"));
        }
    });
}
// version2
var userNames2 = [];
if (userNames2.length === 0) {
    console.log("your Array is emptty we need to find some users!");
}
else {
    userNames2.forEach(function (oneUser2) {
        if (oneUser2 === "admin") {
            console.log("hello ".concat(oneUser2, ", would you like to see a atatus repport?"));
        }
        else {
            console.log("hello ".concat(oneUser2, ", thank you for logging in again"));
        }
    });
}
