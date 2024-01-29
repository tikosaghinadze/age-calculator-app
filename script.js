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
const resultDay=document.getElementById("result-day");

const errorDay=document.querySelector(".error-day");
const errorMonth=document.querySelector(".error-month");
const errorYear=document.querySelector(".error-year");



const currentDay=23;
const currentMonth=1;
const currentYear=2024;

if(yearInput>currentYear){
errorYear.textContent="Must be in the past"
}else{
    let resultY=currentYear-yearInput;
    resultYear.textContent=resultY;
}
if(monthInput<1 || monthInput>12){
    errorMonth.textContent="Must be a valid month"
}else{
    let resultM=currentMonth-monthInput;
    if(resultM<1){
        resultM=resultM+12;
        resultMonth.textContent=resultM;
    }else{
        resultMonth.textContent=resultM;
    }
}
if(dayInput<1 || dayInput>31){
    errorDay.textContent="Must be a valid day";
}else{
    let resultD=currentDay-dayInput;
    if(resultD<1){
        resultD=resultDay+31;
        resultDay.textContent=resultD;
    }else{
        resultDay.textContent=resultD;
    }
}