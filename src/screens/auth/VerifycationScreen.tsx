import {View, Text} from 'react-native';
import React, {useCallback, useEffect, useState} from 'react';
import {
  ButtonComponent,
  ContainerComponent,
  RowComponent,
  SectionComponent,
  TextComponent,
} from '../../components';
import {globalStyles} from '../../styles/globalStyle';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {appColors} from '../../constants/appColors';
import OTPInputView from '@twotalltotems/react-native-otp-input';
import {fontFamilies} from '../../constants/fontFamilies';

const VerifycationScreen = () => {
  const [timer, setTimer] = useState(59);
  const timeOutCallback = useCallback(
    () => timer > 0 && setTimer(currentTimer => currentTimer - 1),
    [timer],
  );

  useEffect(() => {
    timer >= 0 && setTimeout(timeOutCallback, 1000);
  }, [timer, timeOutCallback]);

  const onClickReset = () => {
    if (timer === 0) {
      setTimer(59);
    }
  };
  return (
    <ContainerComponent back>
      <SectionComponent styles={[globalStyles.gap, {width: '75%'}]}>
        <TextComponent text="Verifycation" title />
        <TextComponent
          text="We’ve send you the verification code on +1 2620 0323 7631"
          size={16}
        />
      </SectionComponent>
      <SectionComponent styles={globalStyles.center}>
        <OTPInputView
          pinCount={4}
          style={{
            width: '90%',
            height: 50,
            marginVertical: 15,
            marginBottom: 25,
          }}
          codeInputFieldStyle={{
            borderColor: appColors.gray,
            borderRadius: 12,
            height: 55,
            width: 55,
          }}
          placeholderCharacter="-"
          placeholderTextColor={appColors.gray2}
        />
      </SectionComponent>
      <SectionComponent styles={globalStyles.center}>
        <ButtonComponent
          text="CONTINUE"
          type="primary"
          iconEnd={
            <View style={globalStyles.iconEntryContainer}>
              <AntDesign name="arrowright" size={22} color={appColors.white} />
            </View>
          }
        />
      </SectionComponent>
      <SectionComponent>
        <RowComponent gap={2} justifyContent="center">
          <TextComponent text="Re-send code in" size={16} />
          {timer > 0 ? (
            <TextComponent
              text={`00:${timer > 10 ? timer : `0${timer}`}`}
              size={16}
              color={appColors.primary}
            />
          ) : (
            <ButtonComponent
              text="Resend"
              type="link"
              onPress={onClickReset}
              textSize={16}
              textFont={fontFamilies.regular}
            />
          )}
        </RowComponent>
      </SectionComponent>
    </ContainerComponent>
  );
};

export default VerifycationScreen;
