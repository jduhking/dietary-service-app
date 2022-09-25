import React from 'react';
import {Button, StyleSheet, Image, Text, View}  from 'react-native';
import FoodList from '../components/FoodList.js';
import FoodCategories from '../components/FoodCategories.js';

import { Dimensions } from "react-native";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

export default function OrderScreen({ navigation })
{

    return(
    <View  styles={styles.container}> 
            <View>
                <Image 
                style={styles.icon}
                source={require('./CateringTray.png')}
                />
            </View>
           
        <Text style={ styles.menuTime}>Lunch</Text>
        <Text style={styles.categoryType}>Select your entree</Text>
        <FoodCategories />
        <FoodList />
    </View>
    )
}


const styles = StyleSheet.create({

    container: {

        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    
    }, 
    icon: {
        height: 130 / 2,
        width: 130 / 2,
        position: 'relative',
        top: 50,
        left: windowWidth * 0.42,
        borderRadius: 130/2,
        
        alignItems: 'center',
        justifyContent: 'center',
        borderColor: '#000000',
        borderWidth: 1,
    },
    roomService: {
       
        top: 100,
        left: 177, 

        },
    menuTime: {

    position: 'relative', 
    left: 177, 
    marginTop: 70, 
    fontSize: 24,
    alignItems: 'center',

    },
    categoryType: {

        position: 'relative',
        marginTop: 10, 
        left: 150,  
    }


  
  });
