// Lesson 5 // Operators //

'use strict';

console.log('arr' + ' - object')
console.log(4 + ' - object')
console.log(4 + +'5') // Унарный плюс (9)

let incr = 10,
	decr = 10;

// incr++; //Оператор инкримента, т.е увелечине на единицу
// decr--; //Декримента, уменьшение на 1

// ++incr;
// ++decr;


// console.log(incr++);
// console.log(decr--);  // Постфиксная форма сначала возвращает старое значение , а после увеличивает или уменьшает

console.log(++incr);
console.log(--decr); // Префиксная форма

console.log(5%2); // Остаток от деления

console.log(2*4 == 8); console.log(2*4 == '8'); // По значению
console.log(2*4 === '8'); // Строгое сравнение

const isChecked = false,
	isClose = false;

console.log(isChecked && isClose); // && И (обра аргумента верны)

console.log(isChecked || !isClose); // || Или 
									// ! - оператор отрицания, меняет на противоположное
console.log(2 + 2 * 2 === 8);
console.log(2 + 2 * 2 != 8);
console.log(2 + 2 * 2 !== '6');

// const hamburger = 5;
// const fries = null;

// if(hamburger && fries) {
// 	console.log('Я сыт');
// }

// console.log((hamburger && fries))

// const hamburger = 3;
// const fries = 1;
// const cola = 0;

// console.log(hamburger === 3 && cola && fries); // && ВОЗВРАЩАЕТ ПЕРВОЕ ЛОЖНОЕ ЗНАЧЕНИЕ !!!

// console.log(1 && 0); // && ВОЗВРАЩАЕТ ПОСЛЕДНЕЕ ПРАВДИВОЕ, ЕСЛИ ПРАВДА!!!
// console.log(1 && 5);
// console.log(null && 5);
// console.log(0 && 'dsd')
// console.log(0 && Nan || undefined)

// if(hamburger === 3 && cola && fries) {
// 	console.log('все сыты');
// } else {
// 	console.log('мы уходим');
// }

const hamburger = 3;
const fries = 3;
const cola = 0;
const nuggets = 2;

console.log(hamburger === 3 && cola === 2 || fries === 3 && nuggets); // || ВОЗВРАЩАЕТ ПЕРВОЕ ПРАВДИВОЕ ЗНАЧЕНИЕ !!!

if(hamburger === 3 && cola && fries) {
	console.log('все сыты');
} else {
	console.log('мы уходим');
}

let johnReport, alexReport, samReport, nariaReport = 'done';

console.log(johnReport || alexReport || samReport || nariaReport)


console.log( NaN || 2 || undefined ); // 2
console.log( NaN && 2 && undefined ); // Nan
console.log( 1 && 2 && 3 ); // 3
console.log( !1 && 2 || !3 ); // false
console.log( 25 || null && !3 ); // 25
console.log( NaN || null || !1 || undefined || 5); // 5
console.log( NaN || null && !3 && undefined || 5); // 5
console.log( 5 === 5 && 3 > 1 || 5); // true

const hamburger = 3;
const fries = 3;
const cola = 0;
const nuggets = 2;


if (hamburger === 3 && cola || fries === 3 && nuggets) {
   console.log('Done!')
}

let hamburger;
const fries = NaN;
const cola = 0;
const nuggets = 2;


if (hamburger || cola || fries === 3 || nuggets) {
   console.log('Done!')
}

let hamburger;
const fries = NaN;
const cola = 0;
const nuggets = 2;


console.log(hamburger && cola || fries === 3 && nuggets)

