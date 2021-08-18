
// //zoom meeting
// const depositBtn = document.getElementById('deposit-btn');
// const withdrawBtn = document.getElementById('withdraw-btn');

// depositBtn.addEventListener('click', function(){
//     const depositTotal  = document.getElementById('deposit-total');
//     const depositTotalText = depositTotal.innerText;
//     const depositTotalAmount = parseFloat(depositTotalText);
//     console.log(depositTotalAmount);

//     const newDeposit = document.getElementById('deposit-input');
//     const newDepositText = newDeposit.value;
//     const newDepositAmount = parseFloat(newDepositText);
//     depositTotal.innerText = newDepositAmount + depositTotalAmount;
//     newDeposit.value = " ";


//     const balanceTotal  = document.getElementById('balance-total');
//     const balanceTotalText = balanceTotal.innerText;
//     const balanceTotalAmount = parseFloat(balanceTotalText);
//     console.log(balanceTotalAmount);


//     balanceTotal.innerText = balanceTotalAmount + newDepositAmount;
   
// })

// withdrawBtn.addEventListener('click', function(){
//     console.log(withdrawBtn);
//     const withdrawTotal  = document.getElementById('withdraw-total');
//     const withdrawTotalText = withdrawTotal.innerText;
//     const withdrawTotalAmount = parseFloat(withdrawTotalText);
//     console.log(withdrawTotalAmount);


//     const newWithdraw = document.getElementById('withdraw-input');
//     const newWithdrawText = newWithdraw.value;
//     const newWithdrawAmount = parseFloat(newWithdrawText);
//     withdrawTotal.innerText = withdrawTotalAmount + newWithdrawAmount;
//     newWithdraw.value = " ";



//     const balanceTotal  = document.getElementById('balance-total');
//     const balanceTotalText = balanceTotal.innerText;
//     const balanceTotalAmount = parseFloat(balanceTotalText);

//     balanceTotal.innerText = balanceTotalAmount - newWithdrawAmount; 

// })




const depositBtn = document.getElementById('deposit-btn');
const withdrawBtn = document.getElementById('withdraw-btn');


depositBtn.addEventListener('click', function (){
    const depositTotal = document.getElementById('deposit-total');
    const depositTotalText = depositTotal.innerText;
    const depositTotalAmount = parseFloat(depositTotalText)
    console.log(depositTotalAmount);


    const newDeposit = document.getElementById('deposit-input');
    const newDepositText = newDeposit.value;
    const newDepositAmount = parseFloat(newDepositText );
    depositTotal.innerText = newDepositAmount + depositTotalAmount;
    // newDeposit.value = " ";

    const newBalance = document.getElementById('balance-total');
    const newBalanceText = newBalance.innerText;
    const newBalanceAmount = parseFloat(newBalanceText);
    newBalance.innerText = newBalanceAmount + newDepositAmount;

})



withdrawBtn.addEventListener('click', function (){
    console.log('btn withdraw work');
})

