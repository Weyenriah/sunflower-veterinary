/* Add class scrolled on nav when user has scrolled on page in js */

window.onscroll = function() { scrolled() };

function scrolled() {
    const nav = document.querySelector('.nav');
    nav.classList.toggle('scrolled', window.scrollY > 0);
}