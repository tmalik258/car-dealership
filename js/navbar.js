const navToggle = document.querySelector("#nav-toggle");
const navbarMenu = document.querySelector("#nav-menu");
const navbarBtns = document.querySelector(".nav-btns");
let isNavbarExpanded = navToggle.getAttribute("aria-expanded") === "true";

const toggleOverFlow = (state = '') => {
	document.documentElement.style.overflowY = state;
    document.body.style.overflowY = state;
}

const toggleNavbarVisibility = (setExpanded = null) => {
  if (setExpanded !== null) {
    isNavbarExpanded = setExpanded;
  } else {
    isNavbarExpanded = !isNavbarExpanded;
  }
  navToggle.setAttribute("aria-expanded", isNavbarExpanded);
  
  // Toggle scroll functionality
  if (isNavbarExpanded) {
    toggleOverFlow('hidden')
  } else {
	toggleOverFlow('');
  }
};

navToggle.addEventListener("click", () => toggleNavbarVisibility());

navbarMenu.addEventListener("click", (e) => {
  // Prevent clicks inside the menu from closing it
  e.stopPropagation();
});

// Close navbar when clicking outside
document.addEventListener("click", (e) => {
  if (isNavbarExpanded && !navbarMenu.contains(e.target) && e.target !== navToggle && !navToggle.contains(e.target) && !navbarBtns.contains(e.target)) {
    toggleNavbarVisibility(false);
  }
});

// Optional: Close navbar when pressing Escape key
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && isNavbarExpanded) {
    toggleNavbarVisibility(false);
  }
});

let resizeTimer;

window.addEventListener('resize', () => {
	clearTimeout(resizeTimer);

    resizeTimer = setTimeout(() => {
        toggleNavbarVisibility(false); // toggle Navbar to False
    }, 250); // Wait for 250ms after resize ends before executing
});