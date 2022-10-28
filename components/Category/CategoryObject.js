import { Pressable, View, StyleSheet, Text } from "react-native";
import { GlobalStyles } from '../constants/styles';
import { useNavigation } from "@react-navigation/native";
import { getFormattedDate } from '../../util/date';

function ExpenseItem({ id, category, amount, item }) {

    const navigation = useNavigation();

    function expenseButtonHandler() {
        // call navigate method provided in react native navigation
        // using a hook
        navigation.navigate('ManageExpense', {
            expenseId: id,
        });
    }

    return (
        <Pressable
            onPress={expenseButtonHandler}
            style={({ pressed }) => pressed && styles.pressed}
        >
            <View style={styles.expenseItem}>
                <View>
                    <Text style={[styles.textBase, styles.description]}>{category}</Text>
                    {/* <Text style={styles.textBase}> {getFormattedDate(date)} </Text> */}
                    <Text> Items: {item} </Text>

                </View>
                <View style={styles.amountContainer}>
                    <Text style={styles.amount}>  ${amount.toFixed(2)} </Text>
                </View>
            </View>
        </Pressable>
    );
}

export default ExpenseItem;

const styles = StyleSheet.create({

    pressed: {
        opacity: 0.75,
    },
    expenseItem: {
        padding: 12,
        marginVertical: 8,
        // backgroundColor: GlobalStyles.colors.primary500,
        backgroundColor: 'white',
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderRadius: 6,
        elevation: 3,
        shadowColor: GlobalStyles.colors.gray500,
        shadowRadius: 4,
        shadowOffset: { width: 1, height: 1 },
        shadowOpacity: 0.4
    },
    textBase: {
        // color: GlobalStyles.colors.primary50
        color: 'black'
    },
    description: {
        fontSize: 16,
        marginBottom: 4,
        fontWeight: 'bold'
    },
    amountContainer: {
        paddingHorizontal: 12,
        paddingVertical: 4,
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 4
    },
    amount: {
        // color: GlobalStyles.colors.primary500,
        color: 'black',
        fontWeight: 'bold'
    }
});