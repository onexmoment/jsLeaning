const options = {
	name: 'test',
	width: 1024,
	height: 1024,
	colors: {
		border: 'black',
		bg: 'red'
	},
	makeTest: function() {
		console.log("Test");
	}
};

options.makeTest();

const {border, bg} = options.colors;
console.log(border);

// console.log(Object.keys(options).length);
 
// console.log(options.name);

// // console.log(options['colors']['border']);

// // delete options.name;

// // console.log(options);

// let counter = 0;
// for (let key in options) {
// 	if (typeof(options[key]) === 'object') {
// 		for (let i in options[key]) {
// 			console.log(`Свойство ${i} имеет значение ${options[key][i]}`);
// 			counter++;
// 		}
// 	} else {
// 		console.log(`Свойство ${key} имеет значение ${options[key]}`);
// 		counter++;
// 	}
// }
// console.log(counter)

const personalPlanPeter = {
    name: "Peter",
    age: "29",
    skills: {
        languages: ['ru', 'eng'],
        programmingLangs: {
            js: '20%',
            php: '10%'
        },
        exp: '1 month'
    },
	showAgeAndLangs: function (plan) {
		const {languages} = plan.skills;
		const string = languages.join(' ');
		return `Мне ${plan['age']} и я владею языками: ${string.toUpperCase()}`
	}
};

function showExperience(plan) {
    const {exp} = plan.skills;
	return exp;
}

console.log(showExperience(personalPlanPeter));

function showProgrammingLangs(plan) {
	let str = '';
	const {programmingLangs} = plan.skills;
	for (let key in programmingLangs) {
		str += `Язык ${key} изучен на ${programmingLangs[key]}\n`;
	}
	return str
}

console.log(showProgrammingLangs(personalPlanPeter));