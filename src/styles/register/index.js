import { StyleSheet, Platform,Dimensions } from 'react-native';
import { colors, fonts } from '../../themes';
import { moderateScale } from '../../themes/styleConfig';

export const registerstyle = StyleSheet.create({
  container: {
    flex: 1,
  },
  safeArea: {
    flex: 1
  },
  innercard: {
    height: moderateScale(500),    
    marginVertical: moderateScale(60),
    marginLeft:moderateScale(35),
    flexDirection: 'row',
    shadowColor: colors.customerDetailsCardShadowColors,
    shadowOffset: { width: moderateScale(0), height: moderateScale(1) },
    shadowOpacity: moderateScale(0.8),
  },
  ineercardInfo: {
    flex: 1,
    borderColor: colors.logininnercardborderColors,
    borderBottomLeftRadius: moderateScale(40),
    borderTopLeftRadius: moderateScale(40),
    backgroundColor: colors.RegisterineercardInfoColor,
  },
  buttonStyle: {
    backgroundColor: colors.RegisterbuttonStylebgColor,
    borderWidth: moderateScale(1.5),
    borderColor: colors.RegisterbuttonStyleborderColors,
    height: moderateScale(50),
    width: moderateScale(120),
    alignSelf: 'center',
    borderRadius: moderateScale(5),
    marginBottom: moderateScale(10),
    marginLeft:moderateScale(20),
    marginTop:20,
  },
 
  buttonText: {
    color: colors.RegisterbuttonTextColors,
    marginVertical: moderateScale(15),
    alignSelf: 'center',
    fontWeight: 'bold'
  },
  ButtonRow:{
    flexDirection: 'row',
  },
  FirstRow:{
    flexDirection: 'row',

    marginLeft:moderateScale(20),
   // padding: moderateScale(20),
    //marginTop:moderateScale(30),
  },
  Firsttxt:{
    borderWidth:moderateScale(0.5),
    borderColor:colors.RegisterAllTextborderColors,
    borderRadius:moderateScale(5),
    width:moderateScale(140),
  },
  Secondttxt:{
    borderWidth:moderateScale(0.5),
    borderColor:colors.RegisterAllTextborderColors,
    borderRadius:moderateScale(5),
    width:moderateScale(140),
    marginLeft:moderateScale(10),
  },
  SecondRow:{
    flexDirection: 'row',
    paddingLeft: moderateScale(20),
    //marginTop:moderateScale(20),
  },
  ThirdRow:{
    flexDirection: 'row',
    //padding: moderateScale(20),
    marginLeft:moderateScale(20),
  },
  Thirdttxt:{
    borderWidth:moderateScale(0.5),
    borderColor:colors.RegisterAllTextborderColors,
    borderRadius:moderateScale(5),
    width:moderateScale(290),
  },
  RegisterMainTitle:{
    fontWeight:'bold',
    fontSize:moderateScale(25),
    marginLeft:moderateScale(18),
    marginTop:moderateScale(45),
  },
  RegisterSubTitle:{
    fontSize:moderateScale(10),
    marginLeft:moderateScale(20),
    marginTop:moderateScale(10),
    color:colors.RegisterSubTitleColors,
    fontWeight:'bold',
  },
  FirstLabelRow:{
    flexDirection: 'row',
    padding: moderateScale(5),
    marginTop:moderateScale(20),
    marginLeft:moderateScale(15),
    color:colors.RegisterAllLabelColors,
  },
  SecondLabelRow:{
    flexDirection: 'row',
    padding: moderateScale(5),
    marginTop:moderateScale(10),
    marginLeft:moderateScale(15),
    color:colors.RegisterAllLabelColors,
  },
  ThirdLabelRow:{
    flexDirection: 'row',
    padding: moderateScale(5),
    marginTop:moderateScale(10),
    marginLeft:moderateScale(15),
    color:colors.RegisterAllLabelColors,
  },
  lblFullName:{
    color:colors.RegisterAllLabelColors,
  },
  lblOrgName:{
    color:colors.RegisterAllLabelColors,
    marginLeft:moderateScale(83)
  },
  lblEmail:{
    color:colors.RegisterAllLabelColors,
  },
  lblMobileNo:{
    color:colors.RegisterAllLabelColors,
    marginLeft:moderateScale(58)
  },
  lblPassword:{
    color:colors.RegisterAllLabelColors,
  },
 
  
    
});