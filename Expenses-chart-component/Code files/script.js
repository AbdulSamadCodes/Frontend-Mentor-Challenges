
//----Function to fetch JSON data------

const path = "data.json";

async function fetchData()
{
    try
    {
    const response = await fetch(path);
    const data = await response.json();
    return  data;
    }

    catch
    {

    }
}


const expenseLine = document.querySelectorAll("[data-expense-line]");

//---Function to display expense graph on chart

async function displayGraph()
{
    const priceArray = await fetchData();

    expenseLine.forEach((element , index) => {

       let elementHeight = priceArray[index].amount;

       element.style.height = `${elementHeight * 2}px`; 

    })

}

displayGraph();

//--------Function to Render expenses amount-----------//


const expensesAmount = document.querySelectorAll("[data-expense-price]");


async function displayAmount()
{ 
     const priceArray = await fetchData();

      expenseLine.forEach((element ,index) => {
       element.addEventListener("click" , function(){

        const amount = priceArray[index].amount;

        expensesAmount[index].textContent = `$` + amount;

        expensesAmount[index].style.opacity = "1";

       })
     })
}
displayAmount();


















