import { StyleSheet, Platform,Dimensions } from 'react-native';
import { colors, fonts } from '../../themes';
import { moderateScale } from '../../themes/styleConfig';

const { height } = Dimensions.get("screen");
const height_logo = height * 0.28;
export const splashstyle = StyleSheet.create({
    
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        //backgroundColor: '#307ecc',
    },
    activityIndicator: {
        alignItems: 'center',
        height: moderateScale(250),
    },
    header: {
        flex: 2,
        justifyContent: 'center',
        alignItems: 'center'
    },
    logo: {
        width: height_logo,
        height: height_logo,
        borderRadius: moderateScale(150),
    },
    title:{
        color:colors.splashscreentitlecolors,
        fontSize:moderateScale(30),
        fontWeight:'bold',
        fontStyle:'italic'
    }
    
});