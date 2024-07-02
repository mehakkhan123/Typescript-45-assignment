let guestList = ["usman","ayesha","imran","aiman"];

let dontCome = guestList[0];

console.log(dontCome, "nahi ayega");

guestList.splice(0,1,"shahrukh");

guestList.forEach(guest => console.log(`salam ${guest}, would you like to dinner with me?`));
