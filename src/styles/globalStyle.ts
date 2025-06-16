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
    paddingHorizontal: 32,
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

  section: {
    paddingHorizontal: 16,
    paddingBottom: 20,
  },

  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },

  gap: {
    gap: 12,
  },

  center: {
    alignItems: 'center',
    justifyContent: 'center',
  },

  textCenter: {
    textAlign: 'center',
  },

  shadow: {
    shadowColor: 'rbga(0, 0, 0, 0.5)',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.15,
    shadowRadius: 8,
    elevation: 6,
  },

  iconEntryContainer: {
    width: 32,
    height: 32,
    backgroundColor: '#3D56F0',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 50,
  },
});
