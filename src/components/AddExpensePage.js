import React from 'react';
import ExpenseForm from './ExpenseForm';
import { startAddExpense, startSetExpenses } from '../actions/expenses';
import { connect } from 'react-redux';

export class AddExpensePage extends React.Component {
    onSubmit = expense => { this.props.startAddExpense(expense); this.props.history.push('/') };
    onRefresh = () => { this.props.startSetExpenses(); this.props.history.push('/') }

    render() {
        return (
            <div>
                <h1>Add Expense</h1>
                <ExpenseForm
                    onSubmit={this.onSubmit}
                />
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => ({
    startAddExpense: (expense) => dispatch(startAddExpense(expense)),
    startSetExpenses: () => dispatch(startSetExpenses())
})

export default connect(undefined, mapDispatchToProps)(AddExpensePage);