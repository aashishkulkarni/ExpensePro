import { View, Text, FlatList, StyleSheet } from 'react-native';
import ExpensesSummary from './ExpensesSummary';
import ExpensesList from './ExpensesList';
import { GlobalStyles } from '../constants/styles';

const DUMMY_EXPENSES = [

    {
        id: '101',
        description: 'food',
        amount: 600.00,
        date: new Date('2021-10-05')
    },
    {
        id: '102',
        description: 'clothing',
        amount: 300.00,
        date: new Date('2021-10-11')
    },
    {
        id: '103',
        description: 'groceries',
        amount: 100.00,
        date: new Date('2021-10-14')
    },
    {
        id: '104',
        description: 'electronics',
        amount: 400.00,
        date: new Date('2021-10-09')
    }

];

function ExpensesOutput({ expenses, expensesPeriod }) {
    return (
        <View style={styles.container}>
            <ExpensesSummary expenses={DUMMY_EXPENSES} periodName={expensesPeriod} />
            <ExpensesList expenses={DUMMY_EXPENSES} />
        </View>
    );
}

export default ExpensesOutput;

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 24,
        paddingTop: 24,
        paddingBottom: 0,
        backgroundColor: GlobalStyles.colors.primary700,
        flex: 1
    }
});