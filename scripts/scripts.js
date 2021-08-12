// NAVBAR
const mobileNavMenu = document.getElementById('nav-menu');
const toggleMenu = document.getElementById('nav-toggle');
const closeMenu = document.getElementById('nav-close');

toggleMenu.addEventListener("click", () => {
    mobileNavMenu.classList.add('show');
    console.log("show");
});

closeMenu.addEventListener("click", () => {
    mobileNavMenu.classList.remove('show');
    console.log("close");
});


// CONTACT FORM
const [...inputs] = document.getElementsByClassName('form__input');

[...inputs].forEach(input => {

    input.addEventListener("input", () => {
        const value = input.value.trim();
        if (value) {
            if (input.name === 'message') {
                // for textarea
                input.parentElement.children[0].dataset.state = "valid";
            } else {
                // for other inputs
                input.parentElement.children[1].dataset.state = "valid";
            }
            
            
            // console.log(input.parentElement.children[0].dataset.state);
        } else {
            if (input.name === 'message') {
                input.parentElement.children[0].dataset.state = "invalid";
            } else {
                input.parentElement.children[1].dataset.state = "invalid";
            }
        }
    })
})