
//elements
            const dayInput = document.getElementById("day");
            const monthInput =document.getElementById("month");
            const yearInput =document.getElementById("year");

            const resultYear = document.getElementById("result-year");
            const resultMonth = document.getElementById("result-month");
            const resultDay = document.getElementById("result-day");

            const errorDay = document.querySelector(".error-day");
            const errorMonth = document.querySelector(".error-month");
            const errorYear = document.querySelector(".error-year");

            const arrowBtn = document.querySelector(".arrow-svg");
            const errorStyle = '0.5px solid var(--Light-red)';

// calculate button       

arrowBtn.addEventListener("click",()=>{
    const dayInputV=dayInput.value;
    const monthInputV=monthInput.value;
    const yearInputV=yearInput.value;
    const birthday=`${yearInputV}-${monthInputV}-${dayInputV}`
    //age calculation
    let years = new Date().getFullYear() - new Date(birthday).getFullYear();
    let months = new Date().getMonth() - new Date(birthday).getMonth();
    let days = new Date().getDate() - Number(dayInputV);

    if (months < 0) {
        years = years - 1;
        months = months + 12;
      }
    
      if (days < 0) {
        days += getNoOfDays(yearInputV, monthInputV- 1);
      }
    
      // Display Values
      resultDay.textContent= days;
      resultMonth.textContent= months;
      resultYear.textContent = years;
    
}
);
// Get Number of Days in a particular months
function getNoOfDays(y, m) {
    return new Date(y, m, 0).getDate();
  }

  // On Blur day validation
dayInput.addEventListener('blur', () => {
  validateDay();
});

// Validate Day function
const validateDay = () => {
  const dayInputV=dayInput.value;
    const monthInputV=monthInput.value;
    const yearInputV=yearInput.value;
  if (dayInputV == '') {
    showMessage(dayInput, 'This field is required', errorStyle);
    return false;
  } else if (!validDay(yearInputV, monthInputV, dayInputV)) {
    showMessage(dayInput, 'Must be a valid day', errorStyle);
    return false;
  } else {
    showMessage(dayInput, '', '');
    return true;
  }
};
// Validate Day
function validDay(y, m, d) {
  if (d > getNoOfDays(y, m) || d < 1) return false;
  return true;
}


// On Blur month validation
monthInput.addEventListener('blur', () => {
  validateMonth();
});

const validateMonth = () => {
  const monthInputV = monthInput.value;
  if (monthInputV == '') {
    showMessage(monthInput, 'This field is required', errorStyle);
    return false;
  } else if (!validMonth(monthInputV)) {
    showMessage(monthInput, 'Must be a valid month', errorStyle);
    return false;
  } else {
    showMessage(monthInput, '', '');
    return true;
  }
};
// validate Month
function validMonth(m) {
  if (m > 12 || m < 1) return false;
  return true;
}

// on Blur Year validate
yearInput.addEventListener('blur', () => {
  validateYear();
});

const validateYear = () => {
  const yearInputV = yearInput.value;
  const monthInputV = monthInput.value;
  const dayInputV = dayInput.value;
  if (yearInputV == '') {
    showMessage(yearInput, 'This field is required', errorStyle);
    return false;
  } else if (!validYear(yearInputV, monthInputV, dayInputV)) {
    showMessage(yearInput, 'Must be in past', errorStyle);
    return false;
  } else {
    showMessage(yearInput, '', '');
    return true;
  }
};
// Validate Year
function validYear(y, m, d) {
  const secondDate = new Date();
  const firstDate = new Date(`${y}-${m}-${d}`);
  if (firstDate.setHours(0, 0, 0, 0) <= secondDate.setHours(0, 0, 0, 0)) {
    return true;
  }
  return false;
}

  // Display Message
function showMessage(elem, msg, border) {
  elem.style.border = border;
  elem.nextElementSibling.innerText = msg;
}
