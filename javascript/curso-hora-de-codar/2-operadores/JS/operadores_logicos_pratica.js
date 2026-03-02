console.log(true && true);
console.log(true && false);
console.log(false && true);
console.log(false && false);

console.log("-------------------------------------------");
console.log(true || true);
console.log(true || false);
console.log(false || true);
console.log(false || false);

console.log("-------------------------------------------");
console.log(!true);
console.log(!false);

console.log("-------------------------------------------");
console.log(5 > 10 && 5 < 10); // false
console.log(5 < 10 && 10 > 5); // true
console.log(5 > 10 || 5 < 10); // true
console.log(5 > 10 || 10 < 5); // false

console.log("-------------------------------------------");
console.log(5 > 2 && "Gerson" === "Gerson"); // true
console.log(5 > 2 && "Gerson" === "gerson"); // false 
console.log(!false); // true pois inverte a condição para anterior para true

