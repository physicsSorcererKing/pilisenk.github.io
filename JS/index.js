window.onload = init;

function init(){
	let menuButton = document.querySelector('#menu_button');
	let menu = document.querySelector('.menu');


	menuButton.addEventListener('click',()=>{
		menu.classList.toggle('open') ? 
			menuButton.style.setProperty('background', 'yellow') : 
			menuButton.style.setProperty('background', '');
	});
}