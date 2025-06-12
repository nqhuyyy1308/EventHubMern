import {ViewStyle, StyleProp, TextStyle, TouchableOpacity} from 'react-native';
import React, {ReactNode} from 'react';
import {TextComponent} from '.';
import {globalStyles} from '../styles/globalStyle';
import {appColors} from '../constants/appColors';

interface Props {
  iconStart?: ReactNode;
  iconEnd?: ReactNode;
  text: string;
  type?: 'primary' | 'outlined' | 'link';
  color?: string;
  styles?: StyleProp<ViewStyle>;
  textColor?: string;
  textStyles?: StyleProp<TextStyle>;
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
    onPress,
    iconEnd,
  } = props;
  return type === 'primary' ? (
    <TouchableOpacity
      onPress={onPress}
      style={[
        globalStyles.button,
        {backgroundColor: color ?? appColors.primary},
        styles,
      ]}>
      {iconStart}
      <TextComponent
        text={text}
        styles={[textStyles, {marginLeft: iconStart ? 12 : 0}]}
        color={textColor ?? appColors.white}
        flex={iconEnd ? 1 : 0}
      />
      {iconEnd}
    </TouchableOpacity>
  ) : type === 'outlined' ? (
    <TouchableOpacity
      onPress={onPress}
      style={[
        globalStyles.button,
        {
          backgroundColor: color ?? appColors.white,
          borderWidth: 1,
          borderColor: appColors.primary,
        },
        styles,
      ]}>
      {iconStart}
      <TextComponent
        text={text}
        styles={[textStyles, {marginLeft: iconStart ? 12 : 0}]}
        color={textColor ?? appColors.primary}
        flex={iconEnd ? 1 : 0}
      />
      {iconEnd}
    </TouchableOpacity>
  ) : (
    <TouchableOpacity
      onPress={onPress}
      style={[
        styles,
        globalStyles.button,
        {backgroundColor: color ?? appColors.white},
      ]}>
      {iconStart}
      <TextComponent
        text={text}
        styles={[textStyles, {marginLeft: iconStart ? 12 : 0}]}
        color={textColor ?? appColors.primary}
        flex={iconEnd ? 1 : 0}
      />
      {iconEnd}
    </TouchableOpacity>
  );
};

export default ButtonComponent;
