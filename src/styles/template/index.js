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
    
      // heartshare: {
      //   // height: moderateScale(20),
      //   // width: moderateScale(20),
      //   //resizeMode: "contain"
      // },
    
      eyeImgView: {
        height: moderateScale(30),
        width: moderateScale(30),
        resizeMode: "contain",
        marginVertical: moderateScale(-4),
      },
      btnicon: {
        padding: moderateScale(20),
        //marginHorizontal: moderateScale(5),
      },
      tmpl:{
        flexDirection: "row", 
        //padding: moderateScale(30) 
      },

      actionButtonIcon: {
        fontSize: moderateScale(20),
        height: moderateScale(22),
        color: colors.templatesactionButtonIconcolors,
        alignSelf:'center'
      },
      tmpbtn:
      {
        right:moderateScale(20),
        bottom:moderateScale(30),
        position:'absolute',
        backgroundColor:colors.templatebtnColors,
        height:moderateScale(55),
        width:moderateScale(55),
        borderRadius:moderateScale(100)
      },
      tmplbtncon:
      {
        alignSelf:'center',
        marginVertical:moderateScale(15)
      },
      Modaltxt:{
        fontSize: 15,
        fontWeight:'bold',
        //color:'#800000',
        color:colors.ModaltxtColors,
        padding:1,
      },
      app: {
        //...StyleSheet.absoluteFillObject,
        alignItems: 'center',
        justifyContent: 'center',
        //marginBottom:10
        //backgroundColor: '#c2ffd2',
      },
      content: {
        padding: moderateScale(16),
        backgroundColor: colors.ModalcontentColors,
        borderRadius: 8,
      },
      arrow: {
        borderTopColor: colors.ModalarrowColors,
      },
      background: {
        //backgroundColor: 'rgba(0, 0, 255, 0.5)'
        backgroundColor: 'rgba(0, 0, 0, 0.7)'
      },
      ModalFirstBtn:{
        backgroundColor: colors.ModalBtnlColors,
        borderRadius: 10,
        padding: moderateScale(5),
        alignItems: 'center',
      },
      ModalSecondThirdBtn:{
        backgroundColor: colors.ModalBtnlColors,
        borderRadius: 10,
        padding: moderateScale(5),
        marginTop:moderateScale(5), 
        alignItems: 'center',
      }
     

      // actionButtonIcon: {
      
      //   fontSize: 20,
      //   height: 22,
      //   color: 'white',
      //   alignSelf:'center',
      //   marginVertical: moderateScale(20),
      // },

     
});