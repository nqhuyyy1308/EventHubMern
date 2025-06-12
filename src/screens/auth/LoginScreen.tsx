import {View, Text} from 'react-native';
import React, {useState} from 'react';
import {ButtonComponent, InputComponent} from '../../components';
import {globalStyles} from '../../styles/globalStyle';
import {Lock, Sms} from 'iconsax-react-native';
import {appColors} from '../../constants/appColors';

const LoginScreen = ({navigation}: any) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const onClickNext = () => {
    navigation.navigate('OnBoardingScreen');
  };
  return (
    <View style={globalStyles.containerCenter}>
      <InputComponent
        value={email}
        onChange={val => setEmail(val)}
        placeholder="Enter your email"
        type="email"
        allowClear
        keyboardType="email-address"
        affix={<Sms size={22} color={appColors.iconColor} />}
      />
      <InputComponent
        value={password}
        onChange={val => setPassword(val)}
        placeholder="Enter your password"
        type="password"
        allowClear
        affix={<Lock size={22} color={appColors.iconColor} />}
      />
      <ButtonComponent
        text={'LOGINNNN'}
        iconStart={<Text>icon</Text>}
        type="primary"
      />
    </View>
  );
};

export default LoginScreen;
