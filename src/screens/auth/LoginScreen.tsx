import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import {ButtonComponent} from '../../components';

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
      <ButtonComponent
        text={'LOGINNNN'}
        iconEnd={<Text>icon</Text>}
        type="link"
      />
    </View>
  );
};

export default LoginScreen;
