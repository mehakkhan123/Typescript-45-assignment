var pizza = ["chicken tikka", "malai cheese", "fajita"];
// using for-of loop
for (var _i = 0, pizza_1 = pizza; _i < pizza_1.length; _i++) {
    var onePizza = pizza_1[_i];
    console.log("i like ".concat(onePizza, " pizza"));
}
// print a message outside of the for-of loop
console.log("pizza is love");
console.log("i eat pizza");
