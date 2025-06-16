import React, {useState} from 'react';
import {
  ButtonComponent,
  ContainerComponent,
  InputComponent,
  SectionComponent,
  TextComponent,
} from '../../components';
import {Sms} from 'iconsax-react-native';
import {appColors} from '../../constants/appColors';
import {globalStyles} from '../../styles/globalStyle';
import {View} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';

const ForgotScreen = ({navigation}: any) => {
  const [email, setEmail] = useState('');
  return (
    <ContainerComponent isImageBg back>
      <SectionComponent styles={[globalStyles.gap, {width: '75%'}]}>
        <TextComponent title text="Reset Password" />
        <TextComponent
          text="Please enter your email address to request a password reset."
          size={16}
        />
      </SectionComponent>
      <SectionComponent>
        <InputComponent
          type="email"
          placeholder="abc@gmail.com"
          value={email}
          onChange={() => setEmail('')}
          allowClear
          affix={<Sms size={22} color={appColors.iconColor} />}
        />
      </SectionComponent>
      <SectionComponent styles={globalStyles.center}>
        <ButtonComponent
          text="SEND"
          type="primary"
          iconEnd={
            <View style={globalStyles.iconEntryContainer}>
              <AntDesign name="arrowright" size={22} color={appColors.white} />
            </View>
          }
          onPress={() => navigation.navigate('VerifycationScreen')}
        />
      </SectionComponent>
    </ContainerComponent>
  );
};

export default ForgotScreen;
