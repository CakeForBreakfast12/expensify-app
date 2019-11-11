import expensesReducer from '../../reducers/expenses';
import expenses from '../fixtures/expenses';
import { encodeStream } from 'iconv-lite';


test('should set default state', () => {
    const state = expensesReducer(undefined, { type: '@@INIT' })
    expect(state).toEqual([])
})

test('should remove expense by id', () => {
    const action = {
        type: 'REMOVE_EXPENSE',
        id: expenses[1].id
    }
    const state = expensesReducer(expenses, action)
    expect(state).toEqual([expenses[0], expenses[2]])
})

test('should not remove expense if id not found', () => {
    const action = {
        type: 'REMOVE_EXPENSE',
        id: '-1'
    }
    const state = expensesReducer(expenses, action)
    expect(state).toEqual(expenses)
})

test('should add an expense', () => {
    const action = {
        type: 'ADD_EXPENSE',
        expense: {
            id: 'Test_New_id',
            description: "Test",
            note: "Test expense description",
            amount: 9999999,
            createdAt: -5000
        }
    }
    const state = expensesReducer(expenses, action)
    expect(state).toEqual([...expenses, action.expense])

})

test('should edit an expense', () => {
    const action = {
        type: 'EDIT_EXPENSE',
        id:expenses[0].id,
        updates:{
            description:"Edited description",
            note:"Edited note",
            amount:999000,
            createdAt:-999000
        }
    }
    const state = expensesReducer(expenses, action)
    expect(state).toEqual([{...action.updates,id:expenses[0].id},expenses[1],expenses[2]])
})

test('should not edit expenses if expense not found', () => {
    const action = {
        type: 'EDIT_EXPENSE',
        id:'-1',
        updates:{
            description:"Edited description",
            note:"Edited note",
            amount:999000,
            createdAt:-999000
        }
    }
    const state = expensesReducer(expenses, action)
    expect(state).toEqual(expenses)
})

test('should set expenses',()=>{
    const action = {
        type:'SET_EXPENSES',
        expenses:[expenses[1]]
    };
    const state = expensesReducer(expenses,action);
    expect(state).toEqual([expenses[1]]);
})