
//==============Mobile navbar toggle==============//

function navToggle()
{
  const navTogglers = document.querySelectorAll("[data-nav-toggler]");
  const navbar = document.querySelector("[data-navbar]");
  const overlay = document.querySelector("[data-overlay]");

  navTogglers.forEach((toggler) => {
    toggler.addEventListener("click" , function () {
        navbar.classList.toggle("active");
        overlay.classList.toggle("active");
    })
  })
}

navToggle();

//==============Navbar sublist toggle==============//

function sublistToggle()
{
    const mainLinks = document.querySelectorAll("[data-main-link]");
    const navSublists = document.querySelectorAll("[data-nav-sublist]");

    mainLinks.forEach((link , index) => {

        link.addEventListener("click" , function(event){
            event.preventDefault();
            navSublists[index].classList.toggle("show");
        })
    })
}

sublistToggle();





