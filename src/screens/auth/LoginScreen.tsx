import {View, StyleSheet, Image, Switch} from 'react-native';
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
import {Lock, Sms} from 'iconsax-react-native';
import {appColors} from '../../constants/appColors';
import AntDesign from 'react-native-vector-icons/AntDesign';
import SocialsLogin from './components/SocialsLogin';
import {globalStyles} from '../../styles/globalStyle';

const LoginScreen = ({navigation}: any) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [remerber, setRemember] = useState(true);
  const onClickLogin = () => {
    navigation.navigate('HomeScreen');
  };

  const onClickRegister = () => {
    navigation.navigate('RegisterScreen');
  };
  return (
    <ContainerComponent isImageBg title="">
      <SectionComponent>
        <Image
          source={require('../../assets/images/text-logo.png')}
          width={162}
          height={114}
          style={styles.imgLogo}
        />
      </SectionComponent>
      <SectionComponent>
        <TextComponent text="Sign in" title size={24} />
        <SpaceComponent height={21} />
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
        <RowComponent justifyContent="space-between">
          <RowComponent
            styles={globalStyles.gap}
            onPress={() => setRemember(!remerber)}>
            <Switch
              value={remerber}
              onChange={() => setRemember(!remerber)}
              trackColor={{true: appColors.primary}}
              thumbColor={appColors.white}
            />
            <TextComponent text="Remember me" />
          </RowComponent>
          <ButtonComponent
            text={'Forgot Password ?'}
            type="link"
            textColor={appColors.text}
            onPress={() => navigation.navigate('ForgotScreen')}
          />
        </RowComponent>
      </SectionComponent>
      <SpaceComponent height={16} />
      <SectionComponent styles={globalStyles.center}>
        <ButtonComponent
          text={'SIGN IN'}
          iconEnd={
            <View style={globalStyles.iconEntryContainer}>
              <AntDesign name="arrowright" size={22} color={appColors.white} />
            </View>
          }
          type="primary"
          onPress={onClickLogin}
        />
      </SectionComponent>
      <SocialsLogin />
      <SectionComponent>
        <RowComponent justifyContent="center">
          <TextComponent text="Don't have an account?" />
          <ButtonComponent
            type="link"
            text="Sign Up"
            onPress={onClickRegister}
          />
        </RowComponent>
      </SectionComponent>
    </ContainerComponent>
  );
};

const styles = StyleSheet.create({
  imgLogo: {alignSelf: 'center', marginTop: 25},
});

export default LoginScreen;
