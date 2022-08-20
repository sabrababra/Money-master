document.getElementById('claculation-field').addEventListener('click',function(){
    const MyIncome=incomeAmount('income-field');
    const expense=expenseTotal('food-field','rent-field','clothes-field');
    const expenseAmount= setAmount('expenses-filed',expense);
    const balance = MyIncome-expense;
    if(balance<0){
        alert ("Income is less than Expenses");
    }else{
        setAmount('balance-field',balance);
    }
});
document.getElementById('save-btn').addEventListener('click',function(){
    const saveAmount=incomeAmount('saving-field');
    const balanceField=document.getElementById('balance-field');
    const balanceFieldAmount=parseInt(balanceField.innerText);
    const ans= Math.abs(saveAmount/100*balanceFieldAmount);
    const discountAmount= setAmount('discount-field',ans);
    const remain= Math.abs(ans-balanceFieldAmount);
    setAmount('remain-field',remain);
})