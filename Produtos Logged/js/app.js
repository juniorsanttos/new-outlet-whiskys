const hamburguer = document.getElementById('hamburguer');
const nav = document.querySelector('nav');

hamburguer.addEventListener('click', () => {
    nav.classList.toggle('active');
});