
import React from 'react';
import {View, FlatList, StyleSheet, Text, Status, Image, SafeAreaView} from 'react-native';

import { Dimensions } from 'react-native';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;


const menuItems = {
  items: [
    {
      name: "Meatloaf",
      description:
        "Beef meatloaf. Tasty with high protein. 500kcal",
      restrictionCategories: ["Cardiac", "SolidFood"],
      category: "Hot Entree",
    },
    {
      name: "Salisbury Steak",
      description: "Served with gravy and love. 500kcal",
      restrictionCategories: ["Cardiac", "SolidFood"],
      category: "Hot Entree",
    },
    {
      name: "Salmon",
      description: "Farm raised salmon. 400kcal",
      restrictionCategories: ["SolidFood"],
      category: "Hot Entree",
    },
    {
      name: "Grilled Chicken",
      description:
        "Grilled chicken breast with vegtables. 490kcal",
      restrictionCategories: ["SolidFood"],
      category: "Hot Entree",
    },
    {
      name: "Roasted Turkey",
      description:
        "Roasted turkey breast with vegtables. 510kcal",
      restrictionCategories: ["SolidFood", "Cardiac"],
      category: "Hot Entree",
    },
    {
      name: "Honey BBQ Turkey",
      description:
        "Grilled chicken breast with vegtables. 490kcal",
      restrictionCategories: ["SolidFood"],
      category: "Hot Entree",
    },
    {
      name: "Pepperoni Pizza",
      description: "Hot pepperoni pizza with cheese. 490kcal",
      restrictionCategories: ["SolidFood"],
      category: "Pizza",
    },
    {
      name: "Cheese Pizza",
      description: "Plain pizza with cheese. 490kcal",
      restrictionCategories: ["SolidFood"],
      category: "Pizza",
    },
    {
      name: "Vegetarian Pizza",
      description: "Veggy pizza with cheese. 490kcal",
      restrictionCategories: ["SolidFood"],
      category: "Pizza",
    },
    {
      name: "Sausage Pizza",
      description: "Sausage pizza with cheese. 490kcal",
      restrictionCategories: ["SolidFood"],
      category: "Pizza",
    },
    {
      name: "Chicken Noodle Soup",
      description:
        "Soup with chicken broth and noodles 490kcal",
      restrictionCategories: ["SolidFood"],
      category: "Soup",
    },
    {
      name: "Vegtable Soup",
      description: "Soup with vegtables 300kcal",
      restrictionCategories: ["SolidFood"],
      category: "Soup",
    },
    {
      name: "Tomato Soup",
      description: "Creamy tomato soup 300kcal",
      restrictionCategories: [],
      category: "Soup",
    },
    {
      name: "Chicken Broth",
      description: "Soup with chicken broth 150kcal",
      restrictionCategories: [],
      category: "Soup",
    },
    {
      name: "Vegtable Broth",
      description: "Soup vegtable broth 490kcal",
      restrictionCategories: ["SolidFood"],
      category: "Soup",
    },
    {
      name: "Tossed Salad",
      description: "House salad. 310kcal",
      restrictionCategories: ["SolidFood"],
      category: "Salad",
    },
    {
      name: "Cesar Salad",
      description: "House salad with cesar dressing. 415kcal",
      restrictionCategories: ["SolidFood"],
      category: "Salad",
    },
    {
      name: "Vanilla Ice Cream",
      description: "Sweet creamy treat ;). 300kcal",
      restrictionCategories: ["SolidFood"],
      category: "Deserts",
    },
    {
      name: "Chocolate Cake",
      description: "Delightful fluffy cake with icing. 300kcal",
      restrictionCategories: ["SolidFood"],
      category: "Deserts",
    },
    {
      name: "Chocolate Cookie",
      description:
        "Chocolate cookie with chocolate chunks. 300kcal",
      restrictionCategories: ["SolidFood"],
      category: "Deserts",
    },
    {
      name: "Rasin Oatmeal Cookie",
      description: "If its your thing... 300kcal",
      restrictionCategories: ["SolidFood"],
      category: "Deserts",
    },
    {
      name: "Apple",
      description: "100kcal",
      restrictionCategories: ["SolidFood"],
      category: "Fruit",
    },
    {
      name: "Orange",
      description: "100kcal",
      restrictionCategories: ["SolidFood"],
      category: "Fruit",
    },
    {
      name: "Peaches",
      description: "100kcal",
      restrictionCategories: ["SolidFood"],
      category: "Fruit",
    },
    {
      name: "Pears",
      description: "100kcal",
      restrictionCategories: ["SolidFood"],
      category: "Fruit",
    },
    {
      name: "Grapes",
      description: "100kcal",
      restrictionCategories: ["SolidFood"],
      category: "Fruit",
    },
    {
      name: "Cantaloupe",
      description: "100kcal",
      restrictionCategories: ["SolidFood"],
      category: "Fruit",
    },
    {
      name: "Honey Dew",
      description: "100kcal",
      restrictionCategories: ["SolidFood"],
      category: "Fruit",
    },
    {
      name: "Watermelon",
      description: "100kcal",
      restrictionCategories: ["SolidFood"],
      category: "Fruit",
    },
    {
      name: "Strawberries",
      description: "100kcal",
      restrictionCategories: ["SolidFood"],
      category: "Fruit",
    },
    {
      name: "Water",
      description: "0kcal",
      restrictionCategories: [],
      category: "Cold Drink",
    },
    {
      name: "Tea",
      description: "10kcal",
      restrictionCategories: [],
      category: "Cold Drink",
    },
    {
      name: "Whole Milk",
      description: "80kcal",
      restrictionCategories: [],
      category: "Cold Drink",
    },
    {
      name: "2% Milk",
      description: "50kcal",
      restrictionCategories: [],
      category: "Cold Drink",
    },
    {
      name: "Skim Milk",
      description: "50kcal",
      restrictionCategories: [],
      category: "Cold Drink",
    },
    {
      name: "Vanilla Soy Milk",
      description: "60kcal",
      restrictionCategories: [],
      category: "Cold Drink",
    },
    {
      name: "Apple Juice",
      description: "100kcal",
      restrictionCategories: [],
      category: "Cold Drink",
    },
    {
      name: "Orange Juice",
      description: "100kcal",
      restrictionCategories: [],
      category: "Cold Drink",
    },
    {
      name: "Grape Juice",
      description: "100kcal",
      restrictionCategories: [],
      category: "Cold Drink",
    },
    {
      name: "Cranberry Juice",
      description: "100kcal",
      restrictionCategories: [],
      category: "Cold Drink",
    },
    {
      name: "Ginger Ale",
      description: "40kcal",
      restrictionCategories: [],
      category: "Cold Drink",
    },
    {
      name: "Sprite",
      description: "100kcal",
      restrictionCategories: [],
      category: "Cold Drink",
    },
    {
      name: "Coke",
      description: "100kcal",
      restrictionCategories: [],
      category: "Cold Drink",
    },
    {
      name: "Diet Coke",
      description: "0kcal",
      restrictionCategories: [],
      category: "Cold Drink",
    },
    {
      name: "Sprite Zero",
      description: "0kcal",
      restrictionCategories: [],
      category: "Cold Drink",
    },
    {
      name: "Coffee",
      description: "40kcal",
      restrictionCategories: [],
      category: "Hot Drink",
    },
    {
      name: "Hot Tea",
      description: "40kcal",
      restrictionCategories: [],
      category: "Hot Drink",
    },
    {
      name: "Green Tea",
      description: "40kcal",
      restrictionCategories: [],
      category: "Hot Drink",
    },
    {
      name: "Hot Chocolate",
      description: "60kcal",
      restrictionCategories: [],
      category: "Hot Drink",
    },
    {
      name: "Diet Hot Chocolate",
      description: "20kcal",
      restrictionCategories: [],
      category: "Hot Drink",
    },
    {
      name: "BLT Sandwhich",
      description: "190 kcal",
      restrictionCategories: ["SolidFood"],
      category: "Sandwhiches",
    },
    {
      name: "Sweet Potatoes",
      description: "100 kcal",
      restrictionCategories: ["SolidFood"],
      category: "Sides",
    },
    {
      name: "Mashed Potatoes",
      description: "100 kcal",
      restrictionCategories: ["SolidFood"],
      category: "Sides",
    },
    {
      name: "Cauliflower",
      description: "100 kcal",
      restrictionCategories: ["SolidFood"],
      category: "Sides",
    },
    {
      name: "Green Beans",
      description: "100 kcal",
      restrictionCategories: ["SolidFood"],
      category: "Sides",
    },
    {
      name: "Mixed Vegetables",
      description: "100 kcal",
      restrictionCategories: ["SolidFood"],
      category: "Sides",
    },
    {
      name: "Zucchini",
      description: "100 kcal",
      restrictionCategories: ["SolidFood"],
      category: "Sides",
    },
    {
      name: "White Rice",
      description: "100 kcal",
      restrictionCategories: ["SolidFood"],
      category: "Sides",
    },
    {
      name: "Brown Rice",
      description: "100 kcal",
      restrictionCategories: ["SolidFood"],
      category: "Sides",
    },
    {
      name: "Coleslaw",
      description: "100 kcal",
      restrictionCategories: ["SolidFood"],
      category: "Sides",
    },
    {
      name: "Penne Pasta",
      description: "100 kcal",
      restrictionCategories: ["SolidFood"],
      category: "Sides",
    },
    {
      name: "Mac and Cheese",
      description:
        "Creamy chese sauce with elbow pasta noodles. 345kcal",
      restrictionCategories: ["SolidFood"],
      category: "Sides",
    },
  ],
};



  
const FoodItem = ({ name }) => (
  <View style={styles.foodItem}>
    <Image style={styles.foodImage} 
      source={require('../screens/CateringTray.png')}
    />
    <Text style={styles.foodName}>{name}</Text>
  </View>
);



export default function FoodList(){


  const renderItem = ({ item }) => {
    return(<FoodItem name ={item.name} />)
  };
  
    return(
      <SafeAreaView>
       
     <FlatList
     numColumns={2}
      data={menuItems.items}
      renderItem={renderItem}
      keyExtractor={item => item.name}
      />
      </SafeAreaView>
    )
          

        
}


  const styles = StyleSheet.create({

    foodItem: {
      position: 'relative',
      left: 20,
      height: windowHeight * 0.2,
      width: windowWidth * 0.4,
      borderWidth: 1,
      backgroundColor: '#ffb84e',
      borderColor:'#ffb84e',
      borderRadius: 20,
      margin: windowHeight * 0.01,
    },
    foodName: {

      fontSize: 16,
      top: 20,
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
