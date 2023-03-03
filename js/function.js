"use strict";

let num = 20;

function showFirstMessage(text) {
	console.log(text);
	num = 10;
	console.log(num);
}

showFirstMessage("Hello world!");
console.log(num);

// ЗАМЫКАНИЕ ФУНКЦИИ - ЭТО ФУНКЦИЯ СО ВСЕМИ ВНЕШНИМИ ПЕРЕМЕННЫМИ, КОТОРЫЕ ЕЙ ДОСТУПНЫ

function calc(a, b) {
	return (a + b);
}
						//FUNCTION DECLARATION//
console.log(calc(4, 6));	//СОЗДАЕТСЯ ДО НАЧАЛА ВЫПОЛНЕНИЯ СКРИПТА,
console.log(calc(1, 6));	//МОЖНО ВЫЗВАТТЬ ПЕРЕД ОБЪЯВЛЕНИЕМ
console.log(calc(10, 6));

function ret() {
	let num = 50;
	return num;
}

const anotherNum = ret();
console.log(anotherNum);

const logger = function() {    //FUNCTION EXPRESSION//
	console.log("Hello")		//СОЗДАЕТСЯ ТОЛЬКО ТОГДА, КОГДА ДОХОДИТ ПОТОК КОДА
};							//МОЖНО ВЫЗВАТЬ ТОЛЬКО ПОСЛЕ ОБЪЯВЛЕНИЯ

logger();

const calc = (a, b) => {	//СТРЕЛОЧНАЯ ФУНКЦИЯ//
	console.log('1')
	return a + b
};

const usdCurr = 28;
const eurCurr = 32;
const discount = 0.9;

function convert(amount, curr) {
	return curr * amount;
}

function promotion(result) {
	console.log(result * discount);
}

const res = convert(500, usdCurr);
promotion(res);
convert(500, eurCurr);

function doNothing() {};
console.log(doNothing() === undefined);

function sayHello(name) {
	return `Hello, ${name}!`
}

console.log(sayHello('alex'));

function returnNeighboringNumbers(number) {
	return [number - 1, number, number + 1];
}

console.log(returnNeighboringNumbers(5));


function getMathResult(number, times) {
	if (typeof(times) !== 'number' || times <= 0) {
		return number;
	}

	let str = '';

	for (let i = 1; i <= times; i++) {
		if (i === times) {
			str += `${number * i}`;
		} else {
			str += `${number * i}---`;
		}
	}
	
	return str;
}

console.log(getMathResult(2, 5))

function calculateVolumeAndArea(a) {
	if (Number.isInteger(a) == true && a >= 0) {
		return `Объем куба: ${Math.pow(a, 3)}, площадь всей поверхности: ${6 * Math.pow(a, 2)}`;
	} else {
		return 'При вычислении произошла ошибка';
	}
}

console.log(calculateVolumeAndArea('c'))

function getCoupeNumber(seat) {
	if (typeof(seat) !== 'number' || !Number.isInteger(seat) || seat < 0) {
		return "Ошибка. Проверьте правильность введенного номера места";
	} else if (seat === 0 || seat > 36) {
		return "Таких мест в вагоне не существует";
	} else {
		return Math.round(seat / 4) + 1;
		// Math.ceil(seat / 4)
	}
}

function findMaxNumber(a, b ,c, d) {
	if (typeof(a) !== 'number' ||
		typeof(b) !== 'number' ||
		typeof(c) !== 'number' ||
		typeof(d) !== 'number') {
		return 0
	} else {
		return Math.max(a, b ,c ,d)	
	}
}

console.log(findMaxNumber(1, 2, 3, 17))

function getTimeFromMinutes(minutes) {
	if (typeof(minutes) !== 'number' || Number.isInteger(minutes) === false || minutes < 0) {
		return 'Ошибка, проверьте данные';
	}
	const hours = Math.floor(minutes / 60),
		min = minutes % 60;
	if (hours === 1) {
		return `Это ${hours} час и ${min} минут`;
	}
	else if (hours > 1 && hours < 5) {
		return `Это ${hours} часа и ${min} минут`;
	}
	else {
		return `Это ${hours} часов и ${min} минут`;
	}
}

console.log(getTimeFromMinutes(400))


function fib(n) {
	let str = '';
	let fib1 = 0;
	let fib2 = 1;
	if (Number.isInteger(n) && n > 0) {
		for (let i = 0; i < n; i++) {
			if(i + 1 === n){
				str+= `${fib1}`;
			} else {
				str += `${fib1} `;
			}
			let fib3 = fib1 + fib2;
			fib1 = fib2;
			fib2 = fib3;
		}	
		return str	
	} else {
		return ''
	}

}

console.log(fib(6))