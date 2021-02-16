import { StyleSheet, Platform,Dimensions } from 'react-native';
import { colors, fonts } from '../../themes';
import { moderateScale } from '../../themes/styleConfig';

const {height} = Dimensions.get("screen");
const height_logo = height * 0.12;
export const createPoststyle = StyleSheet.create({
    
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
        height: moderateScale(540),
        marginVertical: moderateScale(2), ///Margin between image and card
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
        borderBottomRightRadius: moderateScale(0),
        borderTopRightRadius: moderateScale(0),
      },
      cardInfo: {
        flex: 2,
        padding: moderateScale(10),
        borderColor: colors.customerDetailsBorderColors,
        borderWidth: moderateScale(2),
        borderLeftWidth: moderateScale(1),
        borderBottomRightRadius: moderateScale(8),
        borderBottomLeftRadius:moderateScale(8),
        borderTopRightRadius: moderateScale(8),
        borderTopLeftRadius:moderateScale(8),
        borderTopRightRadius:moderateScale(8),
        backgroundColor: colors.customerDetailsbgColors,
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
      cardDetails: {
        fontSize: moderateScale(12),
        color: colors.customerDetailsCardDetailsColors,
        alignSelf: 'center',
      },
      iconView: {
        flex: 1.5,
        justifyContent: "center",
        alignItems: "center"
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
        width: moderateScale(310),
        alignSelf: 'center',
        borderRadius:5,
        marginTop:moderateScale(1) 
      },
       
      
      innercard: {
        height: moderateScale(300),
        marginVertical: moderateScale(25), ///Margin between image and card
        flexDirection: 'row',
        shadowColor: colors.customerDetailsCardShadowColors,
        shadowOffset: { width: moderateScale(0), height: moderateScale(1) },
        shadowOpacity: moderateScale(0.8),
        shadowRadius: moderateScale(2),
        elevation: moderateScale(5)
      },
      ineercardInfo: {
        flex: 2,
        padding: moderateScale(10),
        borderColor: colors.customerDetailsBorderColors,
        borderWidth: moderateScale(1),
        borderLeftWidth: moderateScale(1),
        // borderBottomRightRadius: 8,
        // borderBottomLeftRadius:8,
        // borderTopRightRadius: 8,
        // borderTopLeftRadius:8,
        // borderTopRightRadius:8,
        backgroundColor: colors.customerDetailsbgColors,
    
      },
      writerMemory: {
        height: moderateScale(40),
        width: moderateScale(130),
        backgroundColor:colors.writerMemorycolors,
        marginTop:moderateScale(-28),
      }, 
      writerMemoryText: 
      {
        color:colors.writerMemoryTextcolors,
        marginHorizontal:moderateScale(5),
        marginVertical:moderateScale(10),
        fontWeight:'bold'
      },
      multiinput: {
        marginVertical:moderateScale(2),
        lineHeight: moderateScale(55),
        borderWidth: moderateScale(1),
        height:moderateScale(100),
       textAlignVertical: 'top',
       borderColor:colors.multiinputbordercolors
    },
    buttonStyle: {
      //backgroundColor: '#7DE24E',
      backgroundColor: colors.buttonStylebgcolors,
      //borderWidth: moderateScale(0),
      color: colors.buttonStylecolors,
      borderColor: colors.buttonStylebordercolors,
      height: moderateScale(50),
      width: moderateScale(170),
      alignSelf: 'center',
      borderRadius: moderateScale(10),
      marginTop: moderateScale(-20),
      marginBottom: moderateScale(10),
    },
    buttonText:{
      color: colors.buttonTextcolors,
      marginVertical:moderateScale(15),
      marginHorizontal:moderateScale(35),
      fontWeight:'bold'
    },
    MainChkRow:{
      flexDirection: 'column'
    },
    ChkTextRow:{
      marginVertical:moderateScale(-26),
      marginHorizontal:moderateScale(30),
      color:colors.storyTitlecolors,
    },

    InnserChkRow:{
      flexDirection: 'row'
    },
    storyTitle1:{
      color:colors.storyTitlecolors,
      marginVertical:moderateScale(3)
    },
    StoryTitle2:{
      color:colors.storyTitlecolors,
      marginVertical:moderateScale(8)
    },
    firsttxt:{
      marginVertical:moderateScale(-8)
    }
});