import {StatusBar} from 'expo-status-bar'
import {SafeAreaView, ScrollView} from 'react-native'

import React from 'react';

const Screen = ({children}) => {
    return (
        <SafeAreaView>
            <StatusBar  />
            {children}
        </SafeAreaView>
    );
};

export default Screen;