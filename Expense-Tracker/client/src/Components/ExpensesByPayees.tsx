import {Table} from "react-bootstrap"

import IExpenseItem from "../moels/expense";

import{getAllPayeesNames, getTotalContributedAmount, getGrandTotalExpenses} from "../services/expense-utils"

type ExpenseByPayeesModel = {
    expenseItems : IExpenseItem[];
}

const ExpenseByPayees = ({expenseItems} : ExpenseByPayeesModel ) => {




    return (
        <div>
                <h3>Payee View</h3>

            <Table striped bordered hover>
      <thead>
        <tr>
          <th>#</th>
          
          <th>Payee Name</th>
          
          <th>Expense Price</th>
        </tr>
      </thead>
      <tbody>

        {
            getAllPayeesNames(expenseItems).map( (payeeName, index) => {

                return(
                    <tr>
                        <td>{(index+1)}</td>
                        <td>{payeeName}</td>
                        <td>{getTotalContributedAmount(payeeName, expenseItems)}</td>
                    </tr>
                )
            } )
        }

        <tr>
            <td></td>
            <td>Grand Total</td>
            <td>{getGrandTotalExpenses (expenseItems)}</td>
        </tr>

      </tbody>
    </Table>


        </div>
    )
}

export {ExpenseByPayees}