let guestList = ["usman","ayesha","imran","aiman"];

let dontCome = guestList[0];

console.log(dontCome, "nahi ayega");

guestList.splice(0,1,"shahrukh");

guestList.forEach(guest => console.log(`salam ${guest}, would you like to dinner with me?`));

// new guest invite
console.log("Good News! we have found a bigger table for dinner.");

guestList.unshift("mehmat");

guestList.push("fatima");

let middleIndex:number = (guestList.length / 2);

guestList.splice(middleIndex, 0, "babar");

console.log("updated list of our guests");

guestList.forEach(oneGuest => console.log(`salam ${oneGuest}, would you like to dinner with me?`));