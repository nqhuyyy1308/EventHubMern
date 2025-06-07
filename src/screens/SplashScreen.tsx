import {ActivityIndicator, Image, ImageBackground} from 'react-native';
import React from 'react';
import {appInfos} from '../constants/appInfos';
import {SpaceComponent} from '../components';
import {appColors} from '../constants/appColors';

const SplashScreen = () => {
  return (
    <ImageBackground
      source={require('../assets/images/bg-splash-img.png')}
      style={{flex: 1, justifyContent: 'center'}}>
      <Image
        source={require('../assets/images/logo.png')}
        style={{
          alignSelf: 'center',
          width: appInfos.sizes.WIDTH * 0.7,
          resizeMode: 'contain',
        }}
      />
      <SpaceComponent height={16} />
      <ActivityIndicator color={appColors.primary} size="small" />
    </ImageBackground>
  );
};

export default SplashScreen;
