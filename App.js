import 'react-native-gesture-handler';
import React, { useEffect, useState } from 'react'
import { NavigationContainer } from '@react-navigation/native';
import Navigator from './Navigation';
import { StatusBar } from 'react-native';
import Loading from './Screens/Loading';
// import { Provider as PaperProvider,Avatar, Button, Card, Title, Paragraph  } from 'react-native-paper';
// import NewPost from './NewPost';
// import Post from './Post'

const App=(props)=>{
  const [loading,setLoading]=useState(true)
  
  useEffect(()=>{
    setTimeout(() => {
      setLoading(false)
    }, 5000);
  },[])
  if(loading){
    return(
      <Loading></Loading>
    )
  }
  return(
 
    <NavigationContainer>
     <Navigator></Navigator>
    </NavigationContainer>
   
  )
}

export default App