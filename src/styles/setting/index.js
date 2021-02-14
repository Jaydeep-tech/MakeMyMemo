import { StyleSheet, Platform,Dimensions } from 'react-native';
import { colors, fonts } from '../../themes';
import { moderateScale } from '../../themes/styleConfig';

export const settingstyle = StyleSheet.create({
    
    container: {
        flex: 1,
        backgroundColor: colors.settingbgColors,
      },
      safeArea:{
        flex: 1
      }
    
});