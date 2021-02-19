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
// Used to allow async scroll event listener to improve performance
let scrolling = true;
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
/**
 * @description creates a nav menu entry for each section with data-nav attribute, link text is set to the attribute's value
 */
function buildNavMenu() {
  const sections = document.querySelectorAll("section[data-nav]");
  let navMenu = document.createDocumentFragment();
  for (const section of sections) {
    let li = document.createElement("li");
    let a = document.createElement("a");
    a.href = `#${section.id}`;
    a.dataset.navlink = section.id;  // navlink data attribute used highlight the link when its section is inside viewport
    a.textContent = section.dataset.nav;
    a.classList.add("menu__link");
    li.appendChild(a);
    navMenu.appendChild(li);
  }
  const navList = document.getElementById("navbar__list");
  navList.appendChild(navMenu);
}

// Add class 'active' to section closest to the top of viewport
function highlightActiveSection() {
  const sections = document.querySelectorAll("section[data-nav]");
  let closestTop = window.innerHeight; // tracks the closest DomRect.top to viewport
  let negClosestTop = -10 * window.innerHeight; // tracks the closest negative DomRect.top to viewport, in case no positive ones are found
  let active = -1; // stores the index of the active section
  sections.forEach((section, i) => {
    section.classList.remove("your-active-class");
    const rectTop = section.getBoundingClientRect().top;
    if (rectTop >= 0 && rectTop < closestTop) {
      closestTop = rectTop;
      active = i;
    }
    // check in case active section is larger than the view port (top < 0)
    else if (rectTop < 0 && rectTop > negClosestTop && active <= 0) {
      negClosestTop = rectTop;
      active = i * -1;
    }
  });
  active = active < 0 ? active * -1 : active;
  sections[active].classList.add("your-active-class");

  // highlight nav link when its section is active (inside view port)
  const links = document.querySelectorAll('a[data-navlink]');
  for (link of links) {
    if (link.dataset.navlink == sections[active].id) {
      link.classList.add("active-nav-link");
      continue;
    }
    link.classList.remove("active-nav-link")
  }
}

/**
 * @description Smoothly scroll to the element with ID linked to an anchor upon clicking the anchor
 * @param {event object} a - Event object passed from the clicked <a> element
 */
// Uses Window.scroll(), while Element.scrollIntoView() is the better option, smooth behaviour isn't fully supported
// in some older browsers that are still compatible with ES6
// https://caniuse.com/?search=scrollintovie
function scrollToAnchorID(a) {
  a.preventDefault();
  const anchorEleemnt = document.getElementById(
    a.target.getAttribute("href").slice(1)
  );
  const y = anchorEleemnt.getBoundingClientRect().top + window.scrollY;
  window.scroll({
    top: y,
    behavior: "smooth",
  });
}
/**
 * End Main Functions
 * Begin Events
 *
 */

// DOM Content Loaded Actions
window.addEventListener("DOMContentLoaded", () => {
  // construct dynamic navigation menu
  buildNavMenu();
  // Add smooth scroll event to navigation menu
  let navLinks = document.querySelectorAll('nav li a[href^="#"]');
  for (navLink of navLinks) {
    navLink.addEventListener("click", scrollToAnchorID);
  }
});

// Set sections as active when scrolling
window.addEventListener("scroll", () => {
  scrolling = true;
});
// ensure the highlight function is fired async. and not repeatedly
setInterval(() => {
  if (scrolling) {
    scrolling = false;
    highlightActiveSection();
  }
}, 50);
