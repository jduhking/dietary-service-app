import React, { useEffect, useState } from "react";
import {
  View,
  FlatList,
  StyleSheet,
  Text,
  Status,
  Image,
  TextInput,
  SafeAreaView,
  TouchableOpacity

} from "react-native";

import { Dimensions } from "react-native";


const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;


const foodCategories = [
    {

        title: 'All',
        id: 0,

    },
    {

        title: 'Hot Entree',
        id: 1,

    },
    {

        title: 'Pizza',
        id: 2,

    },
    {
        
        title: 'Sandwich',
        id: 3, 
    
        
    },
    {

        title: 'Soup',
        id: 4,
    },
    {

        title: 'Deserts',
        id: 5,
    },
    {

        title: 'Cold Drinks',
        id: 6,
    },
    {

        title: 'Hot Drinks',
        id: 7, 
    },
    {

        title: 'Fruits',
        id: 8, 
    },
    {
        title: 'Condiment',
        id: 9,

    },
    {
        
        title: 'Breakfast Entrees',
        id: 10, 
    
        
    }

]



const Category = ({ title }) => (
    <View style={styles.category}>
        <TouchableOpacity
         activeOpacity={0.2}
         underlayColor="#e4e4e4"
         >
      <Text style={styles.categoryName}>{title}</Text>
      </TouchableOpacity>
    </View>
  );

export default function FoodCategories() {

    const renderItem = ({ item }) => {
        return <Category title={item.title} />;
      };
    

return(
<SafeAreaView>    
    <FlatList
    horizontal={true}
    data={foodCategories}
    renderItem={renderItem}
    keyExtractor={item => item.id}
    />
</SafeAreaView>

)


}


const styles = StyleSheet.create({

    category: {
      position: 'relative',
      left: 8,
      height: windowHeight * 0.12,
      width: windowWidth * 0.2,
      borderWidth: 1,
      backgroundColor: '#e4e4e4',
      borderColor:'#e4e4e4',
      borderRadius: 40,
      margin: windowHeight * 0.01,
    },
    categoryName: {

    
      fontSize: 16,
      top: 50,
      textAlign: 'center',



    },
      foodImage: {

        position: 'relative',

        height: 120,
        width: 120,
        top: 10,
        left: 18, 
        borderRadius: 130/2,
        justifyContent: 'center',
       
        borderWidth: 1,
    },


  });
