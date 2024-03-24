
const calculatorForm = document.querySelector("[data-form]");
const inputWrappers = document.querySelectorAll("[data-input-wrapper]");
const errorSpans = Array.from(document.querySelectorAll("[data-error-message]"));
const inputs = Array.from(document.querySelectorAll("[data-input_fields]"));
const labels = document.querySelectorAll("[data-label]");

const daysInput = document.querySelector("[data-day-input]");
const monthsInput = document.querySelector("[data-month-input]");
const yearsInput = document.querySelector("[data-year-input]");

//Function to set errors

function setError(element,message ,elementIndex){  
  const errorSpan = element.querySelector("[data-error-message]");

  errorSpan.textContent = message;
  labels[elementIndex].style.color = "hsl(0, 100%, 67%)";
  inputs[elementIndex].style.borderColor = "hsl(0, 100%, 67%)";
}

//Function to remove errors

function removeErrors(errorElements){  
  errorElements.forEach((element,index) => {
    element.textContent = "";
    labels[index].style.color = "hsl(0, 1%, 44%)";
    inputs[index].style.borderColor = "hsl(0, 1%, 44%)";
   });
}

//Helper function to validate day input

function validateDay(){
  const day = daysInput.value;  
  const daysRegex = /^(0?[1-9]|[12]\d|3[01])$/; 
  const index = inputs.indexOf(daysInput);

  if(day === ""){
    setError(daysInput.parentElement,"This field is required",index );
  } else if(!daysRegex.test(day)){
    setError(daysInput.parentElement,"Must be  a valid day" ,index);
  } else{
    removeErrors(errorSpans);
  } 
}

//Helper function to validate month input

function validateMonth(){
 const month = monthsInput.value;
 const monthRegex = /^(0?[1-9]|1[0-2])$/;
 const index = inputs.indexOf(monthsInput);
  
 if(month === ""){
  setError(monthsInput.parentElement,"This field is required" , index);
 } else if(!monthRegex.test(month)){
  setError(monthsInput.parentElement,"Must be  a valid month" , index);  
} else{
  removeErrors(errorSpans);
 } 
}

//Helper function to validate month input

function validateYear(){
  const year = yearsInput.value;
  const yearsRegex = /^\d{4}$/;
  const index = inputs.indexOf(yearsInput);

  if(year === ""){
    setError(yearsInput.parentElement,"This field is required" , index);
  } else if(!yearsRegex.test(year)){
    setError(yearsInput.parentElement,"Must be  a valid year" , index);  
  } else{
    removeErrors(errorSpans);
  } 
}

//Helper function to validate whether input date is not from future

function validateDates(){
  const day =  daysInput.value; 
  const month = monthsInput.value; 
  const year = yearsInput.value;

  const currentDate = new Date().getTime();
  const inputDate = new Date(`${year}-${month}-${day}`)

  if(currentDate < inputDate.getTime()){
    inputWrappers.forEach((input , index) => setError(input,"Date must be from past",index))
  } else{
    removeErrors(errorSpans);
  }
   
  //Checking whether the input month is  longmonth or not
  if(inputDate.getDate() !== Number(daysInput.value)){
    setError(daysInput.parentElement,"Must be a valid date",inputs.indexOf(daysInput));
  }
}

//Function to validate inputs

function validateInputs(){
  const isRemoveErrors = errorSpans.every((errorSpan) => errorSpan.textContent.trim() === "");
  if (isRemoveErrors) removeErrors(errorSpans);
   
  validateDay();
  validateMonth();
  validateYear();
}

//Adding eventlistener on form

calculatorForm.addEventListener("submit", (e) => {
  e.preventDefault();
  validateDates();   
  validateInputs(); 
});

const eventsArray = [validateDay , validateMonth , validateYear];

//Adding eventlisteners on inputs

inputs.forEach((input , index) => {
  input.addEventListener("input",eventsArray[index]);
  input.addEventListener("blur",() => {
    removeErrors(errorSpans);
  });
});











