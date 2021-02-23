import { StyleSheet, Platform, Dimensions } from 'react-native';
import { colors, fonts } from '../../themes';
import { moderateScale } from '../../themes/styleConfig';

export const loginstyle = StyleSheet.create({
  container: {
    flex: 1,
    //backgroundColor:'#52AAFF'
   backgroundColor:colors.logincontainerbgColors
  },
  safeArea: {
    flex: 1
  },
  innercard: {
    height: moderateScale(500),    
    marginVertical: moderateScale(60),
    marginRight:moderateScale(40),
    flexDirection: 'row',
    shadowColor: colors.customerDetailsCardShadowColors,
    shadowOffset: { width: moderateScale(0), height: moderateScale(1) },
    shadowOpacity: moderateScale(0.8),
    //elevation: moderateScale(0),
  },
  ineercardInfo: {
    flex: 1,
   // padding: moderateScale(20),
    borderColor: colors.logininnercardborderColors,
    //borderWidth: moderateScale(0),
     borderBottomRightRadius: moderateScale(40),
   //  borderBottomLeftRadius:moderateScale(15),
     borderTopRightRadius: moderateScale(40),
    // borderTopLeftRadius:moderateScale(15),
    // borderTopRightRadius:moderateScale(15),
    backgroundColor: colors.logininnercardbgColors,
  },
  buttonStyle: {
    backgroundColor: colors.loginbuttonStylebgColors,
    borderWidth: moderateScale(1.5),
    color: colors.loginbuttonStyleColors,
    borderColor: colors.loginbuttonStyleborderColors,
    height: moderateScale(50),
    width: moderateScale(120),
    alignSelf: 'center',
    borderRadius: moderateScale(5),
    marginTop: moderateScale(40),
    marginBottom: moderateScale(10),
    marginLeft:moderateScale(10),
  },
  buttonStyle2: {
    backgroundColor: colors.loginbutton2StylebgColors,
    borderWidth: moderateScale(1.5),
    color: colors.loginbutton2StyleColors,
    borderColor: colors.loginbutton2StyleborderColors,
    height: moderateScale(50),
    width: moderateScale(140),
    alignSelf: 'center',
    borderRadius: moderateScale(5),
    marginTop: moderateScale(40),
    marginBottom: moderateScale(10),
    
  },
  buttonText: {
    color: colors.loginbuttonTextColors,
    marginVertical: moderateScale(15),
    alignSelf: 'center',
    fontWeight: 'bold'
  },
  MainRow:{
    flexDirection: 'row',
    padding: moderateScale(20),
  },
  ScreenImage: {
     height: moderateScale(250),
     width: moderateScale(310),
     //alignSelf: 'center',
    marginTop:moderateScale(75) ,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'stretch',
    resizeMode: 'stretch',
  },

});