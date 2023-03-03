//Lesson 1//

"use strict";

// let number = 5;
// const leftBorderWidth = 1;

// number = 10;
// console.log(number);

const obj = {
	a: 50
};

obj.a = 10;
console.log(obj);

// {
// 	let result = 50;
// }

// const carBodyWidth = 5000, carBodyLength = 4000;

// const carBodyWidth = 5000,
// 	carBodyLength = 4000;

const carBodyWidth = 5000;
const carBodyLength = 4000;

console.log("Ширина кузова автомобиля:" + carBodyWidth + ", длина: " + carBodyLength);

// ["vruru", "eveve", "eede"].map(a =>)

//	snake_case
//	UPPER_SNAKE_CASE
//	Kebab-case
// PascalCase

// const COLOR_RED = "F00";

// const _apiBase



//Lesson 2//

// Простые типы данных

let number = 4.6;

console.log(-4/0); // -Infinity
console.log('string' * 9) // NaN not a number

const person = 'Alex'; // string

const bool = true; // boolean

console.log(something); // null не существует 

let und;
console.log(und);	//undefined пустой

// Комплексные типы данных

// Objects

const obj = {
	name: 'John',
	age: 25,			// Свойства объекта
	isMarried: false
};

console.log(obj.name);
console.log(obj['age']);

// Massive Частный случай объекта потому что 
				// 0			1		2		3		4	5 ключ - значение заданы по умолчанию
let arr = [ 'plum.png', 'orange.jpg', 6, 'apple.bmp', {}, []];
console.log(arr[0])

//Lesson 3//

// Different between massive and objects

const array = ['a', 'b', 'c'];

// array[10] = '3456';
// console.log(array[10]);

const arrObj = {
	a: 'a',
	'1': 'b',
	2: 'c',
	abc: {
		df: [{}, {}],
		def: {

		}
	}
};

// Добавление свойств объекта

const b = 'b';
arrObj[b] = [];

// arrObj.b = '1234'; 
// arrObj['b'] = '1234'	

// console.log(arrObj['b']);
// console.log(arrObj.b);

// console.log(array[1]);
// console.log(arrObj.a);
// console.log(arrObj[1]);

// const object = {a: 1, b: 2};

const object = {
	Anna: 500,
	'Alice': 800
};
