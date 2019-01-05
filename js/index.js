;(global => {
	//=======================Select the elements=======================
	const navbarToggler = $('.navbar-toggler');
	const navbarContent = $('#navbar-content');

	const carouselImages = $('.carousel-item img');

	//========================handler functions========================
	function toggleNavbarSlide() {
		navbarContent.toggleClass('psk-nav-show');
	}

	function removeNavbarSlide() {
		
		navbarContent.collapse('hide');
		navbarContent.removeClass('psk-nav-show');
	}

	function setNavbarTogglerColor() {
		console.log('worked');
		if (navbarContent.hasClass('psk-nav-show')){
			navbarToggler.css('background-color', 'var(--light, white)');
			navbarToggler.css('background-image', `url("data:image/svg+xml;charset=utf8,%3Csvg viewBox='0 0 30 30' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath stroke='rgba(0, 0, 0, 0.5)' stroke-width='2' stroke-linecap='round' stroke-miterlimit='10' d='M4 7h22M4 15h22M4 23h22'/%3E%3C/svg%3E")`);
		}
		else {
			navbarToggler.css('background-color', 'var(--dark, dark)');
			navbarToggler.css('background-image', `url("data:image/svg+xml;charset=utf8,%3Csvg viewBox='0 0 30 30' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath stroke='rgba(255, 255, 255, 0.5)' stroke-width='2' stroke-linecap='round' stroke-miterlimit='10' d='M4 7h22M4 15h22M4 23h22'/%3E%3C/svg%3E")`);
		}
	}

	// let all <img> in Carousel have an anchor outside to link
	(function setCarouselImageLinks() {
		for (let i=0; i<carouselImages.length; ++i){
			var innerImage = carouselImages[i];
			var path = innerImage.src;
			var wrapper = document.createElement('a');
			innerImage.parentNode.insertBefore(wrapper, innerImage);
			wrapper.appendChild(innerImage);
			wrapper.href = path;
			wrapper.target = '_blank';
		}
	})();

	//========================Add event listener========================
	//better way to control .navbar-toggler's color: actually rely on #navbar-content is showing or not.
	//set interval time to forbid the status 'psk-nav-show' is not ready.
	navbarToggler.click(setTimeout.bind(this, setNavbarTogglerColor, 100));
	navbarToggler.focus(setTimeout.bind(this, setNavbarTogglerColor, 100));
	navbarToggler.blur(setTimeout.bind(this, setNavbarTogglerColor, 100));
	
	//Collapse #navbar-content when focusing on the other things.
	//glitch: #navbar-content collapses too fast to click it when platform is a laptop/desktop and width < 992px
	navbarToggler.blur(removeNavbarSlide);

	//Add custom slide effect when #navbar-content is showing or hidding.
	navbarContent.on('show.bs.collapse', toggleNavbarSlide);
	navbarContent.on('hide.bs.collapse', toggleNavbarSlide);

	/*========================Youtube================================*/
	/*const youtubeSubscribe = document.querySelector('#psk-youtube-subscribe');
	const youtubeSubscribeOptions = {
		'channel': 'ex76823',
        'layout': 'full'
	};

	gapi.ytsubscribe.render(youtubeSubscribe, youtubeSubscribeOptions);*/

	function setYoutube() {
		console.log('YouTube Loading');
		$('#psk-youtube-top-10-plays iframe').attr('src', 'https://www.youtube.com/embed/videoseries?list=PLSTI4b-vmVM4JK3bs-dqMUg-8RS8nvsZt');
		$('#psk-youtube-recent-uploads iframe').attr('src', 'https://www.youtube.com/embed/videoseries?list=UUnyWkv1y2hAVtXVI_OiKplQ');
		console.log('YouTube Loaded');
	}
	//Let the BS4's scrollspy is ready first. May found better way to deal with later.
	setTimeout(setYoutube, 600);

})(window);