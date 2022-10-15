import { View, Text, FlatList } from 'react-native';
import ExpenseItem from './ExpenseItem';

function renderExpenseItem(itemData) {
    return <ExpenseItem {...itemData.item} />
    {/** An expense object from the array in expenseoutput.js will be an item */ }

}

function ExpensesList({ expenses }) {
    return (
        <FlatList
            data={expenses}
            renderItem={renderExpenseItem}
            keyExtractor={(item) => item.id}
        />
    );
}

export default ExpensesList;