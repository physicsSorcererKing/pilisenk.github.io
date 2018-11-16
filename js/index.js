;(global => {
	//========================Get the elem========================
	let navbarToggler = $('.navbar-toggler');
	let navbarContent = $('#navbar-content');

	//========================functions========================
	//let the menu open
	function toggleNavbarSlide() {
		navbarContent.toggleClass('psk-nav-show');
	}

	function setNavbarTogglerColor() {
		navbarContent.hasClass('psk-nav-show') ?
			navbarToggler.css('background-color', 'var(--dark, dark)') :
			navbarToggler.css('background-color', 'var(--light, white)');
	}


	//========================Add event listener========================
	//set interval time to forbid the status 'psk-nav-show' is not ready.
	navbarToggler.click(setInterval.bind(this, setNavbarTogglerColor, 100));
	navbarToggler.blur(setInterval.bind(this, setNavbarTogglerColor, 100));
	navbarToggler.focus(setInterval.bind(this, setNavbarTogglerColor, 100));

	navbarContent.on('show.bs.collapse', toggleNavbarSlide);
	navbarContent.on('hide.bs.collapse', toggleNavbarSlide);

})(window);