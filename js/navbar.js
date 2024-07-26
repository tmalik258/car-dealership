const navToggle = document.querySelector("#nav-toggle");
const navbarMenu = document.querySelector("#nav-menu");
const navbarBtns = document.querySelector(".nav-btns");
let isNavbarExpanded = navToggle.getAttribute("aria-expanded") === "true";

const toggleNavbarVisibility = (setExpanded = null) => {
  if (setExpanded !== null) {
    isNavbarExpanded = setExpanded;
  } else {
    isNavbarExpanded = !isNavbarExpanded;
  }
  console.log('helo')
  navToggle.setAttribute("aria-expanded", isNavbarExpanded);
  
  // Toggle scroll functionality
  if (isNavbarExpanded) {
    document.documentElement.style.overflow = 'hidden';
    document.body.style.overflow = 'hidden';
  } else {
	document.documentElement.style.overflow = '';
    document.body.style.overflow = '';
  }
};

navToggle.addEventListener("click", () => toggleNavbarVisibility());

navbarMenu.addEventListener("click", (event) => {
  // Prevent clicks inside the menu from closing it
  event.stopPropagation();
});

// Close navbar when clicking outside
document.addEventListener("click", (event) => {
  if (isNavbarExpanded && !navbarMenu.contains(event.target) && event.target !== navToggle && !navToggle.contains(event.target) && !navbarBtns.contains(event.target)) {
    toggleNavbarVisibility(false);
  }
});

// Optional: Close navbar when pressing Escape key
document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && isNavbarExpanded) {
    toggleNavbarVisibility(false);
  }
});