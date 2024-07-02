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
