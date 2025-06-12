import {
  View,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  KeyboardType,
} from 'react-native';
import React, {ReactNode, useState} from 'react';
import {Eye, EyeSlash} from 'iconsax-react-native';
import {appColors} from '../constants/appColors';
import AntDesign from 'react-native-vector-icons/AntDesign';

interface Props {
  value: string;
  onChange?: (val: string) => void;
  placeholder?: string;
  affix?: ReactNode;
  suffix?: ReactNode;
  type?: 'text' | 'password' | 'email';
  allowClear?: boolean;
  keyboardType?: KeyboardType;
}

const InputComponent = (props: Props) => {
  const [hidePassword, setHidePassword] = useState(true);
  const {
    value,
    onChange,
    placeholder,
    affix,
    suffix,
    type,
    allowClear,
    keyboardType,
  } = props;
  return (
    <View style={styles.inputContainer}>
      {affix ?? affix}
      <TextInput
        style={styles.input}
        value={value}
        onChangeText={val => onChange?.(val)}
        placeholder={placeholder ?? ''}
        secureTextEntry={type === 'password' && hidePassword}
        keyboardType={keyboardType ?? 'default'}
      />
      {suffix ?? suffix}
      {type === 'password' ? (
        <TouchableOpacity onPress={() => setHidePassword(!hidePassword)}>
          {hidePassword ? (
            <EyeSlash size={22} color={appColors.iconColor} />
          ) : (
            <Eye size={22} color={appColors.iconColor} />
          )}
        </TouchableOpacity>
      ) : (
        value.length > 0 &&
        allowClear && (
          <TouchableOpacity onPress={() => onChange?.('')}>
            <AntDesign name="close" size={22} color={appColors.iconColor} />
          </TouchableOpacity>
        )
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: appColors.borderColor,
    backgroundColor: appColors.white,
    borderRadius: 12,
    width: '100%',
    minHeight: 56,
    paddingHorizontal: 15,
    marginBottom: 20,
  },

  input: {
    flex: 1,
    paddingHorizontal: 14,
    color: appColors.text,
    padding: 0,
    margin: 0,
  },
});
export default InputComponent;
