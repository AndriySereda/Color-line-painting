const board = document.querySelector('#board');
const SQUARED_NUMBER = 900;
const colors = ['#eb162d', '#d51ea9', '#ab1ed5', '#761ed5',
	'#1e29d5', '#1e8cd5', '#1ec8d5', '#1ed586', '#1bcd5c', '#f1ec1b', '#f1781b'];

for (let i = 0; i < SQUARED_NUMBER; i++) {
	const square = document.createElement('div');// динамическое создание 
	// строкового элемента "div"
	square.classList.add('square'); // чтобы квадратик был квадратикоm
	square.addEventListener('mouseover', setColor); // событие происходит при наведении на квадрат


	square.addEventListener('mouseleave', removeColor);  // событие происходит при наведении на квадрат


	board.append(square); // вставка элемента

}

function setColor(event) {
	const element = event.target;
	const color = getRandomColor();
	element.style.backgroundColor = color;
	element.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`;
}
function removeColor(event) {
	const element = event.target;
	element.style.backgroundColor = '#1d1d1d';
	element.style.boxShadow = `0 0 2px #000`;
}
function getRandomColor() {
	const index = Math.floor(Math.random() * colors.length);
	return colors[index];
}