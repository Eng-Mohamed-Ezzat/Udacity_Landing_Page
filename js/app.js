/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Comments should be present at the beginning of each procedure and class.
 * Great to have comments before crucial code sections within the procedure.
*/

/**
 * Define Global Variables
 * 
*/
const sections = document.querySelectorAll('section');
const navList = document.getElementById('navbar__list');

/**
 * End Global Variables
 * Start Helper Functions
 * 
*/
function isInViewport(section) {
    const rect = section.getBoundingClientRect();
    return (rect.top >= 0 && rect.top <= window.innerHeight * 0.5);
}



/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the nav
function buildNav() {
    sections.forEach((section) => {
        const navItem = document.createElement('li');
        navItem.innerHTML = `<a href="#${section.id}" class="menu__link">${section.dataset.nav}</a>`;
        navList.appendChild(navItem);
    });
}

// Add class 'active' to section when near top of viewport
function setActiveSection() {
    sections.forEach(section => {
        const navLink = document.querySelector(`a[href="#${section.id}"]`);
        if (isInViewport(section)) {
            section.classList.add("active-section");
            navLink.classList.add("active-link");
        } else {
            section.classList.remove("active-section");
            navLink.classList.remove("active-link");
        }
    });
}

// Scroll to anchor ID using scrollTO event
function scrollToSection(event) {
    if (event.target.nodeName === 'A') {
        event.preventDefault();
        const targetSection = document.querySelector(event.target.getAttribute('href'));
        targetSection.scrollIntoView({ behavior: 'smooth' });
    }
}

/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 
document.addEventListener('DOMContentLoaded', buildNav);

// Scroll to section on link click
navList.addEventListener('click', scrollToSection);

// Set sections as active
window.addEventListener("scroll", setActiveSection);

setActiveSection();


