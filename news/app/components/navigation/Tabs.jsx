import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';


import LocalStack from './stack/LocalStack'
import HomeStack from './stack/HomeStack';
import ForeignStack from './stack/ForeignStack';
import GistStack from './stack/GistStack';
import TechStack from './stack/TechStack';


const Tab = createBottomTabNavigator();

const Tabs = () => {
    
    return (
        <Tab.Navigator initialRouteName="Home" 
        screenOptions={({route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
              let iconName;
              if (route.name === 'Local') {
                iconName = focused ? 'location' : 'location-outline';
              } else if (route.name === 'Foreign') {
                iconName = focused ? 'globe' : 'globe-outline';
              }else if (route.name === 'Gist') {
                iconName = focused ? 'newspaper' : 'newspaper-outline';
              }else if (route.name === 'Tech') {
                iconName = focused ? 'laptop' : 'laptop-outline';
              }else if (route.name === 'Home') {
                iconName = focused ? 'home' : 'home-outline';
              }
              return <Ionicons name={iconName} size={size} color={color} />;
             },
            
          })} 
          tabBarOptions={{
            activeTintColor:'white',
              style:{
                backgroundColor: 'purple'
              },
              labelStyle:
              {
                  fontSize:13,
                color: 'white'
        
                }
            }}
        >
            <Tab.Screen name="Home" component={HomeStack} options={{title:'HOME'}}/>
            <Tab.Screen name="Local" component={LocalStack} options={{title:'LOCAL'}}/>
            <Tab.Screen name="Foreign" component={ForeignStack} options={{title:'FOREIGN'}} />
            <Tab.Screen name="Gist" component={GistStack} options={{title:'GIST'}} />
            <Tab.Screen name="Tech" component={TechStack} options={{title:'TECH'}} />
        </Tab.Navigator>
    );
};

export default Tabs;