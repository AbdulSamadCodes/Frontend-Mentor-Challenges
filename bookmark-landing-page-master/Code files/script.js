"use strict"

//-------Function to add events on elements----

const addEvents = (elem , type , callback) => {
    if(elem.length > 1)
    {
        for (let i = 0 ; i < elem.length ; i++)
        {
        elem[i].addEventListener(type ,callback);
        }
    }
    else  
    {

        elem.addEventListener(type ,callback);
    }    
}

const navTogglers = document.querySelectorAll("[data-nav-toggler]");
const headerContainer = document.querySelector(".header .container ");
const navbar =  document.querySelector("[data-navbar]");



//-------Function to toggle navbar on mobile view----

const navToggle = function ()  {
      navbar.classList.toggle("active");
}

addEvents(navTogglers , "click" , navToggle);


//------------Header scroll animation------------

const header = document.querySelector(".header");



window.addEventListener("scroll" , function headerScrolll(){
    header.classList[window.scrollY > 90 ? "add" : "remove"] ("active");
});


console.log(header);





