import { useContext } from "react";
import ExpensesOutput from "../components/Expenses/ExpensesOutput";
import { ExpensesContext } from "../store/expense-context";

function AllExpenses() {
    const expenseCtx = useContext(ExpensesContext);
    return <ExpensesOutput expenses={expenseCtx.expenses} expensesPeriod="Total" />;
}

export default AllExpenses;