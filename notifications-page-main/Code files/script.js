<<<<<<< HEAD
"use strict"


//-----Notifications mark read functionality---------//

const markReadButton = document.querySelector("[data-markread]");
const openNotifications = document.querySelectorAll("[data-open-notification]");
const markers = document.querySelectorAll("[data-marker]");

markReadButton.addEventListener("click", (event) => {
    event.preventDefault();

    for (let i = 0; i < openNotifications.length; i++) {
        openNotifications[i].style.backgroundColor = "#fff";
        markers[i].style.display = "none";
    }
})



//-----Functionality  to toggle Privatemeesage---------//

const privateMessage = document.querySelector("[data-privatemessage]");
const messageToggler = document.querySelector("[data-message-toggler]");


messageToggler.addEventListener("click", (event) => {
    event.preventDefault();
    privateMessage.classList.toggle("active");
})













=======
"use strict"


//-----Notifications mark read functionality---------//

const markReadButton = document.querySelector("[data-markread]");
const openNotifications = document.querySelectorAll("[data-open-notification]");
const markers = document.querySelectorAll("[data-marker]");

markReadButton.addEventListener("click", (event) => {
    event.preventDefault();

    for (let i = 0; i < openNotifications.length; i++) {
        openNotifications[i].style.backgroundColor = "#fff";
        markers[i].style.display = "none";
    }
})



//-----Functionality  to toggle Privatemeesage---------//

const privateMessage = document.querySelector("[data-privatemessage]");
const messageToggler = document.querySelector("[data-message-toggler]");


messageToggler.addEventListener("click", (event) => {
    event.preventDefault();
    privateMessage.classList.toggle("active");
})













>>>>>>> 9cb965259dbaae3b40a4ca76ff7ae50fba62a78e
