import { StyleSheet, Platform } from 'react-native';
import { colors, fonts } from '../../themes';
import { moderateScale } from '../../themes/styleConfig';

export const templatestyle = StyleSheet.create({
    
    container: {
        flex: 1
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
        shadowColor: '#999',
        shadowOffset: { width: moderateScale(0), height: moderateScale(1) },
        shadowOpacity: 0.8,
        shadowRadius: 2,
        elevation: 5
      },
      cardImgWrapper: {
        flex: 1,
      },
      cardImg: {
        height: '100%',
        width: '100%',
        alignSelf: 'center',
        borderRadius: moderateScale(8),
        borderBottomRightRadius: 0,
        borderTopRightRadius: 0,
      },
      cardInfo: {
        flex: 2,
        padding: 10,
        borderColor: '#ccc',
        borderWidth: 1,
        borderLeftWidth: 0,
        borderBottomRightRadius: 8,
        borderTopRightRadius: 8,
        backgroundColor: '#fff',
    
      },
      cardView: {
        flex: 1,
        padding: moderateScale(0),
        borderColor: '#ccc',
        borderWidth: moderateScale(1),
        borderLeftWidth: moderateScale(1),
        borderBottomRightRadius: moderateScale(8),
        borderBottomLeftRadius: moderateScale(8),
        borderTopRightRadius: moderateScale(8),
        borderTopLeftRadius: moderateScale(8),
        backgroundColor: '#ba68c8',
    
      },
      cardTitle: {
        fontWeight: 'bold',
        color: 'black'
      },
      cardDetails: {
        fontSize: moderateScale(12),
        color: '#444'
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
      }
    
});