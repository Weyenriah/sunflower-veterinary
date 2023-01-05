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
    // If the user has scrolled past the hero section, add the active class to the specLink
    specLink.classList.toggle('active', window.scrollY > heroHeight - generalOffset && window.scrollY < specHeight + heroHeight - generalOffset);
    // If the user has scrolled past the spec section, add the active class to the offersLink
    offersLink.classList.toggle('active', window.scrollY > specHeight + heroHeight - generalOffset && window.scrollY < offers.offsetHeight + specHeight + heroHeight - generalOffset);
    // If the user has scrolled past the offers section, add the active class to the contactBtn
    contactBtn.classList.toggle('active', window.scrollY > offersHeight + specHeight + heroHeight - generalOffset);
}

