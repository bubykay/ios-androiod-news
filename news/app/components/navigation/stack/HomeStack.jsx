import React from 'react';
import {createStackNavigator} from '@react-navigation/stack'
import HomeScreen from '../../../screen/HomeScreen'

const Tab = createStackNavigator()
const HomeStack = () => {
    return (
        <Tab.Navigator >
            <Tab.Screen name="Home" component={HomeScreen} options={{title:"Agregated News Home"}}/>
        </Tab.Navigator>
    );
};

export default HomeStack;