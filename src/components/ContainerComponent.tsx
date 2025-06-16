import {
  View,
  StyleProp,
  ViewStyle,
  ImageBackground,
  ScrollView,
  ImageProps,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import React, {ReactNode} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {globalStyles} from '../styles/globalStyle';
import {useNavigation} from '@react-navigation/native';
import {ArrowLeft} from 'iconsax-react-native';
import {appColors} from '../constants/appColors';
import RowComponent from './RowComponent';
import TextComponent from './TextComponent';
import {fontFamilies} from '../constants/fontFamilies';

interface Props {
  children: ReactNode;
  isImageBg?: boolean;
  isScrollable?: boolean;
  title?: string;
  styles?: StyleProp<ViewStyle>;
  image?: ImageProps;
  back?: boolean;
}

const ContainerComponent = (props: Props) => {
  const {children, isImageBg, isScrollable, styles, image, back, title} = props;
  const flex = 1;
  const navigation = useNavigation();

  const returnContainer = isScrollable ? (
    <ScrollView>
      {back && (
        <View style={internalStyles.back}>
          <RowComponent>
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <ArrowLeft size={28} color={appColors.text} />
            </TouchableOpacity>
            {title && (
              <TextComponent text={title} styles={internalStyles.text} />
            )}
          </RowComponent>
        </View>
      )}
      {children}
    </ScrollView>
  ) : (
    <View>
      {back && (
        <View style={internalStyles.back}>
          <RowComponent>
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <ArrowLeft size={28} color={appColors.text} />
            </TouchableOpacity>
            {title && (
              <TextComponent text={title} styles={internalStyles.text} />
            )}
          </RowComponent>
        </View>
      )}
      {children}
    </View>
  );
  return isImageBg ? (
    <ImageBackground
      source={image ?? require('../assets/images/bg-splash-img.png')}
      style={{flex}}
      imageStyle={{flex}}>
      <SafeAreaView style={[{flex}, styles]}>{returnContainer}</SafeAreaView>
    </ImageBackground>
  ) : (
    <SafeAreaView style={[globalStyles.container, styles]}>
      <View>{returnContainer}</View>
    </SafeAreaView>
  );
};

const internalStyles = StyleSheet.create({
  text: {
    fontFamily: fontFamilies.medium,
    fontSize: 24,
  },

  back: {
    paddingHorizontal: 16,
    paddingVertical: 10,
    minHeight: 48,
    minWidth: 48,
  },
});

export default ContainerComponent;
