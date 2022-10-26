import { createContext, useReducer } from "react";


const DUMMY_EXPENSES = [

    {
        id: '101',
        description: 'Restaurant',
        amount: 600.00,
        date: new Date('2022-10-05')
    },
    {
        id: '102',
        description: 'Clothing',
        amount: 300.00,
        date: new Date('2022-10-11')
    },
    {
        id: '103',
        description: 'Groceries',
        amount: 100.00,
        date: new Date('2022-10-24')
    },
    {
        id: '104',
        description: 'Electronics',
        amount: 400.00,
        date: new Date('2022-10-21')
    },
    {
        id: '105',
        description: 'Shopping',
        amount: 234.78,
        date: new Date('2022-10-22')
    },
    {
        id: '106',
        description: 'Home Mortgage',
        amount: 2314.20,
        date: new Date('2022-10-15')
    },
    {
        id: '107',
        title: 'Starbucks coffee',
        description: 'Cafe',
        amount: 25.00,
        date: new Date('2022-10-21')
    }

];

export const ExpensesContext = createContext({
    expenses: [],
    addExpense: ({ description, amount, date }) => { },
    deleteExpense: (id) => { },
    updateExpense: (id, { description, amount, date }) => { },
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
    const [expensesState, dispatch] = useReducer(expensesReducer, DUMMY_EXPENSES);

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
