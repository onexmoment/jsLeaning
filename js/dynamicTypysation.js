'use strict';

// To String

// 1
String(null);

// 2
5 + '';

//
const num = 5;

console.log('https://vk.com/catalog/' + num);

const fontSize = 26 + 'px';

// To Number

// 1
Number('4');

// 2
+'5';

// 3
parseInt('15px', 10)

//
let answ = +prompt('hello', '');

// To boolean

// false
0, '', null, undefined, NaN;

// 1
let switcher = null;

if (switcher) {
	console.log('working..'); // not working
}

switcher = 1;

if (switcher) {
	console.log('working..'); // working
}

// 2
console.log(typeof(Boolean('4')));

// 3
console.log(typeof(!!'444'));
