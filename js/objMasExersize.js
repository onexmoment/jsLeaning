const shoppingMallData = {
    shops: [
        {
            width: 10,
            length: 5
        },
        {
            width: 15,
            length: 7
        },
        {
            width: 20,
            length: 5
        },
        {
            width: 8,
            length: 10
        }
    ],
    height: 5,
    moneyPer1m3: 30,
    budget: 50000
};

// S = width * length;
// V = S * height

function isBudgetEnough(data) {
	let S = 0;
	data.shops.forEach(element => {
		S += element.width * element.length;
	});
	let V = S * data.height;
	if (data.moneyPer1m3 * V > data.budget) {
		return 'Бюджета недостаточно';
	} else return 'Бюджета достаточно';
}

console.log(isBudgetEnough(shoppingMallData));

const students = ['Peter', 'Andrew', 'Ann', 'Mark', 'Josh', 'Sandra', 'Cris', 'Bernard', 'Takesi', 'Sam', 'Zlatan', 'Penis'];

function sortStudentsByGroups(arr) {
	arr.sort();
	const commandOne = [],
		commanTwo = [],
		commandThree = [],
		rest = [];
	arr.forEach((student, i) => {								// for (let i = 0; i < arr.length, i++) {
		if (i < 3) {											// if  (i < 3) {
			commandOne.push(student);							// commandOne.push(arr[i])
		} else if (i < 6) {							//	}
			commanTwo.push(student);							//}
		} else if (i < 9) {
			commandThree.push(student);
		} else {
			rest.push(student);
		}
	});
	return [commandOne, commanTwo, commandThree, `Оставшиеся студенты: ${rest.length === 0 ? '-' : rest.join(', ')}`];
}

console.log(sortStudentsByGroups(students));