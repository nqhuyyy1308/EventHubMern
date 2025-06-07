import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import TabNavigator from './TabNavigator';
import OnBoardingScreen from '../screens/auth/OnBoardingScreen';
import LoginScreen from '../screens/auth/LoginScreen';
import {NavigationContainer} from '@react-navigation/native';

const MainStack = () => {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen
          name="OnBoardingScreen"
          component={OnBoardingScreen}
          options={{gestureEnabled: false}}
        />
        <Stack.Screen
          name="LoginScreen"
          component={LoginScreen}
          options={{gestureEnabled: false}}
        />
        <Stack.Screen name="HomeTab" component={TabNavigator} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MainStack;
