import React from 'react';
import {View, Text} from 'react-native'
import { createStackNavigator } from "@react-navigation/stack";




const Stack = createStackNavigator()

const HomeScreen = () => {
    return (
        <View>
            <Text>
                This is home o o
            </Text>
        </View>
    );
};


export default HomeScreen;