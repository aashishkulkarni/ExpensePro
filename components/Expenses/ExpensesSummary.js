import { View, Text, StyleSheet } from 'react-native';
import { GlobalStyles } from '../constants/styles'

function ExpensesSummary({ expenses, periodName }) {
    const expenseSum = expenses.reduce((sum, expense) => {
        return sum + expense.amount //assume that expense is an object that has amount property
    }, 0); // '0' is the starting value for sum

    return (
        <View style={styles.container}>
            <Text style={styles.period}> {periodName} </Text>
            <Text style={styles.sum}> ${expenseSum.toFixed(2)}</Text>
            {/* 'toFixed': Number of digits after the decimal point. 
            output will be till 2 decimal places.*/}
        </View>
    );
}

export default ExpensesSummary;

const styles = StyleSheet.create({

    container: {
        padding: 8,
        // backgroundColor: GlobalStyles.colors.primary50,
        backgroundColor: 'white',
        borderRadius: 5,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    period: {
        fontSize: 12,
        color: GlobalStyles.colors.primary800
    },
    sum: {
        fontSize: 16,
        fontWeight: 'bold',
        color: GlobalStyles.colors.primary800
        // color: 'black'
    }
});