import { useLayoutEffect } from 'react';
import { Text, StyleSheet, View } from 'react-native';
import { GlobalStyles } from '../components/constants/styles';
import IconButton from '../components/UI/IconButton';

function deleteExpenseHandler() {

}


function ManageExpense({ route, navigation }) {
    const editedExpenseId = route.params?.expenseId; //conditional operator used to check if params is undefined
    const isEditing = !!editedExpenseId; // this is a boolean

    useLayoutEffect(() => {
        navigation.setOptions({
            title: isEditing ? 'Edit Expense' : 'Add Expense'
        });
    }, [navigation, isEditing]);
    // if we have no expense ID, then we are adding. If we have expense ID, then we are editing

    return (
        <View style={styles.container}>
            {isEditing && (
                <View style={styles.deleteContainer}>
                    <IconButton icon="trash"
                        color={GlobalStyles.colors.error500}
                        size={36}
                        onPress={deleteExpenseHandler}
                    />
                </View>
            )}
        </View>
    );
}

export default ManageExpense;

const styles = StyleSheet.create({

    container: {
        flex: 1,
        padding: 24,
        backgroundColor: GlobalStyles.colors.primary800
    },
    deleteContainer: {
        marginTop: 16,
        paddingTop: 8,
        borderTopWidth: 2,
        borderTopColor: GlobalStyles.colors.primary200,
        alignItems: 'center'
    }


})