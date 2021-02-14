import { StyleSheet, Platform,Dimensions } from 'react-native';
import { colors, fonts } from '../../themes';
import { moderateScale } from '../../themes/styleConfig';

export const contactstyle = StyleSheet.create({
    
    container: {
        flex: 1,
        backgroundColor: colors.contactbgColors,
      },
      safeArea:{
        flex: 1
      }
    
});