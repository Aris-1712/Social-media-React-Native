import React from 'react'
import { StyleSheet, Image, View } from 'react-native'
// import HeaderImage from '../../assets/header.png'
const Header=(props)=>{

    return(
        <View
        style={Styles.main}>
            <Image style={{width:90,height:90}} source={require('./header.png')}></Image>
        </View>
    )

}

const Styles=StyleSheet.create({
    main:{
        flexDirection:"row",
        // paddingBottom:5,
        backgroundColor:"#f2f2f2",
        justifyContent:"center"
        // height:80
    }
})

export default Header