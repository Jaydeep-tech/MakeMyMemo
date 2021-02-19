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
      },
      header:{
       // backgroundColor: "#28B0E4",
        height:moderateScale(150),
      },
      avatar: {
        width: moderateScale(130),
        height: moderateScale(130),
        borderRadius: moderateScale(63),
        borderWidth: moderateScale(1),
        borderColor: colors.ProfileavatarborderColors,
        marginBottom:moderateScale(10),
        alignSelf:'center',
        position: 'absolute',
        marginTop:moderateScale(80)
      },
      body:{
        marginTop:moderateScale(40),
      },
      bodyContent: {
        flex: 1,
        alignItems: 'center',
        padding:moderateScale(30),
      },
      bodyDetails: {
        flex: 1,
        padding:moderateScale(80),
      },
      name:{
        fontSize:20,
        color: colors.ProfileNameColors,
        fontWeight: "bold"
      },
      // info:{
      //   fontSize:moderateScale(16),
      //   color: "#00BFFF",
      //   marginTop:moderateScale(10)
      // },
      // description:{
      //   fontSize:16,
      //   color: "#696969",
      //   marginTop:moderateScale(10),
      //   textAlign: 'center'
      // },
     
      // surNameTitle:{
      //   color:'grey',
        
      // },
      SurNamevalueTitle:{
        fontSize:moderateScale(15),
        fontWeight:'bold',
        marginVertical:moderateScale(10)
      },
      surnameicon:{
        marginHorizontal:moderateScale(-30),
        marginVertical:moderateScale(-30),
      },
      // contactTitle:{
      //   color:'grey',
      //   marginVertical:moderateScale(-65)
      // },
      contactvalueTitle:{
        fontSize:moderateScale(15),
        fontWeight:'bold',
        marginVertical:-50
      },
      contacticon:{
        marginHorizontal:moderateScale(-30),
        marginVertical:moderateScale(30)
      },

      // emailTitle:{
      //   color:'grey',
      //   marginVertical:moderateScale(-15)
      // },
      emailvalueTitle:{
        fontSize:moderateScale(15),
        color: colors.ProfileEmailvalueTitleColors,
        fontWeight:'bold',
        marginVertical:moderateScale(-110)
      },
      emailicon:{
        marginHorizontal:moderateScale(-30),
        marginVertical:moderateScale(90)
      },
      profileHeaderLine: {
        height: moderateScale(1),
        marginHorizontal: moderateScale(20),
        backgroundColor: colors.csmprofileHeaderLinecolors,
        marginTop:moderateScale(10)
      },
      haderrow:{
        flexDirection: 'row'
      },
      headerRightimg:{
        margin:moderateScale(10),
        marginTop:moderateScale(9),
        height: moderateScale(20),
        width: moderateScale(20),
      },
});