let countriesToVisit:string[] = ["china","denmark","brazil","argentina"];

console.log("original order", countriesToVisit);

// print the array in alphabetical order without modifying the original array list
console.log("alphabetical order:", [...countriesToVisit].sort());

// show that array is still in its original order
console.log("still in original order:", countriesToVisit);

// print the array in reverse order without modifying the original array list
console.log("reverse order", [...countriesToVisit].reverse());

// show that array is still in its original order
console.log("still in original order:", countriesToVisit);

// we have changed the original array order now
console.log("original array reverse", countriesToVisit.reverse());

// print the array to show that its back to its original order
console.log("back to original order", countriesToVisit.reverse());

// print the array to show that its order has been changed in alphabetical order
console.log("sorted in alphabetical order:", countriesToVisit.sort());

// we have changed the original array order now
console.log("original array reverse", countriesToVisit.reverse());