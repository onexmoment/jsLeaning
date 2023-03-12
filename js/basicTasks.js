'use strict';

// let x = 5; console.log( x++ ); // 5 Постфиксная форма возвращает сначала исходное значение // (++x) 6 Префиксная

// [] + false - null + true; // NaN
// console.log([] + false); // [] - пустая строка // 'false'
// console.log([] + false - null); // NaN

let y = 1;
let x = y = 2; // Cправа налево
console.log(x);

console.log([ ] + 1 + 2); // '12'

console.log('1'[0]); // 1

console.log(2 && 1 && null && 0 && undefined); // null && Запинается на лжи

console.log(!!( 1 && 2 )); // !! дают boolean true
console.log((1 && 2)); // 2

console.log(null || 2 && 3 || 4); // 3 || Запинается на да 

const a = [1, 2, 3];
const b = [1, 2, 3]; // a != b

console.log( +"Infinity" ); // Infinity (type number) унарный плюс

console.log("Ёжик" > "яблоко"); // false Uniicode А а Б б В в ...

console.log(0 || "" || 2 || undefined || true || falsе); // 2