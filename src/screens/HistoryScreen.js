import React from 'react';
import {Button, Text, View}  from 'react-native';
import { createNativeStackNavigator} from '@react-navigation/native-stack';

export default function HistoryScreen({ navigation })
{

    return(
    <View>
        <Text>Order Screen</Text>
        <Button 
        title="Go to Order Screen"
        onPress={() => navigation.navigate('Order')}
        />
         <Button 
        title="Go to Home Screen"
        onPress={() => navigation.navigate('Home')}
        />
    </View>

    )
}