import { StyleSheet, Platform } from 'react-native';
import { colors, fonts } from '../../themes';
import { moderateScale } from '../../themes/styleConfig';

export const navigationDrawerstyle = StyleSheet.create({
    navraw:{
      flexDirection: 'row'
    },  
    naviagationdrawerimg: 
    {
      width: moderateScale(25), 
      height: moderateScale(25), 
      marginLeft: moderateScale(10)
    },
    
});