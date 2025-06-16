import {
  ActivityIndicator,
  Image,
  ImageBackground,
  StyleSheet,
} from 'react-native';
import React from 'react';
import {appInfos} from '../constants/appInfos';
import {SpaceComponent} from '../components';
import {appColors} from '../constants/appColors';

const SplashScreen = () => {
  return (
    <ImageBackground
      source={require('../assets/images/bg-splash-img.png')}
      style={styles.imageBg}>
      <Image
        source={require('../assets/images/logo.png')}
        style={styles.imageScale}
      />
      <SpaceComponent height={16} />
      <ActivityIndicator color={appColors.primary} size="small" />
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  imageBg: {
    flex: 1,
    justifyContent: 'center',
  },

  imageScale: {
    alignSelf: 'center',
    width: appInfos.sizes.WIDTH * 0.7,
    resizeMode: 'contain',
  },
});

export default SplashScreen;
