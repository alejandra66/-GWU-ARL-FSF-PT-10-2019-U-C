var tip1 = document.querySelector("#tip-percentage");
var total = document.querySelector("#total");
var submit = document.querySelector("#submit");

function addTip()
{
    event.preventDefault();
    var tipPercentage = tip1.value * .01;
    var totalCalculation = total.value;

    var tipCalculated = (totalCalculation * tipPercentage).toFixed(2);

    document.querySelector("#tip-amount").textContent = tipCalculated;


}

submit.addEventListener("click", addTip);