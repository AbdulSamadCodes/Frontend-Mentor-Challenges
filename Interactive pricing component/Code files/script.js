

let isYearly = false;
//-----Function to toggle between monthly and  yearly mode------//

function togglerHandler()
{
    
    let toggler = document.querySelector(".check-wrapper");
    toggler.addEventListener("click" , function (){
    this.classList.toggle("active");
    isYearly = isYearly ? false : true;
    })

}

togglerHandler();

//------------Function to render card price----------------


function  priceRenderer()
{
    const rangeInput = document.querySelector(".input-range");
    const viewsCounter = document.querySelector(".views-counter");
    const cardPrice = document.querySelector(".card-price span");

    const prices = {
        0:{
         "10K" : 8.00
        },
        1:{
         "50K" : 12.00,
          },
        2:
        {
         "100K":16.00,
        },
        3:{
         "500K":24.00,
        },
        4:{
         "1M":36.00
        }
    }

    rangeInput.oninput = function(){

        let value = Math.floor(Number(rangeInput.value /  25));
        let priceObj =  prices[value];
        for (let views in priceObj )
        {
            viewsCounter.textContent = views;
            if(isYearly)
            {
                let yearlyPrice = priceObj[views];

                //-----For 25% discount-----

                let discountAmount = (yearlyPrice * 25) / 100;
                let discountedPrice = yearlyPrice - discountAmount; 
                cardPrice.textContent = discountedPrice;

            }
            else
            {
            cardPrice.textContent = priceObj[views];
            }
        }
    }
}

priceRenderer();





