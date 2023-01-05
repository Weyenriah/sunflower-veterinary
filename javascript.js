/* Add functionality when scrolling. */
window.onscroll = function() {
    scrolled()
    addActiveClass()
};

/* Add scroll class when user scrolled. */
function scrolled() {
    const nav = document.querySelector('.nav');
    nav.classList.toggle('scrolled', window.scrollY > 0);
}

/* Add active classes depending on where user is on website. */
function addActiveClass() {
    const homeLink = document.querySelector('.home-link');
    const specLink = document.querySelector('.spec-link');
    const offersLink = document.querySelector('.offers-link');
    const contactBtn = document.querySelector('.contact-btn');
    const heroHeight = document.querySelector('.hero').offsetHeight;
    const specHeight = document.querySelector('.our-specialities').offsetHeight;
    const offersHeight = document.querySelector('.common-services').offsetHeight;
    const generalOffset = 100;

    homeLink.classList.toggle('active', window.scrollY < heroHeight - generalOffset);
    // If the user has scrolled past the spec section, add the active class to the offersLink
    offersLink.classList.toggle('active', window.scrollY > heroHeight - generalOffset && window.scrollY < offersHeight + heroHeight - generalOffset);
    // If the user has scrolled past the hero section, add the active class to the specLink
    specLink.classList.toggle('active', window.scrollY > offersHeight + heroHeight - generalOffset && window.scrollY < offersHeight + specHeight + heroHeight - generalOffset);
    // If the user has scrolled past the offers section, add the active class to the contactBtn
    contactBtn.classList.toggle('active', window.scrollY > offersHeight + specHeight + heroHeight - generalOffset);
}


// When page is loaded
window.onload = function() {
    // Add event listener to the menu button
    const menuBtn = document.querySelector('.open');
    menuBtn.addEventListener('click', toggleMenu);

    // Add event listener to the close button
    const closeBtn = document.querySelector('.close');
    closeBtn.addEventListener('click', toggleMenu);
}

// Toggle the menu when the menu button is clicked
function toggleMenu() {
    const menu = document.querySelector('.nav--mobile');
    menu.classList.toggle('open');

    // Stop scroll behaviour on nav-link click
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            menu.classList.remove('open');
        });
    });
}
