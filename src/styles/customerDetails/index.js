import { StyleSheet, Platform,Dimensions } from 'react-native';
import { colors, fonts } from '../../themes';
import { moderateScale } from '../../themes/styleConfig';

const {height} = Dimensions.get("screen");
const height_logo = height * 0.12;
export const customerDetailstyle = StyleSheet.create({
    
    container: {
        flex: 1,
        backgroundColor: colors.customerDetailsContainer,
      },
      safeArea:{
        flex: 1
      },
      haderLefticon:{
        margin: moderateScale(20), marginTop: moderateScale(25)
      },
      haderrow:{
        flexDirection: 'row'
      },
      headerLeftimg:{
        margin:moderateScale(10),
        marginTop:moderateScale(18),
        height: moderateScale(25),
        width: moderateScale(25),
      },
       headerRightimg:{
        margin:moderateScale(10),
        marginTop:moderateScale(16),
        height: moderateScale(25),
        width: moderateScale(25),
      },
      cardsWrapper: {
        //marginTop:20,
        width: '94%',
        alignSelf: 'center',
      },
      card: {
        height: moderateScale(120),
        marginVertical: moderateScale(2), ///Margin between image and card
        flexDirection: 'row',
        shadowColor: colors.customerDetailsCardShadowColors,
        shadowOffset: { width: moderateScale(0), height: moderateScale(1) },
        shadowOpacity: moderateScale(0.8),
        shadowRadius: moderateScale(2),
        elevation: moderateScale(5)
      },
      card2: {
        height: moderateScale(50),
        marginVertical: moderateScale(5),
        flexDirection: 'row',
        shadowColor: colors.customerDetailsCardShadowColors,
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
        borderBottomRightRadius: 0,
        borderTopRightRadius: 0,
      },
      cardInfo: {
        flex: 2,
        padding: moderateScale(10),
        borderColor: colors.customerDetailsBorderColors,
        borderWidth: moderateScale(1),
        borderLeftWidth: moderateScale(1),
        //borderBottomRightRadius: 8,
        //borderTopRightRadius: 8,
        backgroundColor: colors.customerDetailsbgColors,
    
      },
      cardInfo2: {
        flex: 2,
        padding: moderateScale(25),
        borderColor: colors.customerDetailsBorderColors,
        borderWidth: moderateScale(1),
        borderLeftWidth: moderateScale(1),
        //borderBottomRightRadius: 8,
        //borderTopRightRadius: 8,
        backgroundColor: colors.customerDetailsbgColors,
        marginTop:moderateScale(-6) 
      },
      cardInfo3: {
        flex: 2,
        padding: moderateScale(25),
        borderColor: colors.customerDetailsBorderColors,
        borderWidth: moderateScale(1),
        borderLeftWidth: moderateScale(1),
        //borderBottomRightRadius: 8,
        //borderTopRightRadius: 8,
        backgroundColor: colors.customerDetailsbgColors,
        marginTop:moderateScale(-6) 
      },
      cardView: {
        flex: 1,
        padding: moderateScale(0),
        borderColor: colors.customerDetailsBorderColors,
        borderWidth: moderateScale(1),
        borderLeftWidth: moderateScale(1),
        // borderBottomRightRadius: moderateScale(8),
        // borderBottomLeftRadius: moderateScale(8),
        // borderTopRightRadius: moderateScale(8),
        // borderTopLeftRadius: moderateScale(8),
        //backgroundColor: '#ba68c8',
    
      },
      cardTitle: {
        fontWeight: 'bold',
        color: colors.customerDetailsCardTitleColors,
        alignSelf: 'center',
        fontSize: moderateScale(20),
      },
      cardTitle2: {
        fontWeight: 'bold',
        color: colors.customerDetailsCardTitle2Colors,
        alignSelf: 'center',
        fontSize: moderateScale(20),
        marginVertical:moderateScale(-15)
      },
      cardTitle3: {
        fontWeight: 'bold',
        color: colors.customerDetailsCardTitle3Colors,
        alignSelf: 'center',
        fontSize: moderateScale(15),
        //marginVertical:moderateScale(0)
      },
      cardDetails: {
        fontSize: moderateScale(12),
        color: colors.customerDetailsCardDetailsColors,
        alignSelf: 'center',
      },
      cardDetails2: {
        fontSize: moderateScale(12),
        color: colors.customerDetailsCardDetailsColors,
        alignSelf: 'center',
        marginTop:moderateScale(10) 
      },
      cardDetails3: {
        fontSize: moderateScale(12),
        color: colors.customerDetailsCardDetailsColors,
        alignSelf: 'center',
        marginTop:moderateScale(-15) 
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

      sliderImage: {
        height: moderateScale(140),
        width: moderateScale(335),
        alignSelf: 'center',
        marginTop:moderateScale(3) 
      },
      logo: {
        width: height_logo,
        height: height_logo,
        borderRadius: moderateScale(150),
        alignSelf: 'center',
        marginTop:moderateScale(-55) 
      },    
      
});