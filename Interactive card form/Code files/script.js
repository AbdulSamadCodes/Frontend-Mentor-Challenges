

//=====Function to change background image on desktop size===

function changeBackground()
{
    const bgImage = document.querySelector(".bg-img");

    const desktopUrl = bgImage.dataset.desktopImg;
    const mobileUrl = bgImage.src;

    const changeBg  = () =>  {

        (window.innerWidth >= 768) ?  bgImage.src = desktopUrl :bgImage.src =  mobileUrl ;
      
    }

    window.addEventListener("resize" , changeBg);
    window.addEventListener("load", changeBg);
}

changeBackground();


//=====Function to update card's  information===

function updateCards()
{
    const cardNumber  = document.querySelector(".card-number");
    const userName = document.querySelector(".name");
    const month = document.querySelector(".month");
    const year = document.querySelector(".year");
    const cvcNumber = document.querySelector(".cvc-number");

    const inputs = document.querySelectorAll(".input");

    const  elementsArray = [userName,cardNumber,month,year,cvcNumber];


    elementsArray.forEach((elem , index) => {
        let input = inputs[index];

        input.addEventListener("input" , function(){
             elem.innerText = this.value;
        })
    })
}

updateCards();

//=====Function to handle all  validations===

function validationHandler()
{
    const form = document.querySelector(".form");
    const inputs = document.querySelectorAll(".input");

    const removeErrors = () =>
    {
        const spanErrors =  document.querySelectorAll(".error-span");
        if(spanErrors)
        {
            spanErrors.forEach((errorSpan) => {
            errorSpan.style.display = "none";
          })
        }

        inputs.forEach((input) => input.style.borderColor = "hsl(278, 68%, 11%)");

    }

    const setErrors = (element , error) => {
        let errorlist = element.parentNode.querySelectorAll(".error-span");

        errorlist.forEach((errorSpan) => {
            if(errorSpan.textContent === error)
            {
                element.parentNode.removeChild(errorSpan);
            }
        })

        const spanError = document.createElement("span");
        spanError.className = "error-span";
        spanError.textContent = error;

        element.parentNode.appendChild(spanError);
        element.style.borderColor = "hsl(0, 100%, 66%)";
    }

    const validateErrors = () => {

        removeErrors();
        let numberPattern = /^[0-9]+$/;
        
        inputs.forEach((input) => {

            if(input.value === "") 
            {
             setErrors(input , "Cannot be blank");
            }

            if(input.id === "number")
            {
              if(numberPattern.test(input.value) === false) 
              {
                setErrors(input , "Wrong format , numbers only");
              }

            }
        })
    }

    form.addEventListener("submit" , function (event) {
        event.preventDefault();
        validateErrors();
    })
}

validationHandler();