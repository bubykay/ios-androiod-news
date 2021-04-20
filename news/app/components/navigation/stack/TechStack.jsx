import React from 'react';
import {createStackNavigator} from '@react-navigation/stack'
import TechNewsScreen from '../../../screen/TechNewsScreen'


const Stack = createStackNavigator()
const TechStack = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Tech" component={TechNewsScreen} />
        </Stack.Navigator>
    );
};

export default TechStack;