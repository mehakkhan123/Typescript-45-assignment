var guestList = ["usman", "ayesha", "imran", "aiman"];
var dontCome = guestList[0];
console.log(dontCome, "nahi ayega");
guestList.splice(0, 1, "shahrukh");
guestList.forEach(function (guest) { return console.log("salam ".concat(guest, ", would you like to dinner with me?")); });
// new guest invite
console.log("Good News! we have found a bigger table for dinner.");
guestList.unshift("mehmat");
guestList.push("fatima");
var middleIndex = (guestList.length / 2);
guestList.splice(middleIndex, 0, "babar");
console.log("updated list of our guests");
guestList.forEach(function (oneGuest) { return console.log("salam ".concat(oneGuest, ", would you like to dinner with me?")); });
// shrinking guest list
console.log("unfortunately, the new dinner table wont arrive on time, so i can only invite two guests to dinner with me");
// removed all guest without two guests
while (guestList.length > 2) {
    var removedGuest = guestList.pop();
    console.log("sorry, ".concat(removedGuest, " i cant invite you to dinner"));
}
;
// last two uests invited
console.log("invitations to the last 2 guests");
guestList.forEach(function (lastTwo) { return console.log("luckly ".concat(lastTwo, ", you are still invited to dinner")); });
// last two guests also removed
guestList.pop();
guestList.pop();
console.log("empty list:", guestList);
