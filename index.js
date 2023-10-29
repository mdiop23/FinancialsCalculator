"use strict"; 
 
window.onload = init; 
 
function init() { 
   const calculateBtn = document.getElementById("calculateBtn"); 
   calculateBtn.onclick = onCalculateBtnClicked;  
   const convert2Btn = document.getElementById("convert2Btn"); 
   convert2Btn.onclick = onConvert2BtnClicked
} 

// input values

function onCalculateBtnClicked(){
    const principalField = document.getElementById("principalField");
    const interestField = document.getElementById("interestField");
    const loanLengthField = document.getElementById("loanLengthField");

    let principal = Number(principalField.value);
    let yearlyInterest = Number(interestField.value);
    let loanLengthInYears = Number(loanLengthField.value);

    // calculations


    let monthlyInterest = yearlyInterest / 100 / 12 ;
  
    let loanLengthInMonths = loanLengthInYears * 12;



    let monthlyPayment = principal * 
            (
                (monthlyInterest)
                /
                (1 - (1 + monthlyInterest) ** -loanLengthInMonths)
            );

    monthlyPayment = monthlyPayment.toFixed(2);

    let totalAmount = (monthlyPayment * loanLengthInMonths) - principal;




    // outputs


    const outputMonthlyPayment = document.getElementById("outputMonthlyPayment");
    const outputTotalAmount = document.getElementById("outputTotalAmount");   

    outputMonthlyPayment.value = monthlyPayment;
    outputTotalAmount.value = totalAmount;


}