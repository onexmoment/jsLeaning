// lesson 3 //

"use strict";

alert('hello!!!');

const result = confirm("are you here?");
console.log(result);

const answer = +prompt("Вам есть 18?", "");
console.log(answer + 5)

const answers = [];

answers[0] = prompt('Как ваше имя?', '');
answers[1] = prompt('Как ваша фамилия?', '');
answers[2] = prompt('Сколько вам лет?', '');

document.write(answers);

console.log(typeof(answers))

// Lesson 4 // Interpolation //

const category = 'toys';

console.log(`https://someurl.com/${category}/5`);

const user = "Ivan"
alert(`Привет, ${user}!`)

