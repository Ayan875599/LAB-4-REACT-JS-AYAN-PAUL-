
import IExpenseItem from "../moels/expense"
import {getGrandTotalExpenses, getTotalContributedAmount, getAllPayeesNames} from "../services/expense-utils"

import{Table} from "react-bootstrap"
type PendingExpensesByPayeesModel = {
    expenseItems : IExpenseItem[];
}
const PendingExpensesByPayees = ({expenseItems} : PendingExpensesByPayeesModel) => {

    const getPendingAmount = (payeeName : string) => {

        const grandTotal =  getGrandTotalExpenses(expenseItems);

        const splitUpAmount = grandTotal/ 2;
        const totalContributionByPayee = getTotalContributedAmount(payeeName, expenseItems);


        if (totalContributionByPayee >= splitUpAmount){
        
            return 0;
    
    }else{
        
        return (splitUpAmount - totalContributionByPayee);
        
    }
    }
    return (
        <div>

            <h3>Pending Amount - View</h3>

<Table striped bordered hover>
      <thead>
        <tr>
          <th>#</th>
          
          <th>Payee Name</th>
          
          <th>Pending Amount</th>
        </tr>
      </thead>
      <tbody>

        {
            getAllPayeesNames(expenseItems).map( (payeeName, index) => {

                return(
                    <tr>
                        <td>{(index+1)}</td>
                        <td>{payeeName}</td>
                        <td>{getPendingAmount(payeeName)}</td>
                    </tr>
                )
            } )
        }


      </tbody>
    </Table>

        </div>

    )
}

export {PendingExpensesByPayees}