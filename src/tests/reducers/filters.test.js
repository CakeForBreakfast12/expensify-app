import filtersReducer from '../../reducers/filters';
import moment from 'moment';

test('should setup default filter values', () => {
    const state = filtersReducer(undefined, { type: '@@INIT' })
    expect(state).toEqual({
        text: '',
        sortBy: 'date',
        startDate: moment().startOf('month'),
        endDate: moment().endOf('month')
    })
})

test('should set sortBy to amount', () => {
    const state = filtersReducer(undefined, { type: 'SORT_BY_AMOUNT' })
    expect(state.sortBy).toBe('amount')
})

test('should set sortBy to date', () => {
    const currentState = {
        text: '',
        startDate: undefined,
        endDate: undefined,
        sortBy: 'amount'
    }

    const state = filtersReducer(currentState, { type: 'SORT_BY_DATE' })
    expect(state.sortBy).toBe('date')
})

test('should set text filter', () => {
    const text = '123Test';
    const action = {
      type: 'SET_TEXT_FILTER',
      text
    };
    const state = filtersReducer(undefined, action);
    expect(state.text).toBe(text);
  });

test('should set startDate filter', () => {
    const newDate = moment(0).add(4, "days").valueOf()
    const state = filtersReducer(undefined, { type: 'SET_START_DATE', startDate: newDate })
    expect(state.startDate).toBe(moment(0).add(4, "days").valueOf())
})

test('should set endDate filter', () => {
    const newDate = moment(0).add(1, "year").valueOf()
    const state = filtersReducer(undefined, { type: 'SET_END_DATE', endDate: newDate })
    expect(state.endDate).toBe(moment(0).add(1, "year").valueOf())
})