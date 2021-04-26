import React from 'react';
import LottieView from 'lottie-react-native'
import {ActivityIndicator} from 'react-native'

const Loader = () => {
    // return (
    //    <LottieView source={require('../../assets/animation/loader.json')} autoPlay loop />
    // );
    return (
        <ActivityIndicator size="large" />
    )
};

export default Loader;