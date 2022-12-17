/********* create variables *********/
// useful variables might be: the cost per day, the number of days selected, and elements on the screen that will be clicked or will need to be modified. 
// Do any of these variables need to be initialized when the page is loaded? 
// When do they need to be reset or updated?


//most of these variables will need to be updated after user input, then it would reset after the clear button it


let calculatedCost = document.getElementById("calculated-cost");
let numDaysSelected = 0;

// color change days of week
let monday = document.getElementById("monday");
let tuesday = document.getElementById("tuesday");
let wed = document.getElementById("wednesday");
let thur = document.getElementById("thursday");
let fri = document.getElementById("friday");


// clear days
let clearButton = document.getElementById("clear-button");


// change rate
let halfDayButton = document.getElementById("half");
let fullDayButton = document.getElementById("full");



/********* colour change days of week *********/
// when the day buttons are clicked, we will apply the "clicked" class to that element, and update any other relevant variables. Then, we can recalculate the total cost.
// added challenge: don"t update the dayCounter if the same day is clicked more than once. hint: .classList.contains() might be helpful here!


monday.addEventListener("click", function()  {
    monday.classList.toggle("clicked");
    if (monday.classList.contains("clicked")) {
      numDaysSelected++;
    } else {
      numDaysSelected--;
    }
    monday.addEventListener("click", calculateCost);
    if (numDaysSelected > 0) {
      calculateCost();
    }});

  tuesday.addEventListener("click", function() {
    tuesday.classList.toggle("clicked");
    if (tuesday.classList.contains("clicked")) {
      numDaysSelected++;
    } else {
      numDaysSelected--;
    }
    tuesday.addEventListener("click", calculateCost);
    if (numDaysSelected > 0) {
      calculateCost();
    }});

  wed.addEventListener("click", function() {
    wed.classList.toggle("clicked");
    if (wed.classList.contains("clicked")) {
      numDaysSelected++;
    } else {
      numDaysSelected--;
    }
    wed.addEventListener("click", calculateCost);
    if (numDaysSelected > 0) {
      calculateCost();
    }});

  thur.addEventListener("click", function() {
    thur.classList.toggle("clicked");
    if (thur.classList.contains("clicked")) {
      numDaysSelected++;
    } else {
      numDaysSelected--;
    }
    thur.addEventListener("click", calculateCost);
    if (numDaysSelected > 0) {
      calculateCost();
    }});

  fri.addEventListener("click", function() {
    fri.classList.toggle("clicked");
    if (fri.classList.contains("clicked")) {
      numDaysSelected++;
    } else {
      numDaysSelected--;
    }
    fri.addEventListener("click", calculateCost);
    if (numDaysSelected > 0) {
      calculateCost();
    }});

  

/********* clear days *********/
// when the clear-button is clicked, the "clicked" class is removed from all days, any other relevant variables are reset, and the calculated cost is set to 0.



clearButton.addEventListener("click", function() {
    
    monday.classList.remove("clicked");
    tuesday.classList.remove("clicked");
    wed.classList.remove("clicked");
    thur.classList.remove("clicked");
    fri.classList.remove("clicked");
    fullDayButton.classList.add("clicked");
    halfDayButton.classList.remove("clicked");
});

  clearButton.addEventListener("click", function() {
    
    numDaysSelected = 0;
});

  clearButton.addEventListener("click", function() {
    
    calculatedCost.innerHTML = numDaysSelected * 0;
});


/********* change rate *********/
// when the half-day button is clicked, set the daily rate to $20, add the "clicked" class to the "half" element, remove it from the "full" element, and recalculate the total cost.



halfDayButton.addEventListener("click", function() {
  
  halfDayButton.classList.add("clicked");

  
  fullDayButton.classList.remove("clicked");
});

fullDayButton.addEventListener("click", function() {
  
    fullDayButton.classList.add("clicked");
  
    
    halfDayButton.classList.remove("clicked");
});

  

  fullDayButton.addEventListener("click", function() {
    numDaysSelected.innerHTML = "$35";
  
    calculatedCost.innerHTML = numDaysSelected * 35;
});

  halfDayButton.addEventListener("click", function() {
    numDaysSelected.innerHTML = "$35";
  
    calculatedCost.innerHTML = numDaysSelected * 20;
});


  function calculateCost() {
    if (fullDayButton.classList.contains("clicked")) {
      calculatedCost.innerHTML = numDaysSelected * 35;
    } else if (halfDayButton.classList.contains("clicked")) {
      calculatedCost.innerHTML = numDaysSelected * 20;
    } else {
      // Set the cost to 0 if no day type is selected
      calculatedCost.innerHTML = 0;
    }
}
// when the full-day button is clicked, the daily rate is set back to $35, the clicked class is added to "full" and removed from "half", and the total cost is recalculated.





/********* calculate *********/
// when a calculation is needed, set the innerHTML of the calculated-cost element to the appropriate value
