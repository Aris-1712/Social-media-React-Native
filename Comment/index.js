import React from 'react'
import { StyleSheet, View, Text } from 'react-native'
import { Avatar, Title, Divider, Subheading } from 'react-native-paper'
const Comment=(props)=>{

    // if(props.all){
        return(
            <View style={Styles.main}>
                <View style={Styles.profile}>
                <Avatar.Text style={Styles.icon} size={40} label="AG" />
                </View>
                <View style={Styles.comment}>
                    <Subheading>abcd</Subheading>
                    <Text>abcd</Text>
                </View>
            </View>
        )
    // }

}

const Styles=StyleSheet.create({
    main:{
        flexDirection:"row"
        ,alignItems:"center"
    }
    ,profile:{
        marginRight:10
    },
    comment:{
        backgroundColor:"#CECECA",
        borderRadius:10,
        // height:50,
        // width:"100%",
        flex:1,
        padding:10
    }
})


export default Comment