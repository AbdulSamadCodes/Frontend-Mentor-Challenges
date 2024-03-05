// *---NAVBAR TOGGLR FUNCTIONALITY-------

const navOpenBtn = document.querySelector(".open-nav-btn")
const navCloseBtn = document.querySelector(".close-nav-btn")
const overlay = document.querySelector(".overlay")
const navbarList = document.querySelector(".navbar-list")

navOpenBtn.addEventListener("click",() => {
    navbarList.style.top = "0px"
    navbarList.style.right = "0px"
    navCloseBtn.classList.toggle("active")
    overlay.classList.toggle("active")
})

navCloseBtn.addEventListener("click",() => {
    navbarList.style.top = "0px"
    navbarList.style.right = "-1500px"
    navCloseBtn.classList.toggle("active")
    overlay.classList.toggle("active")
})





