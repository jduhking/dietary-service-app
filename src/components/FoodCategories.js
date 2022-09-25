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
  TouchableOpacity,
  Pressable,
} from "react-native";

import { Dimensions } from "react-native";
import { addFilter, removeFilter, clearFilters, filters } from "../state";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

const foodCategories = [
  {
    title: "All",
    id: 0,
  },
  {
    title: "Hot Entree",
    id: 1,
  },
  {
    title: "Pizza",
    id: 2,
  },
  {
    title: "Sandwich",
    id: 3,
  },
  {
    title: "Soup",
    id: 4,
  },
  {
    title: "Deserts",
    id: 5,
  },
  {
    title: "Cold Drinks",
    id: 6,
  },
  {
    title: "Hot Drinks",
    id: 7,
  },
  {
    title: "Fruits",
    id: 8,
  },
  {
    title: "Condiment",
    id: 9,
  },
  {
    title: "Breakfast Entrees",
    id: 10,
  },
];

const Category = ({ title }) => {
  const activeFilters = filters.use();
  const setFilter = () => {
    if(title == 'All') return clearFilters();
    if (activeFilters.includes(title)) removeFilter(title);
    else addFilter(title);
  };
  return (
    <TouchableOpacity
      style={
        activeFilters.includes(title)
          ? styles.categoryActive
          : styles.category
      }
      onPress={() => setFilter()}
      activeOpacity={0.2}
      underlayColor="#e4e4e4"
    >
      <Text style={styles.categoryName}>{title}</Text>
    </TouchableOpacity>
  );
};

export default function FoodCategories() {
  const renderItem = ({ item }) => {
    return <Category title={item.title} />;
  };

  return (
    <SafeAreaView>
      <FlatList
        horizontal={true}
        data={foodCategories}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  category: {
    height: windowHeight * 0.1,
    width: windowWidth * 0.2,
    borderWidth: 1,
    backgroundColor: "#e4e4e4",
    borderColor: "#e4e4e4",
    borderRadius: 40,
    margin: windowHeight * 0.01,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  categoryActive: {
    height: windowHeight * 0.1,
    width: windowWidth * 0.2,
    borderWidth: 1,
    backgroundColor: 	"hsla(36, 100%, 65%, 0.5)",
    borderColor: "black",
    borderRadius: 40,
    margin: windowHeight * 0.01,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  categoryName: {
    fontSize: 16,
    textAlign: "center",
  },
});
