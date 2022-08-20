function incomeAmount(incomeId){
    const fieldValue= document.getElementById(incomeId);
    const fieldValueAmount= parseInt(fieldValue.value); 
    fieldValue.value='';
    return fieldValueAmount;

}
function expenseTotal(idOne,idTwo,idThree){
    const expenseOne=incomeAmount(idOne);
    const expenseTwo=incomeAmount(idTwo);
    const expenseThree=incomeAmount(idThree);
    const finalExpense=expenseOne+expenseTwo+expenseThree;
    return finalExpense;
}
function setAmount(setId,amount){
    const forSet= document.getElementById(setId);
    forSet.innerText=amount;
}
function forSave(){
    const saveField=incomeAmount()
}
