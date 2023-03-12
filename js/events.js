const btns = document.querySelectorAll('button');
const overlay = document.querySelector('.overlay');
// btn.onclick = function() {
// 	alert('Click');
// };

// btn.addEventListener('mouseenter', (e) => {
// 	console.log(e.target);
// 	e.target.remove();
// 	console.log('Hover');
// });

// let i = 0;
const deleteElement = (e) => {
	console.log(e.target);
	console.log(e.type);
	// e.target.remove();
	// i++;
	// if (i == 1) {
	// 	btn.removeEventListener('click', deleteElement);
	// }
};

// btn.addEventListener('click', deleteElement);
// overlay.addEventListener('click', deleteElement);

btns.forEach(btn => {
	btn.addEventListener('click', deleteElement, {once: true});
});

// Всплытие элемента это когда обработчик события 
// сначала срабатывает на самом вложенном элементе, затем на родители и так выше и выше

const link = document.querySelector('a');

link.addEventListener('click', (event) => {
	event.preventDefault();

	console.log(event.target);
});

