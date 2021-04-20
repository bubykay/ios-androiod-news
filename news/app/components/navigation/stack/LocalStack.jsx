import React from 'react';
import { createStackNavigator } from "@react-navigation/stack";


import LocalNewsDetailScreen from '../../../screen/LocalNewsDetailScreen';
import LocalNewsScreen from '../../../screen/LocalNewsScreen';


const Stack = createStackNavigator();

const LocalStack = () => {
    
    return (
        <Stack.Navigator 
        initialRouteName="Full" 
        screenOptions={{
                headerStyle:{
                    backgroundColor:'purple',
                }   
            }}
            headerBackTitle=""
            mode="modal"
            >
                
            <Stack.Screen name="Full" component={LocalNewsScreen} options={{title:"Nigeria News", headerShown:false}} />

            <Stack.Screen name="Detail" 
            component={LocalNewsDetailScreen} 
            options={({route})=>({title:route.params.title, headerShown:false})} 
            />
        </Stack.Navigator>
    );
};

export default LocalStack;
