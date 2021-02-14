import { StyleSheet, Platform,Dimensions } from 'react-native';
import { colors, fonts } from '../../themes';
import { moderateScale } from '../../themes/styleConfig';

export const profilestyle = StyleSheet.create({
    
    container: {
        flex: 1,
        backgroundColor: colors.profilebgColors,
      },
      safeArea:{
        flex: 1
      }
    
});