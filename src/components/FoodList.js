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
  Pressable,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

import { Dimensions } from "react-native";
import getMenu from "../interface/getMenu";
import { addOrderItem, filters, orderItems } from "../state";
const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

const FoodItem = ({ item }) => {
  const navigation = useNavigation();
  const order = orderItems.use();
  return (
    <View style={styles.foodItem}>
      <Pressable
        style={styles.addButton}
        onPress={() => addOrderItem(item)}
      >
        <Image
          source={require("./plus.png")}
          style={{ height: 40, width: 40 }}
        ></Image>
      </Pressable>
      <Pressable
        onPress={() =>
          navigation.navigate("Item", { item: item })
        }
      >
        <Image
          style={styles.foodImage}
          source={{ uri: item["imgSrc"] }}
        />
        <Text style={styles.foodName}>{item.name}</Text>
      </Pressable>
    </View>
  );
};

export default function FoodList() {
  const [menuData, setMenuData] = useState({});
  const menuFilters = filters.use();
  useEffect(() => {
    async function fetchMenu() {
      const menu = await getMenu();
      if (menuFilters.length == 0) return setMenuData(menu.m);
      const filteredMenu = menu.m.reduce((arr, item) => {
        if (menuFilters.includes(item?.category))
          arr.push(item);
        return arr;
      }, []);
      setMenuData(filteredMenu);
    }
    fetchMenu();
  }, [menuFilters]);

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
          <TextInput
            placeholder="Search"
            placeholderTextColor="gray"
            style={styles.searchBar}
          ></TextInput>
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
    height: windowHeight * 0.23,
    width: windowWidth * 0.45,
    flexDirection: "column",
    alignItems: "center",
    borderWidth: 1,
    backgroundColor: "#ffb84e",
    borderColor: "#ffb84e",
    borderRadius: 20,
    margin: 10,
  },
  foodName: {
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
  },
  foodImage: {
    height: 120,
    width: 120,
    borderRadius: 100,
    margin: "auto",
    borderWidth: 1,
    alignSelf: "center",
  },
  searchFlex: {
    flex: 1,
    flexDirection: "row",
  },
  magnify: {
    width: 30,
    height: 30,
    marginTop: 10,
    marginLeft: 10,
  },
  horizontalFlex: {
    flexDirection: "row",
    flexWrap: "nowrap",
  },
  searchBar: {
    flex: 2,
    height: windowHeight * 0.04,
    width: windowWidth * 0.7,
    borderWidth: 1,
    borderRadius: 60,
    backgroundColor: "#ffffff",
    borderColor: "#000000",
    margin: windowHeight * 0.01,
    padding: 8,
  },
  addButton: {
    marginLeft: "auto",
    marginRight: 5,
    marginTop: 3,
    marginBottom: -10,
  },
});
