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
} from "react-native";

export default function ItemScreen({ route, navigation }) {
  const { item } = route.params;
  console.log(item);
  const imgSrc = item["imgSrc"];
  return (
    <View style={styles.itemView}>
      <View style={styles.backButtonRow}>
        <Pressable style={styles.backButton} onPress={(()=>navigation.goBack())}>
          <Text style={styles.backButtonText}> {"<"} Back</Text>
        </Pressable>
      </View>
      <Image
        style={styles.itemImage}
        source={{ uri: imgSrc }}
      ></Image>
      <Text style={styles.itemName}>{item.name}</Text>
      <View style={styles.divider} />
      <Text style={styles.descriptionHeader}>Description:</Text>
      <Text style={styles.itemDescription}>
        {item.description}
      </Text>
      <Text style={styles.descriptionHeader}>Calories:</Text>
      <Text style={styles.itemDescription}>
        {item.calories} kcal
      </Text>
      <Pressable style={styles.orderButton}>
        <Text style={styles.buttonText}>Add to order</Text>
      </Pressable>
    </View>
  );
}

import { Dimensions } from "react-native";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;
const styles = StyleSheet.create({
  itemView: {
    flexDirection: "column",
    alignItems: "center",
    width: windowWidth,
    marginTop: 60,
  },
  divider: {
    borderBottomColor: "black",
    borderBottomWidth: 1,
    width: windowWidth * 0.92,
  },
  itemImage: {
    width: windowWidth * 0.92,
    height: 300,
    borderRadius: 15,
  },
  itemName: {
    fontSize: 30,
    fontWeight: "bold",
    alignSelf: "left",
    margin: 20,
  },
  descriptionHeader: {
    fontSize: 22,
    fontWeight: "bold",
    alignSelf: "left",
    marginLeft: 20,
    marginTop: 15,
  },
  itemDescription: {
    fontSize: 19,
    alignSelf: "left",
    marginLeft: 20,
    marginTop: 10,
  },
  orderButton: {
    width: 200,
    height: 55,
    backgroundColor: "#ffb84e",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 15,
    marginTop: 80,
  },
  buttonText: {
    fontSize: 19,
    fontWeight: "bold",
  },
  backButtonRow:{
    width: windowWidth
  },
  backButton:{
    width: 80,
    height: 35,
    borderRadius: 10,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    margin: 10,
    marginLeft: 20,
    backgroundColor: "#ffb84e",
    alignSelf: 'left'

  },
  backButtonText:{
    fontSize: 15,
    fontWeight: 'bold'
  }
});
