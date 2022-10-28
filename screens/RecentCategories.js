import CategoryOutput from "../components/Category/CategoryOutput";
import { useContext } from 'react';
import { ExpensesContext } from '../store/category-details';
import { getDateMinusDays } from '../util/date';

function RecentExpense() {

    const expensesCtx = useContext(ExpensesContext);
    const recentExpenses = expensesCtx.expenses.filter((expense) => {
        const today = new Date();
        const date7DaysAgo = getDateMinusDays(today, 7);

        return expense.date > date7DaysAgo;
    });


    return (
        <CategoryOutput expenses={recentExpenses} expensesPeriod='Expenditure in last 7 days' />
    );
}

export default RecentExpense;