import { createContext, useReducer } from "react";


const SAMPLE_EXPENDITURE = [

    {
        id: '1001',
        title: 'Auckland apartment',
        category: 'Mortgage',
        amount: 2314.20,
        date: new Date('2022-10-15'),
        item: 1
    },
    {
        id: '1002',
        title: 'East restaurant',
        category: 'Restaurant',
        amount: 165.00,
        date: new Date('2022-10-05'),
        item: 4
    },
    {
        id: '1003',
        title: 'PB Tech Auckland',
        category: 'Electronics',
        amount: 400.00,
        date: new Date('2022-10-21'),
        item: 3
    },
    {
        id: '1004',
        title: 'H&M Auckland',
        category: 'Clothing',
        amount: 320.10,
        date: new Date('2022-10-30'),
        item: 2
    },
    {
        id: '1005',
        title: 'Westfield',
        category: 'Shopping',
        amount: 234.78,
        date: new Date('2022-10-22'),
        item: 3
    },
    {
        id: '1006',
        title: 'Countdown NZ',
        category: 'Groceries',
        amount: 108.30,
        date: new Date('2022-10-24'),
        item: 5
    },
    {
        id: '1007',
        title: 'Starbucks coffee',
        category: 'Cafe',
        amount: 25.72,
        date: new Date('2022-10-30'),
        item: 2
    }

];

export const ExpensesContext = createContext({
    expenses: [],
    addExpense: ({ category, amount, date }) => { },
    deleteExpense: (id) => { },
    updateExpense: (id, { category, amount, date }) => { },
});

function expensesReducer(state, action) {
    switch (action.type) {
        case 'ADD':
            const id = new Date().toString() + Math.random().toString();
            return [{ ...action.payload, id: id }, ...state]
        case 'UPDATE':
            const updatableExpenseIndex = state.findIndex(
                (expense) => expense.id === action.payload.id);
            const updatableExpense = state[updatableExpenseIndex];
            const updatedItem = { ...updatableExpense, ...action.payload.data };
            const updatedExpenses = [...state];
            updatedExpenses[updatableExpenseIndex] = updatedItem;
            return updatedExpenses;
        case 'DELETE':
            return state.filter((expense) => expense.id !== action.payload);
        default:
            return state;
    }
}

//reducer function returns a new state value

function ExpensesContextProvider({ children }) {
    const [expensesState, dispatch] = useReducer(expensesReducer, SAMPLE_EXPENDITURE);

    function addExpense({ expenseData }) {
        dispatch({ type: 'ADD', payload: expenseData })
    }

    function deleteExpense(id) {
        dispatch({ type: 'DELETE', payload: id })
    }

    function updateExpense(id, expenseData) {
        dispatch({ type: 'UPDATE', payload: { id: id, data: expenseData } })
    }

    const value = {
        expenses: expensesState,
        addExpense: addExpense,
        deleteExpense: deleteExpense,
        updateExpense: updateExpense
    }


    return (
        <ExpensesContext.Provider value={value}>
            {children}
        </ExpensesContext.Provider>
    );
}

export default ExpensesContextProvider;
