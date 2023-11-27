import IExpenseItem from "../moels/expense";



const getAllPayeesNames = (expenseItems : IExpenseItem[]) => {

    const uniquePayeeNames : string[] = [];
    expenseItems.forEach ((expenseItem) => {
        let payeeName = expenseItem.payeeName;
        if (!uniquePayeeNames.includes(payeeName)){

            uniquePayeeNames.push(payeeName);
        }

    })

    return uniquePayeeNames;
}

const getTotalContributedAmount = (payeeName : string, expenseItems : IExpenseItem[]) => {
  
    let totalExpense = 0;

    expenseItems.forEach((expenseItem) => {

        if (expenseItem.payeeName ===payeeName){

            totalExpense += expenseItem.price;
        }
    })

    return totalExpense;
}
const getGrandTotalExpenses = (expenseItems : IExpenseItem[]) => {
    
         let totalExpense = 0;
    expenseItems.forEach((expenseItem) =>{
        
        totalExpense += expenseItem.price;
})
        return totalExpense;
}

export {getAllPayeesNames, getGrandTotalExpenses, getTotalContributedAmount}