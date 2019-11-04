import { addExpense, editExpense, removeExpense } from '../../actions/expenses';

test('sould setup remove expense action object', () => {
    const action = removeExpense({ id: '123abc' })
    expect(action).toEqual({
        type: "REMOVE_EXPENSE",
        id: '123abc'
    });
});

test('sould setup edit expense action object', () => {
    const action = editExpense('123abc', { note: 'New note value' })
    expect(action).toEqual({ type: "EDIT_EXPENSE", id: '123abc', updates: { note: 'New note value' } })
})

test('should setup add expense action object with provided values', () => {
    const expenseData = {
        description: '123abc',
        note: 'New note value',
        amount: 120,
        createdAt: 1485623626
    }
    const action = addExpense(expenseData)
    expect(action).toEqual({
        type: "ADD_EXPENSE",
        expense: {
            ...expenseData,
            id: expect.any(String)
        }
    })
})

test('should setup add expense action object with default values', () => {
    expect(addExpense()).toEqual({
        type: "ADD_EXPENSE",
        expense: {
            description: '',
            note: '',
            amount: 0,
            createdAt: 0,
            id: expect.any(String)
        }
    })
})