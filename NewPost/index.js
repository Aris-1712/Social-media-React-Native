import React, { useState } from 'react'
import { StyleSheet, View, TextInput } from 'react-native'
import { Avatar, Title, Divider, Subheading,Button } from 'react-native-paper'
const NewPost=(props)=>{
    const [text,setText]=useState('')
    return(
        <View style={{paddingBottom:20}}>
        <View style={styles.main}>
            <View style={styles.avatar}>
            <Avatar.Text style={styles.icon} size={40} label="AG" />
            </View>
            <View style={styles.post}>
            <TextInput
                    placeholder="What's on your mind..."
                    value={text}
                    onChangeText={text => setText(text)}
                />
            </View>
        </View>
        <View style={styles.action}>
        <Button color="red" icon="image" mode="outlined" onPress={() => console.log('Pressed')}>ADD IMAGE</Button>
        <Button color="green" icon="send" mode="outlined" onPress={() => console.log('Pressed')}>POST</Button>
        </View>
        </View>
    )

}

const styles=StyleSheet.create({
    main:{
        flexDirection:"row",
        paddingHorizontal:20,paddingBottom:20
    },
    avatar:{
        marginRight:10
    },
    post:{
        flex:1
    },
    action:{
        flexDirection:"row",
        justifyContent:"space-evenly",
        alignItems:"center",
        height:40
    }
})

export default NewPost