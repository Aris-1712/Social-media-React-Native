import 'react-native-gesture-handler';
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import Navigator from './Navigation';
import { StatusBar } from 'react-native';
// import { Provider as PaperProvider,Avatar, Button, Card, Title, Paragraph  } from 'react-native-paper';
// import NewPost from './NewPost';
// import Post from './Post'

const App=(props)=>{

  return(
 
    <NavigationContainer>
     <Navigator></Navigator>
    </NavigationContainer>
   
  )
}

export default App