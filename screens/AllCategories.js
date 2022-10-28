import { useContext } from "react";
import ExpensesOutput from "../components/Category/CategoryOutput";
import { ExpensesContext } from "../store/category-details";

function AllExpenses() {
    const expenseCtx = useContext(ExpensesContext);
    return <ExpensesOutput expenses={expenseCtx.expenses} expensesPeriod="Total Expenditure" />;
}

export default AllExpenses;