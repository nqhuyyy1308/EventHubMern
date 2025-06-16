import {View, StyleProp, ViewStyle, TouchableOpacity} from 'react-native';
import React, {ReactNode} from 'react';
import {globalStyles} from '../styles/globalStyle';

interface Props {
  justifyContent?:
    | 'center'
    | 'flex-start'
    | 'flex-end'
    | 'space-between'
    | 'space-around'
    | 'space-evenly'
    | undefined;
  children: ReactNode;
  styles?: StyleProp<ViewStyle>;
  gap?: number;
  onPress?: () => void;
}
const RowComponent = (props: Props) => {
  const {children, styles, justifyContent, onPress, gap} = props;
  const localStyles = [
    [
      globalStyles.row,
      {justifyContent: justifyContent, gap: gap ?? 16},
      styles,
    ],
  ];
  return onPress ? (
    <TouchableOpacity activeOpacity={1} onPress={onPress} style={localStyles}>
      {children}
    </TouchableOpacity>
  ) : (
    <View style={localStyles}>{children}</View>
  );
};

export default RowComponent;
