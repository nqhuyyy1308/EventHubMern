import {Text, StyleProp, TextStyle} from 'react-native';
import React from 'react';
import {appColors} from '../constants/appColors';
import {fontFamilies} from '../constants/fontFamilies';
import {globalStyles} from '../styles/globalStyle';

interface Props {
  text: string;
  color?: string;
  size?: number;
  flex?: number;
  font?: string;
  styles?: StyleProp<TextStyle>;
  title?: boolean;
  lineHeight?: number;
}

const TextComponent = (props: Props) => {
  return (
    <Text
      style={[
        globalStyles.text,
        {
          color: props.color ?? appColors.text,
          fontSize: props.size ?? (props.title ? 24 : 14),
          lineHeight: props.lineHeight ?? (props.title ? 32 : 28),
          flex: props.flex ?? 0,
          fontFamily:
            props.font ??
            (props.title ? fontFamilies.medium : fontFamilies.regular),
        },
        props.styles,
      ]}>
      {props.text}
    </Text>
  );
};

export default TextComponent;
