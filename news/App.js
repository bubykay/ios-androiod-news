import React from 'react';
import Tabs from './app/components/navigation/Tabs'

import { NavigationContainer } from '@react-navigation/native';

export default function App() {
  return (
    <NavigationContainer>
      <Tabs />
    </NavigationContainer>
  );
};