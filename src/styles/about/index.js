import { StyleSheet, Platform,Dimensions } from 'react-native';
import { colors, fonts } from '../../themes';
import { moderateScale } from '../../themes/styleConfig';

export const aboutstyle = StyleSheet.create({
    
    container: {
        flex: 1,
        backgroundColor: colors.aboutbgColors,
      },
      safeArea:{
        flex: 1
      }
    
});