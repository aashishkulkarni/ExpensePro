import { View, Text, FlatList, StyleSheet } from 'react-native';
import CategoryOutline from './CategoryOutline';
import ExpensesList from './CategoryList';


function ExpensesOutput({ expenses, expensesPeriod }) {
    return (
        <View style={styles.container}>
            <CategoryOutline expenses={expenses} periodName={expensesPeriod} />
            <ExpensesList expenses={expenses} />
        </View>
    );
}

export default ExpensesOutput;

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 24,
        paddingTop: 24,
        paddingBottom: 0,
        backgroundColor: '#46627F',
        flex: 1
    }
});