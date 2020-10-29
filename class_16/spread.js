console.time("a");

let a = [1,2,3];
a.push(4);

console.log(a);
console.timeEnd("a");
console.log('..................');


console.time("b");
let b = [1,2,3];
    b = [...b,4];

console.log(b);
console.timeEnd("b");