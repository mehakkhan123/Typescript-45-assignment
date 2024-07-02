var guestList = ["usman", "ayesha", "imran", "aiman"];
var dontCome = guestList[0];
console.log(dontCome, "nahi ayega");
guestList.splice(0, 1, "shahrukh");
guestList.forEach(function (guest) { return console.log("salam ".concat(guest, ", would you like to dinner with me?")); });
