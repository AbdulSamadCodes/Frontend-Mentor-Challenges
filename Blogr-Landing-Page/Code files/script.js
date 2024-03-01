
//=============Mobile navbar toggle functionality===============

function navToggle()
{
    const  navbar = document.querySelector("[data-navbar]");
    const  navToggleBtn = document.querySelector(".nav-toggle-btn");
    const navToggleImg = document.querySelector(".nav-toggle-img"); 
    const imgUrl = navToggleImg.src;
    const activeImgUrl = navToggleImg.dataset.src;


    navToggleBtn.addEventListener("click" , function(){
        navbar.classList.toggle("active");

        if(navbar.classList.contains("active")) {navToggleImg.src = activeImgUrl;}

        else{navToggleImg.src = imgUrl;}
       
    })
}

navToggle();


//=============Menu sublist toggle functionality===============

function menuSublistHandler()
{
    const mainLinks = document.querySelectorAll("[data-main-link]");
    const subLists =  document.querySelectorAll("[data-nav-sublist]");

    mainLinks.forEach((link , index) => {
        link.addEventListener("click" , function(event){
            event.preventDefault();
            subLists[index].classList.toggle("active");
    })
    })
}

menuSublistHandler();


//==============Function to change the navbar arrow dark icons to light==================

function toggleNavIcons()
{
    const arrowIcons = document.querySelectorAll(".nav-item > .nav-link img");
    const defaultSrc = "/images/icon-arrow-dark.svg";

    function updateImgSrc()
    {
         arrowIcons.forEach((icon) => {
        if (window.innerWidth >= 992)
        {
            const lightUrl = icon.dataset.activeSrc;
            icon.src = lightUrl;
        }
        else
        {
            icon.src = defaultSrc;
        }
    })
   }

   window.addEventListener("load" , updateImgSrc);
   window.addEventListener("resize", updateImgSrc);
}

toggleNavIcons();
