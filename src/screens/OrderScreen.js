import React from 'react';
import {Button, Text, View}  from 'react-native';

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
        
    </View>

    )
}