import React, { useState } from 'react'
import { View, StyleSheet, Image, KeyboardAvoidingView, Platform, TextInput } from 'react-native'
import { Avatar, Title, Divider, Subheading } from 'react-native-paper'
import Icon from 'react-native-vector-icons/FontAwesome'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import Comment from '../Comment'
import NewPost from '../NewPost'
const Post = (props) => {
    const [text, setText] = useState('')
    return (
        <KeyboardAwareScrollView>
               <NewPost></NewPost> 
            <View style={Styles.CardTitle}>
                <View style={[Styles.CardTitle, { padding: 10 }]}><Avatar.Text style={Styles.icon} size={40} label="AG" />
                    <Title>{"ABCD"}</Title>
                </View>

            </View>
            <Image style={{ height: 300, width: "100%" }} source={{ uri: "https://reactjs.org/logo-og.png" }}></Image>
            <Divider style={{ margin: 10, padding: 0.5 }} />
            <View style={Styles.padding}>
                <View style={Styles.CardTitle}>
                    <Icon name='heart' style={[Styles.icon, { color: "red" }]} size={20}></Icon>
                    <Subheading>Like</Subheading >
                    <Icon name='comment-o' style={[Styles.icon, { color: "blue", marginLeft: 20 }]} size={20}></Icon>
                    <Subheading>Comment</Subheading >
                </View>
            </View>
            <View style={Styles.padding}>
                <Divider style={{ marginTop: 10, padding: 0.5 }} />
                <View style={{ marginVertical: 10 }}><Comment></Comment></View>
                <Divider style={{ marginTop: 10, padding: 0.5 }} />
                <View style={{flexDirection:"row",alignItems:"center",marginVertical:10}}>
                    <View style={{marginRight:10}}><Avatar.Text style={Styles.icon} size={40} label="AG" /></View>
                    <View style={{borderRadius:15,borderWidth:1,borderColor:"#CECECA",flex:1}}><TextInput
                    placeholder="Enter a comment..."
                    value={text}
                    onChangeText={text => setText(text)}
                /></View>
                </View>
            </View>
        </KeyboardAwareScrollView>
    )
}
const Styles = StyleSheet.create({
    padding: { paddingHorizontal: 10 },
    CardTitle: {
        flexDirection: "row",
        // justifyContent:"space-between",
        alignItems: "center"
    },
    icon: {
        marginHorizontal: 5
    }
})


export default Post