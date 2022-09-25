import React, { useEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import {
  View,
  FlatList,
  StyleSheet,
  Text,
  Status,
  Image,
  TextInput,
  SafeAreaView,
  Pressable,
} from "react-native";

import { Dimensions } from "react-native";
import getMenu from "../interface/getMenu";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

const FoodItem = ({ item }) => {
  const navigation = useNavigation();

  return (
    <Pressable onPress={()=> navigation.navigate("Item", {item: item})}>
      <View style={styles.foodItem}>
        <Image
          style={styles.foodImage}
          source={{uri: item.imgSrc}}
        />
        <Text style={styles.foodName}>{item.name}</Text>
      </View>
    </Pressable>
  );
};

export default function FoodList() {
  const [menuData, setMenuData] = useState({});
  useEffect(() => {
    async function fetchMenu() {
      const menu = await getMenu();

      setMenuData(menu.m);
    }
    fetchMenu();
  }, []);

  const renderItem = ({ item }) => {
    return <FoodItem item={item} />;
  };

  return (
    <SafeAreaView>
      <View style={styles.horizontalFlex}>
        <View style={styles.searchFlex}>
          <Image
            style={styles.magnify}
            source={require("../../assets/search.png")}
          />
          <TextInput style={styles.searchBar}></TextInput>
        </View>
      </View>
      <FlatList
        numColumns={2}
        data={menuData}
        renderItem={renderItem}
        keyExtractor={(item) => item.name}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  foodItem: {
    position: "relative",
    left: 20,
    height: windowHeight * 0.2,
    width: windowWidth * 0.4,
    borderWidth: 1,
    backgroundColor: "#ffb84e",
    borderColor: "#ffb84e",
    borderRadius: 20,
    margin: windowHeight * 0.01,
  },
  foodName: {
    fontSize: 16,
    top: 20,
    textAlign: "center",
  },
  foodImage: {
    position: "relative",

    height: 120,
    width: 120,
    top: 10,
    left: 18,
    borderRadius: 130 / 2,
    justifyContent: "center",

    borderWidth: 1,
  },
  searchFlex: {
    flex: 1,
    flexDirection: "row",
  },
  magnify: {
    resizeMode: "stretch",
    position: "relative",
    width: 50,
    height: 50,
  },
  horizontalFlex: {
    flexDirection: "row",
    flexWrap: "nowrap",
  },
  searchBar: {
    position: "relative",
    flex: 2,
    height: windowHeight * 0.04,
    width: windowWidth * 0.8,
    left: 2,
    borderWidth: 1,
    borderRadius: 60,
    backgroundColor: "#ffffff",
    borderColor: "#000000",
    margin: windowHeight * 0.01,
  },
});
