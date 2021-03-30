import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../Screens/Home';
import React from 'react'
import  Icon  from 'react-native-vector-icons/AntDesign';
import Search from '../Screens/Search';
const Tab = createBottomTabNavigator();

const Navigator=()=> {
  return (
    <Tab.Navigator tabBarOptions={{tabStyle:{marginVertical:5},inactiveTintColor:"black",activeTintColor:"#1C7293"}}>
      <Tab.Screen options={{tabBarIcon:(props)=>(
              <Icon color={props.focused?"#1C7293":"black"} size={25} name="home"></Icon>
          ),tabBarLabel:"Home"
      }} name="Home" component={Home} />
      <Tab.Screen options={{tabBarIcon:(props)=>(
              <Icon color={props.focused?"#1C7293":"black"} size={25} name="search1"></Icon>
          ),tabBarLabel:"Search"
      }} name="Search" component={Search} />
    </Tab.Navigator>
  );
}


export default Navigator