import { StyleSheet, Platform,Dimensions } from 'react-native';
import { colors, fonts } from '../../themes';
import { moderateScale } from '../../themes/styleConfig';

export const homestyle = StyleSheet.create({
    
    container: {
        flex: 1,
        backgroundColor: 'white',
      },
      sliderContainer: {
        height: moderateScale(215),
        width: '95%',
        marginTop: moderateScale(10),
        justifyContent: 'center',
        alignSelf: 'center',
        borderRadius: moderateScale(10),
      },
      wrapper: {},
      slide: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: 'transparent',
        borderRadius: moderateScale(10),
      },
      sliderImage: {
        height: '100%',
        width: '100%',
        alignSelf: 'center',
        borderRadius: moderateScale(10),
      }
    
});