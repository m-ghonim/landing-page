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
 * Define Global Variables
 *
 */

/**
 * End Global Variables
 * Start Helper Functions
 *
 */

/**
 * End Helper Functions
 * Begin Main Functions
 *
 */

// build the nav
// creates a nav menu entry for each section with data-nav attribute, link text is set to the attribute's value
function buildNavMenu() {
  const sections = document.querySelectorAll("section[data-nav]");
  let navMenu = document.createDocumentFragment();
  for (const section of sections) {
    let li = document.createElement("li");
    let a = document.createElement("a");
    a.href = `#${section.id}`;
    a.textContent = section.dataset.nav;
    a.classList.add("menu__link");
    li.appendChild(a);
    navMenu.appendChild(li);
  }
  const navList = document.getElementById("navbar__list");
  navList.appendChild(navMenu);
}

// Add class 'active' to section when near top of viewport

// Scroll to anchor ID using scrollTO event

/**
 * End Main Functions
 * Begin Events
 *
 */

// Build menu
window.addEventListener("DOMContentLoaded", (event) => {
  buildNavMenu();
});
// Scroll to section on link click

// Set sections as active
