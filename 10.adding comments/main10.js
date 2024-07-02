var myName = "umair khan";
//lowerCase
console.log(myName.toLowerCase());
//upperCase
console.log(myName.toUpperCase());
//titleCase
console.log(myName.replace(/\b\w/g, function (char) { return char.toUpperCase(); }));
