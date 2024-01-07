<<<<<<< HEAD
// * Email Validation

let emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
let signUpForm = document.forms[0]
let emailInput = document.querySelector("input")
let signUpCard = document.querySelector(".card")
let successcard = document.querySelector(".success-message")
let errorSpan = document.querySelector(".error-span")


signUpForm.addEventListener("submit",(event) => {

    event.preventDefault()
    let emailInputValue  = emailInput.value;

    if(emailRegex.test(emailInputValue))
    {
        signUpCard.classList.add("hidden")
        successcard.classList.add("active")
        emailInput.classList.remove("error")
        errorSpan.innerText = "";
    }
    else
    {
        emailInput.classList.add("error")
        errorSpan.innerText = "Valid Email Required";
    }
})




=======
// * Email Validation

let emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
let signUpForm = document.forms[0]
let emailInput = document.querySelector("input")
let signUpCard = document.querySelector(".card")
let successcard = document.querySelector(".success-message")
let errorSpan = document.querySelector(".error-span")


signUpForm.addEventListener("submit",(event) => {

    event.preventDefault()
    let emailInputValue  = emailInput.value;

    if(emailRegex.test(emailInputValue))
    {
        signUpCard.classList.add("hidden")
        successcard.classList.add("active")
        emailInput.classList.remove("error")
        errorSpan.innerText = "";
    }
    else
    {
        emailInput.classList.add("error")
        errorSpan.innerText = "Valid Email Required";
    }
})




>>>>>>> 7a0f1722312db2b8997f4fa48138d45030f4725a
