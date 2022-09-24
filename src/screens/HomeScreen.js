
import React from 'react';
import { Image,StyleSheet, Button, Text, View, TextInput, SafeAreaView}  from 'react-native';
import { Dimensions } from 'react-native';
//import { useFonts } from 'expo-font';

// width and height of the screen

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

console.log(windowWidth * 0.92 + " " + windowHeight * 0.08)

export default function HomeScreen({ navigation })
{
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

    const [firstName, onChangeName ] = React.useState(null);
    const [mrn, onChangeMRN] = React.useState(null);

    return(
    <View style = {styles.yellowBackground}>
        <View style = {styles.topSection}>
        <Image 
            style={styles.icon}

            source={require('./CateringTray.png')}
         />
       
        </View>
        <Text style={styles.roomService}>Room Service</Text>
    <View style = {styles.inputSection}>
        <Text style = {styles.textTitle} >MRN number: </Text>
        <TextInput
        style={styles.input}
        onChangeText={onChangeName}
        value={firstName}>
        </TextInput>
        <Text style = {styles.textTitle} >pin: </Text>
        <TextInput
        style={styles.input}
        onChangeText={onChangeMRN}
        value={mrn}>
        </TextInput>
        </View>
        <View style={styles.buttonView}>
        <Button 
        title="Enter"
        color="#000000"
        onPress={() => navigation.navigate('Order')}
        />
    </View>
    </View>

    )
}

const styles = StyleSheet.create(
    {
    yellowBackground: {
        
        width: windowWidth,
        height: windowHeight,
        flexDirection: "column",
        justifyContent: 'flex-start',
        alignItems: 'center',
        backgroundColor: '#ffb84e',

    },
    topSection:{
        flex: 1,
    },
    icon: {
        height: 130,
        width: 130,
        position: 'relative',
        top: 50,
        borderRadius: 130/2,
        alignItems: 'center',
        justifyContent: 'center',
        borderColor: '#000000',
        borderWidth: 1,
    },
    inputSection:{
        flex: 1
    },
    input: {
        position: 'relative',
        height: windowHeight * 0.08,
        width: windowWidth * 0.92,
        borderWidth: 1,
        borderRadius: 60,
        backgroundColor: '#ffffff',
        borderColor: '#ffffff',
        margin: windowHeight * 0.01,
       
      },
      roomService: {
      bottom: 100,
      },
      buttonView: {
        position: 'relative',
        height: windowHeight * 0.08,
        width: windowWidth * 0.6,
        bottom: 50,
        borderWidth: 1,
        borderRadius: 60,
        backgroundColor: '#ffffff',
        borderColor: '#ffffff',
        margin: windowHeight * 0.01,
        alignItems: 'center',
      },
      textTitle: {

        //fontFamily: 'Sanchez-Regular',

      }
 
}
)