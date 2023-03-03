"use strict";

const arr = [111, 2, 33, 6, 8];

arr.sort(compareNum);

function compareNum(a, b) {
	return a - b;
}

console.log(arr);

arr.forEach(function(item, i, arr) {
	console.log(`${i}: ${item} внутри массива ${arr}`);
});

console.log(arr.length);

arr.pop(); // Удаляет последний элемент
arr.push(10); // Добавляет последний элемент

// for (let i = 0; i < arr.length; i++) {
// 	console.log(arr[i]);
// }

for (let value of arr) {
	console.log(value);
}

const str = 'milk, www, rrr';
const products = str.split(', '); // Делает массив
// products.sort(); // Сортирует как строки
console.log(products.join('; ')); // Возвращает строку

const family = ['Peter', 'Ann', 'Alex', 'Linda'];
const family2 = [];

function showFamily(arr) {
	if (arr.length === 0) {
		return 'Семья пуста';
	} else {
		return `Семья состоит из: ${arr.join(' ')}`;
	}
}

console.log(showFamily(family2));

const favoriteCities = ['liSBon', 'ROME', 'miLan', 'Dublin'];

function standardizeStrings(arr) {
	arr.forEach(city => {
		console.log(city.toLowerCase());
	})
}

standardizeStrings(favoriteCities);

const someString = 'This is some strange string';

function reverse(str) {
	if (typeof(str) !== 'string') {
		return 'Ошибка!';
	} else {
		return str.split('').reverse().join('');
	}
}

console.log(reverse(someString));

const baseCurrencies = ['USD', 'EUR'];
const additionalCurrencies = ['UAH', 'RUB'];
const allCurrencies = [...baseCurrencies, ...additionalCurrencies];

function availableCurr(arr, missingCurr) {
	let str = 'Доступные валюты:\n'
	if (arr.length === 0) {
		return 'Нет доступных валют';
	} else {
		arr.forEach(element => {
			if (element !== missingCurr) {
				str += `${element}\n`;
			}
		});
	}
	return str;
	}


console.log(availableCurr(allCurrencies, 'UAH'));