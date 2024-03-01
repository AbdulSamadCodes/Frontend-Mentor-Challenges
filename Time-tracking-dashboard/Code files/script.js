

//============Function to add backround images and background colors on dashboard cards==============//

function backgroundHandler()
{
    const dashboardCards = document.querySelectorAll(".dashboard-card");

    dashboardCards.forEach((card) => {

       let computedStyle = window.getComputedStyle(card);
       let value = computedStyle.getPropertyValue("--bg-color");
       card.style.backgroundColor = `${value}`;
 
       let bgUrl = card.dataset.bgPath;
       card.style.backgroundImage = `url("${bgUrl}")`;

    })
}

backgroundHandler();
