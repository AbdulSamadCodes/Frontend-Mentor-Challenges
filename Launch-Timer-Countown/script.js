
let dayText = document.querySelector(".days-p")
let hoursText = document.querySelector(".hours-p")
let minutesText = document.querySelector(".minutes-p")
let secondsText = document.querySelector(".seconds-p")

//Function to count the time and timer

const countdown = () => {

    let date = new Date()
    let countdownDate = new Date("2024 01 28").getTime()
    let currentTime = date.getTime()
    let distance = countdownDate - currentTime
    
    let days = Math.floor(distance / (1000 * 60 * 60 * 24))
    let hours = Math.floor(distance % (1000 * 60 * 60 * 24) / (1000 * 60 * 60))
    let minutes = Math.floor(distance % (1000 * 60 * 60 ) / (1000 * 60 ))
    let seconds = Math.floor(distance % (1000 * 60 ) / (1000))

   dayText.innerHTML = days;
   hoursText.innerHTML = hours;
   minutesText.innerHTML = minutes;
   secondsText.innerHTML = seconds;
}

//Calling the function after 1 seconds interval

setInterval(countdown,1000)

