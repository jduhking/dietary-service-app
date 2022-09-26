import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View } from 'react-native';
// navigation imports
import { NavigationContainer, StackActions } from '@react-navigation/native';
import { createNativeStackNavigator} from '@react-navigation/native-stack';
// components
import HomeScreen from './src/screens/HomeScreen.js';
import OrderScreen from './src/screens/OrderScreen.js'
import HistoryScreen from './src/screens/HistoryScreen.js';
import ItemScreen from './src/screens/ItemScreen';
import BagScreen from './src/screens/BagScreen';
import OrderConfirm from './src/screens/ConfrimOrder';


const Stack = createNativeStackNavigator();

export default function App() {
  return (
   <NavigationContainer>
    <Stack.Navigator screenOptions={{
      headerShown: false,
    }} >

    <Stack.Screen name ="Home" component={HomeScreen} />
    <Stack.Screen name ="Order" component={OrderScreen} />
    <Stack.Screen name ="History" component={HistoryScreen} />
    <Stack.Screen name ="Item" component={ItemScreen} />
    <Stack.Screen name ="Bag" component={BagScreen} />
    <Stack.Screen name ="Confirm" component={OrderConfirm} />

    </Stack.Navigator>

  </NavigationContainer>
  );
}

