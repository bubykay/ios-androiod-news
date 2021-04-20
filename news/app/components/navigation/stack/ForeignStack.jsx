import React from 'react';
import { createStackNavigator } from "@react-navigation/stack";
import ForeignItem from '../../../screen/ForeignNewsScreen'




const Stack = createStackNavigator();
const ForeignStack = () => {
    return (
        <Stack.Navigator initialRouteName="Foreign">
            <Stack.Screen name="Foreign" component={ForeignItem} />
        </Stack.Navigator>
    );
};

export default ForeignStack;