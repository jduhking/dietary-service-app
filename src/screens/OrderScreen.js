import React from 'react';
import {Button, Text, View}  from 'react-native';
import FoodList from '../components/FoodList.js';

export default function OrderScreen({ navigation })
{

    return(
    <View>
        <Text>Order Screen</Text>
        <Button
        title="Go to Home Screen"
        onPress={() => navigation.navigate('Home')}
        />
         <Button
        title="Go to History Screen"
        onPress={() => navigation.navigate('History')}
        />
        <FoodList/>
        
        
    </View>

    )
}