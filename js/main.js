const menuButton = document.querySelector('.nav-btn');
const nav = document.querySelector('.navbar');

// Helper function for closing nav
function close() {
    nav.classList.remove('open');
    menuButton.classList.remove('open');
}

// Listener function for menu button
function toggleButton(evt) {
    nav.classList.toggle('open');
    menuButton.classList.toggle('open');
}

// Menu event listener
menuButton.addEventListener('click', toggleButton);

// Listener function for Navbar
function closeNav(evt) {
    if (evt.target === nav.firstElementChild || evt.target === nav) {
        close();
    }
}

// Navbar event listener
nav.addEventListener('click', closeNav, true);
 
// Initializing smooth scrolling plugin 
document.addEventListener('DOMContentLoaded', function() {
    const elems = document.querySelectorAll('.scrollspy');
    const instances = M.ScrollSpy.init(elems, {"throttle": 30});
});