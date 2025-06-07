import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';

const LoginScreen = ({navigation}: any) => {
  const onClickNext = () => {
    navigation.navigate('OnBoardingScreen');
  };
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>LoginScreen</Text>
      <TouchableOpacity
        style={{alignItems: 'center', backgroundColor: '#DDDDDD', padding: 10}}
        onPress={onClickNext}>
        <Text>Login</Text>
      </TouchableOpacity>
    </View>
  );
};

export default LoginScreen;
