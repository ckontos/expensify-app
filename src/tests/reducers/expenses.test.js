import expensesReducer from '../../reducers/expenses';
import expenses from '../fixtures/expenses';

test('Should set default state', () => {
    const state = expensesReducer(undefined, { type: '@@INIT' });
    expect(state).toEqual([]);
});

test('Should delete expense by id', () => {
    const action = {
        type: 'REMOVE_EXPENSE',
        id: expenses[1].id
    };
    const state = expensesReducer(expenses, action);
    expect(state).toEqual([expenses[0], expenses[2]]);
});

test('Should not delete expense by id if id is not valid', () => {
    const action = {
        type: 'REMOVE_EXPENSE',
        id: -1
    };
    const state = expensesReducer(expenses, action);
    expect(state).toEqual(expenses);
});

test('Should add expense', () => {
    const action = {
        type: 'ADD_EXPENSE',
        expense: {
            id: '4',
            description: 'New Add',
            note: '',
            amount: 300,
            createdAt: 0
        }
    };
    const state = expensesReducer(expenses, action);
    expect(state).toEqual([...expenses, action.expense]);
});

test('Should edit expense', () => {
    const action = {
        type: 'EDIT_EXPENSE',
        id: expenses[0].id,
        updates: {
            note: 'hey'
        }
    };
    const state = expensesReducer(expenses, action);
    expect(state[0].note).toBe('hey');
});

test('Should not edit expense if ID is not found', () => {
    const action = {
        type: 'EDIT_EXPENSE',
        id: -1,
        updates: {
            note: 'hey'
        }
    };
    const state = expensesReducer(expenses, action);
    expect(state).toEqual(expenses);
});

