import { StyleSheet, Platform,Dimensions } from 'react-native';
import { colors, fonts } from '../../themes';
import { moderateScale } from '../../themes/styleConfig';

export const ediprofilestyle = StyleSheet.create({
    
    container: {
        flex: 1,
        backgroundColor: colors.profilebgColors,
      },
      safeArea:{
        flex: 1
      },
      header:{
        height:moderateScale(150),
      },
      avatar: {
        width: moderateScale(130),
        height: moderateScale(130),
        borderRadius: moderateScale(63),
        borderWidth: moderateScale(1),
        borderColor: colors.editProfileavatarColors,
        marginBottom:moderateScale(10),
        alignSelf:'center',
        position: 'absolute',
        marginTop:moderateScale(20)
      },
      cameraavatar: {
        width: moderateScale(40),
        height: moderateScale(40),
        borderRadius: moderateScale(63),
        borderWidth: moderateScale(1),
        borderColor: colors.editProfilecameraavatarColors,
        marginBottom:moderateScale(10),
        position: 'absolute',
        marginTop:moderateScale(100),
        marginHorizontal:210,
      },
      body:{
        marginTop:moderateScale(-10),
      },
      bodyContent: {
        flex: 1,
        alignItems: 'center',
        padding:moderateScale(20),
      },
      bodyDetails: {
        flex: 1,
        padding:moderateScale(40),
      },
      name:{
        fontSize:moderateScale(20),
        color: colors.editProfileNameColors,
        fontWeight: "bold"
      },
      profileHeaderLine: {
        height: moderateScale(1),
        marginHorizontal: moderateScale(20),
        backgroundColor: colors.csmprofileHeaderLinecolors,
        marginTop:moderateScale(-5)
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
      editProfileheader:{
        marginRight:moderateScale(50)
      },
     
      editProfilesurName:{
        color: colors.editProfileAllTitlecolors,
      },
      editProfilesurNametxt:{
        marginVertical:moderateScale(-5),
        color:colors.editProfileAlltxtcolors
      },

      editProfileContactTitle:{
        color: colors.editProfileAllTitlecolors,
        paddingTop:25
      },
      editProfileContacttxt:{
        marginVertical:moderateScale(-5),
        color:colors.editProfileAlltxtcolors
      },
      editProfileEmailTitle:{
        color: colors.editProfileAllTitlecolors,
       paddingTop:moderateScale(30)
      },
      editProfileEmailtxt:{
        marginVertical:moderateScale(-5),
        color:colors.editProfileAlltxtcolors
      },
      buttonStyle: {
        backgroundColor: colors.editProfilebuttonbgcolors,
        color: colors.editProfilebuttonStylecolors,
        borderColor: colors.editProfilebuttonStylebordercolors,
        height: moderateScale(50),
        width: moderateScale(270),
        alignSelf: 'center',
        borderRadius: moderateScale(30),
        marginVertical:moderateScale(25),
        marginBottom: moderateScale(10),
      },
      buttonText:{
        color: colors.editProfilebuttonTextcolors,
        marginVertical:moderateScale(15),
        marginHorizontal:moderateScale(35),
        fontWeight:'bold',
        alignSelf: 'center',
      },
});