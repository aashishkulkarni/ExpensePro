import { useContext, useLayoutEffect } from 'react';
import { Text, StyleSheet, View, TouchableOpacity } from 'react-native';
import { GlobalStyles } from '../components/constants/styles';
import Button from '../components/UI/Button';
import IconButton from '../components/UI/IconButton';
import { ExpensesContext } from '../store/category-details';



function ManageExpense({ route, navigation }) {

    const expensesCtx = useContext(ExpensesContext);

    const editedExpenseId = route.params?.expenseId; //conditional operator used to check if params is undefined
    const isEditing = !!editedExpenseId; // this is a boolean

    useLayoutEffect(() => {
        navigation.setOptions({
            title: isEditing ? 'Edit Category' : 'Add Category'
        });
    }, [navigation, isEditing]);
    // if we have no expense ID, then we are adding. If we have expense ID, then we are editing

    function deleteExpenseHandler() {
        expensesCtx.deleteExpense(editedExpenseId);
        navigation.goBack(); // goes back to the screen
    }

    function cancelHandler() {
        navigation.goBack();
    }

    function confirmHandler() {
        navigation.goBack();
    }

    return (
        <View style={styles.container}>
            <View style={styles.buttons}>
                <Button style={styles.button} mode='flat' onPress={cancelHandler}>
                    Cancel
                </Button>
                <Button style={styles.button} onPress={confirmHandler}> {isEditing ? 'Update' : 'Add'} </Button>
            </View>

            {isEditing && (

                <View style={styles.deleteContainer}>

                    <IconButton icon="close-circle-outline"
                        color={GlobalStyles.colors.error50}
                        size={70}
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
        //backgroundColor: '#46627F'
    },
    buttons: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    text: {
        color: 'white',
        fontSize: '20',
        fontWeight: '60'
    },
    button: {
        minWidth: 120,
        marginHorizontal: 8
    },
    deleteContainer: {
        marginTop: 16,
        paddingTop: 8,
        borderTopWidth: 2,
        borderTopColor: GlobalStyles.colors.primary200,
        alignItems: 'center'
    }


})