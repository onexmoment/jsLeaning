"use strict";

const str = 'test';
const arr = [1, 2, 4];

str.length; // Свойство
arr.length;

str.toUpperCase(); // Метод
str.toLowerCase();

const fruit = "Some fruit";

console.log(fruit.indexOf('q')); // -1 Нет в строке Метод поиска подстроки

const logg = "Hello world!";

console.log(logg.slice(6, 11)); // world
logg.slice(6); // world

console.log(logg.substring(6, 11));

console.log(logg.substr(6, 5)); // Сколько символов необходимо вырезать 

const num = 12.2;
console.log(Math.round(num));

const test ="12.2px";
console.log(parseInt(test)) // string to number целое
console.log(parseFloat(test)) // с плавающей точкой