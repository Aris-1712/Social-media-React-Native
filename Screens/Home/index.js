import React from 'react'
import { StatusBar, View } from 'react-native';
import { Provider as PaperProvider, Avatar, Button,Divider, Card, Title, Paragraph } from 'react-native-paper';
import NewPost from '../../NewPost';
import Post from '../../Post';
import Header from '../Header';
const Home = (props) => {
    return (

        <PaperProvider>
            <StatusBar hidden={true}  />
            <Header></Header>
            <Post></Post>
        </PaperProvider>

    )
}


export default Home