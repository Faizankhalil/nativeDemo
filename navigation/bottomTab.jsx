import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {Image} from "react-native";
const Tab = createBottomTabNavigator();
import Scan from "../screens/scan";
import Order from "../screens/order"
import Menu from "../screens/menu"
import Waiter from "../screens/waiter"

function BottomTab() {
    return (
        <Tab.Navigator>
        <Tab.Screen name="scan" component={Scan} options={{
          tabBarIcon:({})=>(
          <Image source={require('../assets/imgs/navigation_qr_icon_active-01.png')}  style={{width: 40, height:40,backgroundColor:'#f15953',borderColor:'white',borderRadius:50,marginBottom:30,borderWidth:2}}/>
          )}}/>
        <Tab.Screen name="menu" component={Menu} options={{
          tabBarIcon:({})=>(
          <Image source={require('../assets/imgs/menu-01.png')}  style={{width: 25, height: 25, resizeMode: 'contain'}}/>
          )}} />
        <Tab.Screen name="oredr" component={Order} options={{
          tabBarIcon:({})=>(
          <Image source={require('../assets/imgs/navigation_orders_icon_inactive-01.png')}  style={{width: 25, height: 25, resizeMode: 'contain'}}/>
          )}} />
        <Tab.Screen name="waiter" component={Waiter} options={{
          tabBarIcon:({})=>(
          <Image source={require('../assets/imgs/navigation_call_icon_inactive-01.png')}  style={{width: 25, height: 25, resizeMode: 'contain'}}/>
          )}} />
      </Tab.Navigator>
    )
}

export default BottomTab
