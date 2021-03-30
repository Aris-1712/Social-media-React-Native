import React from 'react'
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native'
import { Button } from 'react-native-elements';
import Loading from '../Loading';
import { useFonts } from 'expo-font';

const Welcome = (props) => {
    const [loaded] = useFonts({
        Lobster: require('../../assets/fonts/Lobster-Regular.ttf'),
    });

    if (!loaded) {
        return <Loading></Loading>;
    }
    return (
        <View style={Styles.main}>
            <Text style={Styles.welcometext}>Welcome to Hub</Text>
            <View style={Styles.logo}>
                <Image style={Styles.image} source={require('./dark.png')}></Image>
            </View>
            <TouchableOpacity style={Styles.login}>
                <Text style={Styles.text}>Login</Text>
            </TouchableOpacity>
            <TouchableOpacity style={Styles.signup}>
                <Text style={Styles.text}>Signup</Text>
            </TouchableOpacity>
        </View>
    )
}


const Styles = StyleSheet.create({
    main: {
        flex: 1,
        padding: 30,
        alignItems: "center",
        backgroundColor: "#C6D8D3"
    },
    welcometext: {
        fontFamily: "Lobster",
        fontSize: 35,
        color: "#0B3C49", marginTop: 40
    },
    logo: {
        marginTop: 80,
        borderRadius: 20
        , marginBottom: 80
    }, image: {
        width: 200, height: 200, borderRadius: 20
    },
    text: { color: "white", fontSize: 18 },
    login: {
        marginVertical: 15,
        borderRadius: 20,
        alignItems: "center",
        width: "100%",
        justifyContent: "center",
        padding: 10,
        backgroundColor: "#4D9078"
    }, signup: {
        // marginVertical: 15,
        borderRadius: 20,
        alignItems: "center",
        width: "100%",
        justifyContent: "center",
        padding: 10,
        backgroundColor: "#B4436C"
    }
})


export default Welcome