var current_users = ["usman", "babar", "umair", "Nimra", "Ayesha"];
var new_users = ["umair", "hamza", "sana", "Nimra", "bilal"];
// loop through new_users to check for user_names available
new_users.forEach(function (new_one_user) {
    var our_condition = current_users.some(function (current_one_user) { return current_one_user.toLowerCase() === new_one_user.toLowerCase(); });
    if (our_condition) {
        console.log("sorry ".concat(new_one_user, " is already taken!"));
    }
    else {
        console.log("this username ".concat(new_one_user, " is available"));
    }
});
