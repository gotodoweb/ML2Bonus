const start = document.querySelector('.start');
let title = document.querySelector('.title');
let buttons = document.querySelector('.buttons');


let number = 50;
let tries = 0;
let max = 100;
let min = 1;

const getstart = () => {	
	
	title.innerText = 'Загаданное число равно, меньше или больше 50';

	function move(event) {
		event.preventDefault();
		const down = event.target.closest('.down');

		if (down) {
			tries += 1;
			max = number;
			number = Math.trunc(max - ((max - min) / 2));		
			title.innerText = `Загаданное число равно, меньше или больше ${number}`;
		}

		const up = event.target.closest('.up'); 
		if (up) {
			tries += 1;
			min = number;			
			number = Math.trunc(max - ((max - min) / 2));
			title.innerText = `Загаданное число равно, меньше или больше ${number}`;
		}

		const win = event.target.closest('.win');
		if (win) {
			tries += 1;
			title.innerText = `Ура я угадал всего лишь с ${tries} попытки`;
			buttons.removeEventListener('click', move);
			
			start.removeEventListener('click', getstart);
			setTimeout(() => { title.innerText = ("Game over!"); }, 3000);
			
		}
		
	}

	buttons.addEventListener('click', move);


	
}

start.addEventListener('click', getstart);

