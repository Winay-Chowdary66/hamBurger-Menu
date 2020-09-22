const header = document.querySelector('.nav-links');
const hamBurger = document.querySelector('.hamBurger');
const bars1 = document.querySelector('.bars1');
const bars2 = document.querySelector('.bars2');
const bars3 = document.querySelector('.bars3');

hamBurger.addEventListener('click', () => {
	header.classList.toggle('open');
	bars1.classList.toggle('rotate');
	bars2.classList.toggle('rotate');
	bars3.classList.toggle('rotate');
});
