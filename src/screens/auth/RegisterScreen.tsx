import {View} from 'react-native';
import React, {useState} from 'react';
import {
  ButtonComponent,
  ContainerComponent,
  InputComponent,
  RowComponent,
  SectionComponent,
  SpaceComponent,
  TextComponent,
} from '../../components';
import {Lock, Sms, User} from 'iconsax-react-native';
import {appColors} from '../../constants/appColors';
import AntDesign from 'react-native-vector-icons/AntDesign';
import SocialsLogin from './components/SocialsLogin';
import {globalStyles} from '../../styles/globalStyle';

const initValue = {
  username: '',
  email: '',
  password: '',
  confirmPassword: '',
};

const RegisterScreen = ({navigation}: any) => {
  const [registerValue, setRegisterValue] = useState(initValue);
  const handleChangeValue = (key: string, value: string) => {
    const data: any = {...registerValue};

    data[`${key}`] = value;

    setRegisterValue(data);
  };

  const onClickLogin = () => {
    navigation.navigate('LoginScreen');
  };

  return (
    <ContainerComponent isImageBg back>
      <SectionComponent>
        <TextComponent text="Sign up" title size={24} />
        <SpaceComponent height={21} />
        <InputComponent
          value={registerValue.username}
          onChange={val => handleChangeValue('username', val)}
          placeholder="Fullname"
          type="text"
          allowClear
          keyboardType="default"
          affix={<User size={22} color={appColors.iconColor} />}
        />
        <InputComponent
          value={registerValue.email}
          onChange={val => handleChangeValue('email', val)}
          placeholder="Enter your email"
          type="email"
          allowClear
          keyboardType="email-address"
          affix={<Sms size={22} color={appColors.iconColor} />}
        />
        <InputComponent
          value={registerValue.password}
          onChange={val => handleChangeValue('password', val)}
          placeholder="Enter your password"
          type="password"
          affix={<Lock size={22} color={appColors.iconColor} />}
        />
        <InputComponent
          value={registerValue.confirmPassword}
          onChange={val => handleChangeValue('confirmPassword', val)}
          placeholder="Enter your password"
          type="password"
          affix={<Lock size={22} color={appColors.iconColor} />}
        />
      </SectionComponent>
      <SectionComponent styles={globalStyles.center}>
        <ButtonComponent
          text={'SIGN UP'}
          iconEnd={
            <View style={globalStyles.iconEntryContainer}>
              <AntDesign name="arrowright" size={22} color={appColors.white} />
            </View>
          }
          type="primary"
          onPress={onClickLogin}
        />
      </SectionComponent>
      <SpaceComponent height={16} />
      <SocialsLogin />
      <SectionComponent>
        <RowComponent justifyContent="center">
          <TextComponent text="Already have an account?" />
          <ButtonComponent type="link" text="Sign In" onPress={onClickLogin} />
        </RowComponent>
      </SectionComponent>
    </ContainerComponent>
  );
};

export default RegisterScreen;
