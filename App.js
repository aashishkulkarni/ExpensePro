import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
//importing all the screens
import AllExpenses from './screens/AllExpenses';
import ManageExpense from './screens/ManageExpense';
import RecentExpense from './screens/RecentExpense';
import { GlobalStyles } from './components/constants/styles';
import IconButton from './components/UI/IconButton';
import { useNavigation } from "@react-navigation/native";
import ExpensesContextProvider from './store/expense-context';
const Stack = createNativeStackNavigator();
const BottomTabs = createBottomTabNavigator();

function ExpensesOverview() {

  return <BottomTabs.Navigator

    screenOptions={({ navigation }) => ({
      headerStyle: { // backgroundColor: GlobalStyles.colors.primary500 
        backgroundColor: '#46627F'

      },
      headerTintColor: 'white',
      tabBarStyle: { //backgroundColor: GlobalStyles.colors.primary500 
        backgroundColor: '#46627F'
      },
      // tabBarActiveTintColor: GlobalStyles.colors.accent500,
      tabBarActiveTintColor: 'white',


      headerRight: ({ tintColor }) => (
        <IconButton
          icon="add"
          size={24}
          color={tintColor}
          onPress={() => {
            navigation.navigate('ManageExpense');
          }}
        />
      ),
    })}
  >
    <BottomTabs.Screen
      name="RecentExpenses"
      component={RecentExpense}
      options={{
        title: 'Category Selector', //changes the title on top bar
        tabBarLabel: 'Recent Expenses',
        tabBarIcon: ({ color, size }) => (

          <Ionicons name="cash" size={size} color={color} />
        )
      }}

    />


    <BottomTabs.Screen
      name="AllExpenses"
      component={AllExpenses}
      options={{
        title: 'Category Selector',
        tabBarLabel: 'All Expenses',
        tabBarIcon: ({ color, size }) => (

          <Ionicons name="analytics" size={size} color={color} />

        )
      }}

    />
  </BottomTabs.Navigator>
}

export default function App() {
  return (
    <>
      <StatusBar style="light" />
      <ExpensesContextProvider>
        <NavigationContainer>
          <Stack.Navigator screenOptions={{
            headerStyle: {
              backgroundColor: GlobalStyles.colors.primary500,
              headerTintColor: 'white'
            }
          }}>
            <Stack.Screen
              name="ExpensesOverview"
              component={ExpensesOverview}
              options={{ headerShown: false }}
            />
            <Stack.Screen name="ManageExpense" component={ManageExpense}
              options={{
                presentation: 'modal'
              }}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </ExpensesContextProvider>
    </>
  );
}


