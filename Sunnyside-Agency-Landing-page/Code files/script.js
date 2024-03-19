
//============Mobile navbar toggle functionality

function navToggle(){
    const navbar = document.querySelector("[data-navbar]");
    const navToggleBtn = document.querySelector("[data-nav-toggler");
    const navLinks = document.querySelectorAll("[data-navbar-link]");

    const navOpen = () => {
      navbar.classList.toggle("active");
    }

    navToggleBtn.addEventListener("click" ,navOpen);

    const navClose = () => {
      navbar.classList.remove("active");
    }

    navLinks.forEach((link) => {
        link.addEventListener("click" , navClose);
    })

}

navToggle();