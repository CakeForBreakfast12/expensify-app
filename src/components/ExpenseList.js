import React from 'react';
import { connect } from "react-redux";
import ExpenseListItem from './ExpenseListItem';
import selectExpenses from '../selectors/expenses';



export const ExpenseList = (props) => {
    return (
        <div>
            {
                props.expenses.length===0?(
                    <div>No expenses</div>
                ): (
                    <div>You have {props.expenses.length} expenses:{props.expenses.map((expense) => <ExpenseListItem key={expense.id} {...expense} />)}</div>)
            }
           
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        expenses: selectExpenses(state.expenses, state.filters)
    }
}

export default connect(mapStateToProps)(ExpenseList);

