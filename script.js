const numberHours=document.querySelector(".number-hours")
const barseconds=document.querySelector(".bar-seconds")

const numberElemnt=[];
const barElemnt=[];

////////////////////////
//create number Hours//
//////////////////////

for (let i= 1; i <= 12; i++){
    numberElemnt.push(`<span style="--index:${i};"><p>${i}</p></span>`);
}
numberHours.insertAdjacentHTML("afterbegin", numberElemnt.join(""));

////////////////////////
//create bar seconds///
//////////////////////

for (let i= 1; i <= 60; i++){
    barElemnt.push(`<span style="--index:${i};"><p>${i}</p></span>`);
}