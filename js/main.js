const menuButton = document.querySelector('.nav-btn');
const nav = document.querySelector('.navbar');

// Listener function for menu button
function toggleButton(evt) {
    nav.classList.toggle('open');
    menuButton.classList.toggle('open');
}

// Menu event listener
menuButton.addEventListener('click', toggleButton);

// Listener function for Navbar
function closeNav(evt) {
    if (evt.target === nav.firstElementChild) {
        nav.classList.remove('open');
        menuButton.classList.remove('open');
    }
}

// Navbar event listener
nav.addEventListener('click', closeNav);