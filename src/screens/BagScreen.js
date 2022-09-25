import React from "react";
import {
  Image,
  StyleSheet,
  Button,
  Text,
  View,
  TextInput,
  SafeAreaView,
  Pressable,
  FlatList,
} from "react-native";
import { orderItems, removeOrderItem } from "../state";

const BagItem = ({ item }) => {
  return (
    <>
      <View style={styles.bagItem}>
        <Image
          style={styles.foodImage}
          source={{ uri: item["imgSrc"] }}
        />
        <Text style={styles.foodName}>{item.name}</Text>
        <Pressable
          onPress={() => {
            removeOrderItem();
          }}
          style={styles.removeButton}
        >
          <Text style={styles.removeButtonText}>X</Text>
        </Pressable>
      </View>
      <View style={styles.dividerLight} />
    </>
  );
};

export default function BagScreen({ navigation }) {
  const order = orderItems.use();
  const renderItem = ({ item }) => {
    return <BagItem item={item} />;
  };
  return (
    <View style={styles.bagView}>
      <View style={styles.backButtonRow}>
        <Pressable
          style={styles.backButton}
          onPress={() => navigation.goBack()}
        >
          <Text style={styles.backButtonText}> {"<"} Back</Text>
        </Pressable>
        <View style={styles.bagHeader}>
          <Text style={styles.bagTitle}>Order Bag</Text>
          <Pressable onPress={navigation.navigate("Confirm")} style={styles.orderButton}>
            <Text style={styles.orderText}>Place Order</Text>
          </Pressable>
        </View>
        <View style={styles.divider} />
        <SafeAreaView style={styles.bagList}>
          <FlatList
            data={order}
            renderItem={renderItem}
            keyExtractor={(item) => item.name}
          />
        </SafeAreaView>
      </View>
    </View>
  );
}

import { Dimensions } from "react-native";
const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

const styles = StyleSheet.create({
  bagView: {
    flexDirection: "column",
    alignItems: "center",
    width: windowWidth,
    marginTop: 60,
  },
  bagHeader:{
    flexDirection: 'row',
    width: windowWidth,
  },
  orderButton:{
    width: 105,
    height: 40,
    borderRadius: 10,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#ffb84e",
    alignSelf: "right",
    marginLeft: 'auto',
    marginRight: 20,
    marginTop: 15
  },
  orderText:{
    fontWeight: 'bold'
  },
  bagTitle: {
    fontSize: 30,
    fontWeight: "bold",
    alignSelf: "left",
    margin: 20,
  },
  bagList: {},
  divider: {
    borderBottomColor: "black",
    borderBottomWidth: 1,
    width: windowWidth * 0.92,
    alignSelf: "center",
  },
  bagItem: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
    marginTop: 10,
  },
  foodImage: {
    height: 120,
    width: 120,
    borderRadius: 100,
    margin: "auto",
    borderWidth: 1,
    alignSelf: "flex-start",
    marginLeft: 20,
  },
  foodName: {
    fontSize: 20,
    fontWeight: "bold",
    justifySelf: "flex-start",
    marginLeft: 10,
  },
  removeButton: {
    justifySelf: "flex-end",
    marginLeft: "auto",
    marginRight: 20,
  },
  removeButtonText: {
    fontSize: 30,
    fontWeight: "bold",
    color: "#ffb84e",
  },
  dividerLight: {
    borderBottomColor: "hsl(0,0%,50%)",
    borderBottomWidth: 1,
    width: windowWidth * 0.92,
    alignSelf: "center",
  },

  buttonText: {
    fontSize: 19,
    fontWeight: "bold",
  },
  backButtonRow: {
    width: windowWidth,
  },
  backButton: {
    width: 80,
    height: 35,
    borderRadius: 10,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    margin: 10,
    marginLeft: 20,
    backgroundColor: "#ffb84e",
    alignSelf: "left",
  },
  backButtonText: {
    fontSize: 15,
    fontWeight: "bold",
  },
});
