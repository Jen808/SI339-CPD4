document.addEventListener("DOMContentLoaded", () => {
    const toggleMenu = document.getElementById("toggle-menu");
    const navbar = document.getElementById("navbar");

    toggleMenu.addEventListener("click", () => {
       navbar.classList.toggle("active");
       toggleMenu.classList.toggle("active"); // Add active class to the toggle-menu to animate lines
    });
 });