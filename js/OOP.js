"use strict";

const soldier = {
	health: 400,
	armor: 100,
	sayHello: function() {
		console.log('Hello!');
	}
};

const john = Object.create(soldier);

// const john = {
// 	health: 100
// };

// Object.setPrototypeOf(john, soldier); !!! когда john задан изначально

// john.__proto__ = soldier; // Устаревший формат

console.log(john.armor);
john.sayHello()

