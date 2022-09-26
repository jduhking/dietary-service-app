import React from "react";
import {
  StyleSheet,
  Text,
  View,

} from "react-native";

export default function OrderConfirm(){
    return(
        <View style={styles.confirmView}>
            <Text style={styles.confirmTitle}>Your order has been sent to the kitchen!</Text>
            <Text style={styles.confirmSubtitle}>The food will arrive at your room shortly</Text>
            <Text style={styles.confirmSubtitle}>You will be eligible to order more food in 3 hours</Text>

        </View>
    )
}
import { Dimensions } from "react-native";
const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;
const styles = StyleSheet.create({
    confirmView:{
        height: windowHeight,
        width: windowWidth,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
    },
    confirmTitle:{
        fontSize: 35,
        fontWeight: "bold",
        color: "#ffb84e",
        textAlign: "center",
        marginBottom: 40,
        marginTop: -70
    },
    confirmSubtitle:{
        fontSize: 20,
        fontWeight: 'bold',
        width: 300,
        textAlign: 'center',
        marginBottom: 30
    }
})
