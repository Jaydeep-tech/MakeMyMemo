import { StyleSheet, Platform } from 'react-native';
import { colors, fonts } from '../../themes';
import { moderateScale } from '../../themes/styleConfig';

export const templatestyle = StyleSheet.create({
    
    container: {
        flex: 1,
        //backgroundColor: 'transparent',
        backgroundColor: colors.templatescontainerbgcolors,
      },
      cardsWrapper: {
        //marginTop:20,
        width: '90%',
        alignSelf: 'center',
      },
      card: {
        height: moderateScale(120),
        marginVertical: moderateScale(10),
        flexDirection: 'row',
        shadowColor: colors.templateshadowcardcolors,
        shadowOffset: { width: moderateScale(0), height: moderateScale(1) },
        shadowOpacity: moderateScale(0.8),
        shadowRadius: moderateScale(2),
        elevation: moderateScale(5)
      },
      cardImgWrapper: {
        flex: 1,
      },
      cardImg: {
        height: '100%',
        width: '100%',
        alignSelf: 'center',
        borderRadius: moderateScale(8),
        borderBottomRightRadius: moderateScale(0),
        borderTopRightRadius: moderateScale(0),
      },
      cardInfo: {
        flex: 2,
        padding: moderateScale(10),
        borderColor: colors.templatescardInfobordercolors,
        borderWidth: 1.5,
        borderLeftWidth: moderateScale(0),
        borderBottomRightRadius: moderateScale(8),
        borderTopRightRadius: moderateScale(8),
        backgroundColor: colors.templatescardInfobgcolors,
    
      },
      cardView: {
        flex: 1,
        padding: moderateScale(0),
        borderColor: colors.templatescardViewbordercolors,
        borderWidth: moderateScale(1),
        borderLeftWidth: moderateScale(1),
        borderBottomRightRadius: moderateScale(8),
        borderBottomLeftRadius: moderateScale(8),
        borderTopRightRadius: moderateScale(8),
        borderTopLeftRadius: moderateScale(8),
        backgroundColor: colors.templatescardViewbgcolors,
    
      },
      cardTitle: {
        fontWeight: 'bold',
        color: 'black'
      },
      cardDetails: {
        fontSize: moderateScale(12),
        color: colors.templatescardDetailscolors
      },
      iconView: {
        flex: 1.5,
        justifyContent: "center",
        alignItems: "center"
      },
    
      heartshare: {
        height: moderateScale(20),
        width: moderateScale(20),
        resizeMode: "contain"
      },
    
      eyeImgView: {
        height: moderateScale(30),
        width: moderateScale(30),
        resizeMode: "contain",
        marginVertical: moderateScale(-4),
      },
      btnicon: {
        padding: moderateScale(15),
        marginHorizontal: moderateScale(5),
      },
      tmpl:{
        flexDirection: "row", 
        padding: moderateScale(30) 
      },

      actionButtonIcon: {
        fontSize: moderateScale(20),
        height: moderateScale(22),
        color: colors.templatesactionButtonIconcolors,
        alignSelf:'center'
      },

      // actionButtonIcon: {
      
      //   fontSize: 20,
      //   height: 22,
      //   color: 'white',
      //   alignSelf:'center',
      //   marginVertical: moderateScale(20),
      // },

     
});