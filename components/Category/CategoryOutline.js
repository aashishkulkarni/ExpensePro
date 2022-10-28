import { View, Text, StyleSheet } from 'react-native';


function CategoryOutline({ expenses, periodName }) {
    const expenseSum = expenses.reduce((sum, expense) => {
        return sum + expense.amount
    }, 0);

    return (
        <View style={styles.container}>
            <Text style={styles.period}> {periodName} </Text>
            <Text style={styles.sum}> ${expenseSum.toFixed(2)}</Text>
        </View>
    );
}

export default CategoryOutline;

const styles = StyleSheet.create({

    container: {
        padding: 8,
        backgroundColor: 'white',
        borderRadius: 5,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    period: {
        fontSize: 15,
        fontWeight: '600',
        color: '#21618C'
    },
    sum: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#21618C'
    }
});