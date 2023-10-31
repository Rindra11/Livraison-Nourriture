import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import SignUp from '../screens/authScreens/SignUp';
import SignScreen from '../screens/authScreens/SignScreen';
import {TransitionPresets} from '@react-navigation/stack';
import Accueil from '../screens/Accueil';

const Auth = createNativeStackNavigator();

export default function AuthStack() {
  return (
    <Auth.Navigator>
      <Auth.Screen
        name="SignUp"
        component={SignUp}
        options={{
          headerShown: false,
          ...TransitionPresets.RevealFromBottomAndroid
        }}
      />

      <Auth.Screen
        name="SignScreen"
        component={SignScreen}
        options={{
          headerShown: false,
          ...TransitionPresets.RevealFromBottomAndroid
        }}
      />

      <Auth.Screen
        name="Accueil"
        component={Accueil}
        options={{
          headerShown: false,
          ...TransitionPresets.RevealFromBottomAndroid
        }}
      />
      
    </Auth.Navigator>
  );
}
