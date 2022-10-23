import ExpensesOutput from "../components/Expenses/ExpensesOutput";
import { useContext } from 'react';
import { ExpensesContext } from '../store/expense-context';
import { getDateMinusDays } from '../util/date';

function RecentExpense() {

    const expensesCtx = useContext(ExpensesContext);
    const recentExpenses = expensesCtx.expenses.filter((expense) => {
        const today = new Date();
        const date7DaysAgo = getDateMinusDays(today, 7);

        return expense.date > date7DaysAgo;
    });


    return (
        <ExpensesOutput expenses={recentExpenses} expensesPeriod="Last Week" />
    );
}

export default RecentExpense;