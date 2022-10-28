import { View, Text, FlatList, StyleSheet } from 'react-native';
import ExpensesSummary from './CategoryOutline';
import ExpensesList from './CategoryList';
import { GlobalStyles } from '../constants/styles';


function ExpensesOutput({ expenses, expensesPeriod }) {
    return (
        <View style={styles.container}>
            <ExpensesSummary expenses={expenses} periodName={expensesPeriod} />
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
        //backgroundColor: GlobalStyles.colors.primary700,
        backgroundColor: '#46627F',
        flex: 1
    }
});