import React, { useRef } from 'react'
import { View, Text, StyleSheet, Image, TouchableOpacity, Dimensions, TextInput } from 'react-native'
import { Button } from 'react-native-elements';
import Loading from '../Loading';
import { useFonts } from 'expo-font';
import { Modalize } from 'react-native-modalize';
const Welcome = (props) => {
    const [loaded] = useFonts({
        Lobster: require('../../assets/fonts/Lobster-Regular.ttf'),
    });
    const modalizeSigninRef = useRef(null);
    const modalizeSignupRef = useRef(null);
    const onOpensignup = () => {
        modalizeSignupRef.current?.open();
    };
    const onOpensignin = () => {
        modalizeSigninRef.current?.open();
    };
    if (!loaded) {
        return <Loading></Loading>;
    }

    const Signin = () => {
        return (
            <View style={Styles.signinModal}>
                <Text style={Styles.signinText}>Login</Text>

                <TextInput placeholder="Email" style={{ borderColor: "#0B3C49", borderWidth: 2, padding: 10, width: "100%", fontSize: 20, borderRadius: 10, fontFamily: "Lobster", marginTop: 50 }} ></TextInput>
                <TextInput placeholder="Password" style={{ borderColor: "#0B3C49", borderWidth: 2, padding: 10, width: "100%", fontSize: 20, borderRadius: 10, fontFamily: "Lobster", marginTop: 20 }} ></TextInput>
                <TouchableOpacity  style={[Styles.login,{marginTop:30}]}>
                    <Text style={Styles.text}>Login</Text>
                </TouchableOpacity>
                <View></View>
            </View>
        )
    }

    const Signup = () => {
        return(
            <View style={Styles.signinModal}>
                <Text style={Styles.signinText}>Signup</Text>

                <TextInput placeholder="Email" style={{ borderColor: "#0B3C49", borderWidth: 2, padding: 10, width: "100%", fontSize: 20, borderRadius: 10, fontFamily: "Lobster", marginTop: 50 }} ></TextInput>
                <TextInput placeholder="Password" style={{ borderColor: "#0B3C49", borderWidth: 2, padding: 10, width: "100%", fontSize: 20, borderRadius: 10, fontFamily: "Lobster", marginTop: 20 }} ></TextInput>
                <TouchableOpacity  style={[Styles.login,{marginTop:30}]}>
                    <Text style={Styles.text}>Login</Text>
                </TouchableOpacity>
                <View></View>
            </View>
        )
    }

    return (
        <View style={Styles.main}>
            <Text style={Styles.welcometext}>Welcome to Hub</Text>
            <View style={Styles.logo}>
                <Image style={Styles.image} source={require('./dark.png')}></Image>
            </View>
            <TouchableOpacity onPress={onOpensignin} style={Styles.login}>
                <Text style={Styles.text}>Login</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={onOpensignup} style={Styles.signup}>
                <Text style={Styles.text}>Signup</Text>
            </TouchableOpacity>
            <Modalize adjustToContentHeight={true} ref={modalizeSigninRef}><Signin></Signin></Modalize>
            <Modalize adjustToContentHeight={true} ref={modalizeSignupRef}><Signup></Signup></Modalize>
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
    }, signinModal: {
        padding: 30,
        height: 500,
        alignItems: "center",
        backgroundColor: "#C6D8D3",
        borderTopEndRadius: 10,
        borderTopLeftRadius: 10
    }
    , signinText: {
        fontFamily: "Lobster",
        fontSize: 35,
        color: "#0B3C49", marginTop: 40
    }
})


export default Welcome