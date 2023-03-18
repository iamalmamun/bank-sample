// step-1: Add event listener to the deposit button
document.getElementById('btn-deposit').addEventListener('click', function(){
    // step-2:
    const depositField = document.getElementById('deposit-field');
    const newDepositAmountString = depositField.value;
    const newDepositAmount = parseFloat(newDepositAmountString);
//    get the elements for innertext
const depositTotalElements = document.getElementById('deposit-total');
const previousDepositTotalString = depositTotalElements.innerText;
const previousDepositTotal = parseFloat(previousDepositTotalString)

const currentDepoditTotal = previousDepositTotal + newDepositAmount;
depositTotalElements.innerText = currentDepoditTotal;
// get current balance total
const balanceTotalElement = document.getElementById('balance-total');
const previousBalanceTotalString = balanceTotalElement.innerText;
const previousBalanceTotal = parseFloat(previousBalanceTotalString);
// calculate current total balance
const currentBalanceTotal = previousBalanceTotal + newDepositAmount;
balanceTotalElement.innerText = currentBalanceTotal;
depositField.value = '';
})