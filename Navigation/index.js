import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../Screens/Home';
import React from 'react'
import  Icon  from 'react-native-vector-icons/AntDesign';
const Tab = createBottomTabNavigator();

const Navigator=()=> {
  return (
    <Tab.Navigator tabBarOptions={{tabStyle:{marginVertical:5},inactiveTintColor:"black",activeTintColor:"black"}}>
      <Tab.Screen options={{tabBarIcon:(props)=>(
              <Icon size={25} name="home"></Icon>
          ),tabBarLabel:"Home",tabBarBadge:"abcd"
      }} name="Home" component={Home} />
      {/* <Tab.Screen name="Settings" component={SettingsScreen} /> */}
    </Tab.Navigator>
  );
}


export default Navigator