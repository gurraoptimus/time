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
    barElemnt.push(`<span style="--index:${i};"><p></p></span>`);
}
barseconds.insertAdjacentHTML("afterbegin", barElemnt.join(""));

const handHours=document.querySelector(".hand.hours");
const handMinutes=document.querySelector(".hand.minutes");
const handSeconds=document.querySelector(".hand.seconds");

function getCurrentTime(){
    let date = new Date();
    let CurrentHours = date.getHours();
    let CurrentMinutes = date.getMinutes();
    let CurrentSeconds = date.getSeconds();
    
    handSeconds.Style.transform = 'rotate(${currentSeconds * 6}deg)';
}

///////////////////////////////////////////////
//call getCurrentTime function on page load///
/////////////////////////////////////////////
getCurrentTime();