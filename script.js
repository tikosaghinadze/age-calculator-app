/*****************/
/*add click feature*/
/*****************/
const arrowBtn=document.querySelector(".arrow-svg")
arrowBtn.addEventListener("click",()=>{
    arrowBtn.style.backgroundColor="black"
})
/*****************/
/*age calculate form*/
/*****************/
const dayInput=Number(document.getElementById("day").value);
const monthInput=Number(document.getElementById("month").value);
const yearInput=Number(document.getElementById("year").value);

const resultYear=document.getElementById("result-year");
const resultMonth=document.getElementById("result-month");
const resultDay=document.getElementById("result-dat");

const errorDay=document.querySelector(".error-day");
const errorMonth=document.querySelector(".error-month");
const errorYear=document.querySelector(".error-year");


const currentDay=23;
const currentMonth=1;
const currentYear=2024;

if(yearInput>currentYear){

}