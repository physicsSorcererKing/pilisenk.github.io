;(global => {
	//========================Get the elements========================
	const navbarToggler = $('.navbar-toggler');
	const navbarContent = $('#navbar-content');

	//========================handler functions========================
	//let the menu open
	function toggleNavbarSlide() {
		navbarContent.toggleClass('psk-nav-show');
	}

	function removeNavbarSlide() {
		
		navbarContent.collapse('hide');
		navbarContent.removeClass('psk-nav-show');
	}

	function setNavbarTogglerColor() {
		if (navbarContent.hasClass('psk-nav-show')){
			navbarToggler.css('background-color', 'var(--light, white)');
			navbarToggler.css('background-image', `url("data:image/svg+xml;charset=utf8,%3Csvg viewBox='0 0 30 30' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath stroke='rgba(0, 0, 0, 0.5)' stroke-width='2' stroke-linecap='round' stroke-miterlimit='10' d='M4 7h22M4 15h22M4 23h22'/%3E%3C/svg%3E")`);
		}
		else {
			navbarToggler.css('background-color', 'var(--dark, dark)');
			navbarToggler.css('background-image', `url("data:image/svg+xml;charset=utf8,%3Csvg viewBox='0 0 30 30' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath stroke='rgba(255, 255, 255, 0.5)' stroke-width='2' stroke-linecap='round' stroke-miterlimit='10' d='M4 7h22M4 15h22M4 23h22'/%3E%3C/svg%3E")`);
		}
	}

	//========================Add event listener========================
	//better way to control .navbar-toggler's color: actually rely on #navbar-content is showing or not.
	//set interval time to forbid the status 'psk-nav-show' is not ready.
	navbarToggler.click(setInterval.bind(this, setNavbarTogglerColor, 100));
	navbarToggler.focus(setInterval.bind(this, setNavbarTogglerColor, 100));
	navbarToggler.blur(setInterval.bind(this, setNavbarTogglerColor, 100));
	//Collapse #navbar-content when focusing on other things.
	//bug: remove too fast to click it!
	//solve:
	navbarToggler.blur(removeNavbarSlide);

	navbarContent.on('show.bs.collapse', toggleNavbarSlide);
	navbarContent.on('hide.bs.collapse', toggleNavbarSlide);

})(window);