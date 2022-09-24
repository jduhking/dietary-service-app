import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View } from 'react-native';
// navigation imports
import { NavigationContainer, StackActions } from '@react-navigation/native';
import { createNativeStackNavigator} from '@react-navigation/native-stack';
// components
import HomeScreen from './src/screens/HomeScreen.js';
import OrderScreen from './src/screens/OrderScreen.js'
import HistoryScreen from './src/screens/HistoryScreen.js';


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

    </Stack.Navigator>

  </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
