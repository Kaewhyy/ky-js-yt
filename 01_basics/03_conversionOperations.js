let score = "true"

console.log(typeof score);
console.log(typeof (score));

let valueInNumber = Number(score)
console.log( typeof valueInNumber);
console.log(valueInNumber);

// 33 => 33
// 33abc => NaN
// boolean => true=1 ; false=0;

let isLoggedIn = 1
let booleanIsLogggedIn = Boolean(isLoggedIn);
console.log(booleanIsLogggedIn);

// 1=> true
// 0=> false
// string => true

let someNumber = 33

let stringNumber = String(someNumber) 
console.log(stringNumber);
console.log(typeof stringNumber);
