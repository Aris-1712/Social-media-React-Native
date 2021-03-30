import React from 'react'
import { StyleSheet, Image, View } from 'react-native'
// import HeaderImage from '../../assets/header.png'
const Header=(props)=>{

    return(
        <View
        style={Styles.main}>
            <Image style={{width:80,height:80}} source={require('./header.png')}></Image>
        </View>
    )

}

const Styles=StyleSheet.create({
    main:{
        flexDirection:"row",
        // paddingBottom:5,
        backgroundColor:"#1F2B33",
        justifyContent:"center"
        // height:80
    }
})

export default Header