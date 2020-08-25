import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
const Stack = createStackNavigator();
import BottomTab from "./bottomTab"

function StackNav() {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Jaac" component={BottomTab} />
        </Stack.Navigator>
    )
}

export default StackNav
