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
import { Dimensions } from "react-native";
//import { useFonts } from 'expo-font';

// width and height of the screen

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

export default function HomeScreen({ navigation }) {
  /*
    let [fontsLoaded] = useFonts(
        {
            'Sanchez-Regular': require('./../assets/fonts/Sanchez-Regular.ttf')
        }
    );

    if(!fontsLoaded) {
        return <AppLoading />;
    }
    */

  const [firstName, onChangeName] = React.useState(null);
  const [mrn, onChangeMRN] = React.useState(null);

  return (
    <View style={styles.yellowBackground}>
      <Image
        style={styles.icon}
        source={require("./CateringTray.png")}
      />
      <Text style={styles.roomService}>Room Service</Text>
      <View style={styles.inputSection}>
        <TextInput
          style={styles.input}
          onChangeText={onChangeName}
          value={firstName}
          placeholder="Medical Record Number (MRN)"
          placeholderTextColor="gray"
        ></TextInput>
        <TextInput
          style={styles.input}
          onChangeText={onChangeMRN}
          value={mrn}
          placeholder="Patient Pin"
          placeholderTextColor="gray"
        ></TextInput>
      </View>
      <Pressable onPress={()=>navigation.navigate('Order')} style={styles.button}>
        <Text style={styles.buttonText}>Submit</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  yellowBackground: {
    width: windowWidth,
    height: windowHeight,
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "center",
    backgroundColor: "#ffb84e",
  },
  icon: {
    height: 130,
    width: 130,
    borderRadius: 100,

    marginTop: 60,

    alignItems: "center",
    justifyContent: "center",
    borderColor: "#000000",
    borderWidth: 1,
  },
  roomService: {
    fontSize: 30,
    fontWeight: "bold",
    marginTop: 40,
  },
  inputSection: {
    marginTop: 40,
  },
  input: {
    position: "relative",
    height: windowHeight * 0.08,
    width: windowWidth * 0.92,
    borderColor: "black",
    borderWidth: 2,
    borderRadius: 60,
    backgroundColor: "#ffffff",
    margin: windowHeight * 0.01,
    padding: 20,
    fontSize: 18,
  },
  button: {
    width: 200,
    height: 55,
    backgroundColor: "white",
    borderColor: "black",
    borderWidth: 2,
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
});
