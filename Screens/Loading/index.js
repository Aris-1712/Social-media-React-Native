import React from 'react'
import LottieView from 'lottie-react-native';
import {View} from 'react-native'
const Loading=(props)=>{

    return(
        <View style={{backgroundColor:"#C6D8D3",flex:1,padding:50}}>
 <LottieView source={require('../Lottie/loading_old.json')} autoPlay loop />
     
       
        </View>
    )

}

export default Loading