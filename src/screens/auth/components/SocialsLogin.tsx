import React from 'react';
import {
  ButtonComponent,
  SectionComponent,
  TextComponent,
} from '../../../components';
import {appColors} from '../../../constants/appColors';
import {fontFamilies} from '../../../constants/fontFamilies';
import {globalStyles} from '../../../styles/globalStyle';
import Google from '../../../assets/svgs/Google.svg';
import Facebook from '../../../assets/svgs/Facebook.svg';

const SocialsLogin = () => {
  const gap = 16;
  return (
    <SectionComponent styles={[{gap}, globalStyles.center]}>
      <TextComponent
        styles={[globalStyles.textCenter]}
        text={'OR'}
        color={appColors.gray2}
        font={fontFamilies.medium}
        size={20}
      />
      <ButtonComponent
        text="Login with Google"
        type="primary"
        color={appColors.white}
        textColor={appColors.text}
        iconStart={<Google />}
      />
      <ButtonComponent
        text="Login with Facebook"
        type="primary"
        color={appColors.white}
        textColor={appColors.text}
        iconStart={<Facebook />}
      />
    </SectionComponent>
  );
};

export default SocialsLogin;
