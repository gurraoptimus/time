const numberHours=document.querySelector(".number-hours")

const numberElemnt=[];

////////////////////////
//create number Hours//
//////////////////////

for (let i= 1; i <=12; i++){
    numberElemnt.push('<span style="--index:${i};"><p>${i}</p></span>');
}
numberHours.insertAdjacentHTML("afterbegin", numberElemnt.join(""));