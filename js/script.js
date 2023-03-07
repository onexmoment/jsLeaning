// lesson 3 //

"use strict";

// alert('hello!!!');

// const result = confirm("are you here?");
// console.log(result);

// const answer = +prompt("Вам есть 18?", "");
// console.log(answer + 5)

// const answers = [];

// answers[0] = prompt('Как ваше имя?', '');
// answers[1] = prompt('Как ваша фамилия?', '');
// answers[2] = prompt('Сколько вам лет?', '');

// document.write(answers);

// console.log(typeof(answers))

// // Lesson 4 // Interpolation //

// const category = 'toys';

// console.log(`https://someurl.com/${category}/5`);

// const user = "Ivan"
// alert(`Привет, ${user}!`)


function createCounter () {
	let counter = 0;

	const myFunction = function () {
		counter += 1;
		return counter;
	}

	return myFunction;
}

const increment = createCounter();
const c1 = increment();
const c2 = increment();
const c3 = increment();

console.log(c1, c2, c3);

console.log(0 && 1);