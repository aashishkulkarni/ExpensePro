import { useContext, useLayoutEffect } from 'react';
import { StyleSheet, View } from 'react-native';
import Button from '../components/UI/Button';
import IconButton from '../components/UI/IconButton';
import { ExpensesContext } from '../store/category-details';

function ManageCategories({ route, navigation }) {

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
                        color={'#A10500'}
                        size={70}
                        onPress={deleteExpenseHandler}
                    />
                </View>

            )}
        </View>
    );
}

export default ManageCategories;

const styles = StyleSheet.create({

    container: {
        flex: 1,
        padding: 24,
        backgroundColor: '#46627F'
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
        borderTopColor: '#A9CCE3',
        alignItems: 'center'
    }


})