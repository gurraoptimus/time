const numberHours=document.querySelector(".number-hours")

const numberElemnt=[];

////////////////////////
//create number Hours//
//////////////////////

for (let i= 1; i <=12; i++){
    numberElemnt.push(<span style=""><p>${i}</p></span>);
}
numberHours.insertAdjacentHTML("afterbegin", numberElemnt.join(""));
console.log(numberElemnt);