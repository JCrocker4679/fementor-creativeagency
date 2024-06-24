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
		console.log('hamburger click');
		mobileMenu.classList.toggle('active');
		hamburgerButton.classList.toggle('hide');
		crossButton.classList.toggle('hide');
	});
	crossButton.addEventListener('click', function () {
		console.log('cross click');
		mobileMenu.classList.toggle('active');
		hamburgerButton.classList.toggle('hide');
		crossButton.classList.toggle('hide');
	});
});
