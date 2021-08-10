const mobileNavMenu = document.getElementById('nav-menu');
const toggleMenu = document.getElementById('nav-toggle');
const closeMenu = document.getElementById('nav-close');

toggleMenu.addEventListener("click", () => {
    mobileNavMenu.classList.add('show');
    console.log("show");
})

closeMenu.addEventListener("click", () => {
    mobileNavMenu.classList.remove('show');
    console.log("close");
})