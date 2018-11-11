;(global => {
	//========================Get the elem========================
	let navbarBtn = document.querySelector('.navbar-toggler-icon');
	let menu = document.querySelector('.menu-psk');
	let options = document.querySelector('.menu-psk li');

	//========================functions========================
	//let the menu open
	function navbarBtnToggle() {
		menu.classList.toggle('open');
		setNavbarBtnColor();
	}

	function navbarBtnBlur() {
		//if menu is not focus too, then... try to fix it
		menu.classList.remove('open');
		setNavbarBtnColor();
	}

	function setNavbarBtnColor() {
		menu.classList.contains('open') ?
			navbarBtn.style.setProperty('background-color', 'var(--dark, dark)') :
			navbarBtn.style.setProperty('background-color', 'var(--light, white)');
	}


	//========================Add event listener========================
	navbarBtn.addEventListener('click', navbarBtnToggle);
	navbarBtn.addEventListener('blur', navbarBtnBlur);

})(window);