import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import AppRouter from './routers/AppRouter';
import configureStore from './store/configureStore';
import { addExpense } from './actions/expenses';
import getVisibleExpenses from './selectors/expenses';
import 'normalize.css/normalize.css';
import './styles/styles.scss';
import 'react-dates/lib/css/_datepicker.css';


const store = configureStore();

store.subscribe(() => {
    const state = store.getState();
    const visibleExpenses = getVisibleExpenses(state.expenses, state.filters)
    console.log(visibleExpenses)
});

store.dispatch(addExpense({ description: 'Water bill', amount: 9800, createdAt: 1569920400000 }));
store.dispatch(addExpense({ description: 'Gas bill', amount: 5000, createdAt: 1570006800000 }));
store.dispatch(addExpense({ description: 'Electricity bill', amount: 7000, createdAt: 1570093200000 }));



const jsx = (
    <Provider store={store}>
        <AppRouter />
    </Provider>
)

ReactDOM.render(jsx, document.getElementById('app'));

