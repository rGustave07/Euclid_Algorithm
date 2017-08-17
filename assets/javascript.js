$(document).ready( function(){

function calculateGCD(firstInput, secondInput){
    if (secondInput === 0) {
        $("#GCD").text(secondInput);
    } else if (firstInput > secondInput){
        secondInput = secondInput - firstInput;
        calculateGCD(firstInput, secondInput);
    }

}


})
