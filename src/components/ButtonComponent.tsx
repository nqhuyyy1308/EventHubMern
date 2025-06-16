import {
  ViewStyle,
  StyleProp,
  TextStyle,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import React, {ReactNode} from 'react';
import {TextComponent} from '.';
import {globalStyles} from '../styles/globalStyle';
import {appColors} from '../constants/appColors';
import {fontFamilies} from '../constants/fontFamilies';

interface Props {
  iconStart?: ReactNode;
  iconEnd?: ReactNode;
  text: string;
  type?: 'primary' | 'outlined' | 'link';
  color?: string;
  styles?: StyleProp<ViewStyle>;
  textColor?: string;
  textStyles?: StyleProp<TextStyle>;
  textSize?: number;
  textFont?: string;
  onPress?: () => void;
}

const ButtonComponent = (props: Props) => {
  const {
    iconStart,
    text,
    type,
    color,
    styles,
    textColor,
    textStyles,
    textFont,
    textSize,
    onPress,
    iconEnd,
  } = props;
  return type === 'primary' ? (
    <TouchableOpacity
      onPress={onPress}
      style={[
        globalStyles.button,
        globalStyles.shadow,
        internalStyles.widthBtn,
        {backgroundColor: color ?? appColors.primary},
        styles,
      ]}>
      {iconStart}
      <TextComponent
        text={text}
        styles={[
          textStyles,
          iconStart ? internalStyles.marginLeft : null,
          iconEnd ? internalStyles.textButtonCenter : null,
        ]}
        color={textColor ?? appColors.white}
        flex={iconEnd ? 1 : 0}
        font={textFont ?? fontFamilies.medium}
        size={textSize ?? 16}
      />
      {iconEnd}
    </TouchableOpacity>
  ) : type === 'outlined' ? (
    <TouchableOpacity
      onPress={onPress}
      style={[globalStyles.button, internalStyles.outlinedButton, styles]}>
      {iconStart}
      <TextComponent
        text={text}
        styles={[textStyles, iconStart ? internalStyles.marginLeft : null]}
        color={textColor ?? appColors.primary}
        flex={iconEnd ? 1 : 0}
        font={textFont ?? fontFamilies.medium}
        size={textSize ?? 16}
      />
      {iconEnd}
    </TouchableOpacity>
  ) : (
    <TouchableOpacity
      onPress={onPress}
      style={[styles, internalStyles.textButton]}>
      {iconStart}
      <TextComponent
        text={text}
        styles={[textStyles, iconStart ? internalStyles.marginLeft : null]}
        color={textColor ?? appColors.primary}
        flex={iconEnd ? 1 : 0}
        font={textFont ?? fontFamilies.medium}
        size={textSize ?? 14}
      />
      {iconEnd}
    </TouchableOpacity>
  );
};

const internalStyles = StyleSheet.create({
  outlinedButton: {
    backgroundColor: appColors.white,
    borderWidth: 1,
    borderColor: appColors.primary,
  },

  textButton: {
    padding: 0,
    paddingHorizontal: 4,
  },

  marginLeft: {
    marginLeft: 12,
  },

  textButtonCenter: {
    textAlign: 'center',
  },

  widthBtn: {
    width: '85%',
  },
});

export default ButtonComponent;
