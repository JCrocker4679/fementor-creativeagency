//Toggle mobile menu

document.addEventListener('DOMContentLoaded', function () {
	const hamburgerButton = document.querySelector(
		'.navbar .mobile-menu-toggle .hamburger'
	);
	const crossButton = document.querySelector(
		'.navbar .mobile-menu-toggle .cross'
	);
	const mobileMenu = document.querySelector('.navbar .mobile-menu-items');

	hamburgerButton.addEventListener('click', function () {
		mobileMenu.classList.toggle('active');
		hamburgerButton.classList.toggle('hide');
		crossButton.classList.toggle('hide');
	});
	crossButton.addEventListener('click', function () {
		mobileMenu.classList.toggle('active');
		hamburgerButton.classList.toggle('hide');
		crossButton.classList.toggle('hide');
	});
});

//Slider
document.addEventListener('DOMContentLoaded', function () {
	const leftArrow = document.querySelector('.slider .arrows #left-arrow');
	const rightArrow = document.querySelector('.slider .arrows #right-arrow');

	const slide1 = document.querySelector(
		'.slider .right-content .slider-container #image-1'
	);
	const slide2 = document.querySelector(
		'.slider .right-content .slider-container #image-2'
	);
	const slide3 = document.querySelector(
		'.slider .right-content .slider-container #image-3'
	);

	const title1 = document.querySelector(
		'.slider .left-content .title-container #title-1'
	);
	const title2 = document.querySelector(
		'.slider .left-content .title-container #title-2'
	);
	const title3 = document.querySelector(
		'.slider .left-content .title-container #title-3'
	);

	const caption1 = document.querySelector(
		'.slider .captions-container #captions-1'
	);
	const caption2 = document.querySelector(
		'.slider .captions-container #captions-2'
	);
	const caption3 = document.querySelector(
		'.slider .captions-container #captions-3'
	);

	rightArrow.addEventListener('click', function () {
		if (!slide1.classList.contains('hide')) {
			slide1.classList.toggle('hide');
			title1.classList.toggle('hide');
			caption1.classList.toggle('hide');
			slide2.classList.toggle('hide');
			title2.classList.toggle('hide');
			caption2.classList.toggle('hide');
		} else if (!slide2.classList.contains('hide')) {
			slide2.classList.toggle('hide');
			title2.classList.toggle('hide');
			caption2.classList.toggle('hide');
			slide3.classList.toggle('hide');
			title3.classList.toggle('hide');
			caption3.classList.toggle('hide');
		} else {
			slide3.classList.toggle('hide');
			title3.classList.toggle('hide');
			caption3.classList.toggle('hide');
			slide1.classList.toggle('hide');
			title1.classList.toggle('hide');
			caption1.classList.toggle('hide');
		}
	});

	leftArrow.addEventListener('click', function () {
		console.log('left arrow click');
		if (!slide1.classList.contains('hide')) {
			slide1.classList.toggle('hide');
			title1.classList.toggle('hide');
			caption1.classList.toggle('hide');
			slide3.classList.toggle('hide');
			title3.classList.toggle('hide');
			caption3.classList.toggle('hide');
		} else if (!slide2.classList.contains('hide')) {
			slide2.classList.toggle('hide');
			title2.classList.toggle('hide');
			caption2.classList.toggle('hide');
			slide1.classList.toggle('hide');
			title1.classList.toggle('hide');
			caption1.classList.toggle('hide');
		} else {
			slide3.classList.toggle('hide');
			title3.classList.toggle('hide');
			caption3.classList.toggle('hide');
			slide2.classList.toggle('hide');
			title2.classList.toggle('hide');
			caption2.classList.toggle('hide');
		}
	});
});
