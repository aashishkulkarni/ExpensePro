import { useContext } from "react";
import CategoryOutput from "../components/Category/CategoryOutput";
import { ExpensesContext } from "../store/category-details";

function AllCategories() {
    const expenseCtx = useContext(ExpensesContext);
    return <CategoryOutput expenses={expenseCtx.expenses} expensesPeriod="Total Expenditure" />;
}

export default AllCategories;