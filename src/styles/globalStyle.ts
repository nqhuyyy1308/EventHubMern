import {StyleSheet} from 'react-native';
import {appColors} from '../constants/appColors';
import {fontFamilies} from '../constants/fontFamilies';

export const globalStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: appColors.white,
  },

  containerCenter: {
    flex: 1,
    backgroundColor: appColors.white,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 40,
  },

  text: {
    fontFamily: fontFamilies.regular,
    fontSize: 14,
    color: appColors.text,
  },

  subText: {
    fontFamily: fontFamilies.regular,
    fontSize: 12,
    color: appColors.subText,
  },

  button: {
    borderRadius: 12,
    minHeight: 52,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: appColors.white,
    padding: 16,
    flexDirection: 'row',
  },
});
