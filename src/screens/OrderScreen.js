import React, { setState, useEffect, useState } from "react";
import {
  Button,
  StyleSheet,
  Image,
  Text,
  View,
  Pressable,
} from "react-native";
import FoodList from "../components/FoodList.js";
import FoodCategories from "../components/FoodCategories.js";
import { filters, orderItems } from "../state.js";

export default function OrderScreen({ navigation }) {
  const activeFilters = filters.use();
  const order = orderItems.use();
  return (
    <View style={styles.orderView}>
      <View style={styles.orderHeader}>
        {/* <Image
          style={styles.icon}
          source={require("./CateringTray.png")}
        /> */}
        <View style={styles.midRow}>
          <View style={styles.menuLabelsColumn}>
            <Text style={styles.menuTime}>Lunch</Text>
            <Text style={styles.categoryType}>
              Select your entree
            </Text>
          </View>

          <Pressable onPress={()=>navigation.navigate("Bag")} style={styles.shoppingBagButton}>
            {}
            {order.length != 0 && <View style={styles.iconBadge}>
              <Text
                style={{ color: "white", textAlign: "center", paddingTop: 2 }}
              >
                {order.length}
              </Text>
            </View>}
            <Image
              style={styles.shoppingBagIcon}
              source={require("./shopping-bag.png")}
            ></Image>
          </Pressable>
        </View>
      </View>

      <FoodCategories />
      <FoodList />
    </View>
  );
}
import { Dimensions } from "react-native";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;
const styles = StyleSheet.create({
  orderView: {
    flex: 1,
  },
  orderHeader: {
    flexDirection: "column",
    alignItems: "center",
    marginTop: 60,
  },
  icon: {
    height: 80,
    width: 80,
    borderRadius: 130,
    alignItems: "center",
    justifyContent: "center",
    borderColor: "#000000",
    borderWidth: 1,
  },
  menuTime: {
    fontSize: 40,
  },
  shoppingBagButton: {
    backgroundColor: "#ffb84e",
    width: 70,
    height: 70,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 100,
  },
  shoppingBagIcon: {
    width: 40,
    height: 40,
  },
  midRow: {
    flexDirection: "row",
    alignItems: "flex-end",
    marginBottom: 10,
    marginTop: 30,
  },
  menuLabelsColumn: {
    flexDirection: "column",
    marginRight: 30,
  },
  iconBadge: {
    width: 20,
    height: 20,
    backgroundColor: "#FF5733",
    borderRadius: 100,
    position: "absolute",
    top: -5,
    right: 5,
  },
});
