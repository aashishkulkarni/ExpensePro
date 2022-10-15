import { View, Text, FlatList } from 'react-native';

function renderExpenseItem(itemData) {
    return <Text>{itemData.item.description}</Text>
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