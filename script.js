// DOM SELECTION
// document.getElementbyId()
// const judul = document.getElementById('judul');
// judul.style.color = "red";
// judul.style.backgroundColor = 'grey';

// document.getElementByTagName mengembalikan Htmlcollections
// const p = document.getElementsByTagName('p');

// for (let i=0; i < p.length; i++){
// 	p[i].style.backgroundColor = 'lightBlue';
// }

// const h1 = document.getElementsByTagName('h1')[0];
// h1.style.fontSize = '50px';

// document.getElementByTagName mengembalikan Element
const pone = document.getElementsByClassName('p1')[0];

const buttonInput = document.getElementById('enter');
const Input = document.getElementById('userInput');
const ul = document.getElementsByTagName('ul')[1];

function inputLength(){
	return Input.value.length;
}

function createListElement(){
	var li = document.createElement('li');
	li.appendChild(document.createTextNode(Input.value));
	ul.appendChild(li);
	Input.value = '';
}

function addListAfterClick(){
	if (inputLength() > 0){
		createListElement();
	}
}
function addListAfterKeypress(event){
	if (inputLength() > 0 && event.keyCode === 13){
		createListElement();
	}
}

buttonInput.addEventListener('click', addListAfterClick);

Input.addEventListener('keypress', addListAfterKeypress);