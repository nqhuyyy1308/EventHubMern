import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import TabNavigator from './TabNavigator';
import {NavigationContainer} from '@react-navigation/native';
import {
  ForgotScreen,
  HomeScreen,
  LoginScreen,
  OnBoardingScreen,
  RegisterScreen,
  VerifycationScreen,
} from '../screens';

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
        <Stack.Screen name="RegisterScreen" component={RegisterScreen} />
        <Stack.Screen name="ForgotScreen" component={ForgotScreen} />
        <Stack.Screen
          name="VerifycationScreen"
          component={VerifycationScreen}
        />
        <Stack.Screen
          name="HomeScreen"
          component={HomeScreen}
          options={{gestureEnabled: false}}
        />
        <Stack.Screen name="HomeTab" component={TabNavigator} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MainStack;
