import React from 'react';
import { createStackNavigator } from "@react-navigation/stack";
import GistNewsScreen from '../../../screen/GistNewsScreen'



const Stack = createStackNavigator();

const GistStack = () => {
    return (
        <Stack.Navigator initialRouteName="Gist">
            <Stack.Screen name="Gist" component={GistNewsScreen} />
        </Stack.Navigator>
    );
};

export default GistStack;