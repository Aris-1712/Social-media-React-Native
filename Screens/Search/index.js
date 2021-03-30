import React, { useState } from 'react'
import { ScrollView, StyleSheet, Text, View } from 'react-native'
import { SearchBar } from 'react-native-elements';

const Search = (props) => {
    const [search, setSearch] = useState('')
    return (
        <View>
            <SearchBar
                containerStyle={Styles.searchBarContainer}
                inputContainerStyle={Styles.searchBarInner}
                placeholder="Search"
                onChangeText={(ele) => { setSearch(ele) }}
                value={search}
            />
            <ScrollView>
                {[...Array(100)].map((ele,ind)=>{return(<View key={ind} style={Styles.listItem}><Text>ABCD</Text></View>)})}
            </ScrollView>
        </View>
    )

}
const Styles = StyleSheet.create({
    listItem: {
        padding: 10,
        borderBottomColor:"#DCE2E4",
        borderBottomWidth:1
    },searchBarContainer:{
        backgroundColor: "white", borderBottomColor: "#DCE2E4"
    },searchBarInner:{backgroundColor: "#DCE2E4", margin: 5, borderRadius: 15 }
})

export default Search