import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import AuthStack from './AuthNavigation';

export default function RouteNavigation() {
  return (
    <NavigationContainer>
        <AuthStack />
    </NavigationContainer>
  )
}