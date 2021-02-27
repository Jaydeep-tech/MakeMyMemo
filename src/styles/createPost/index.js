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
        height: moderateScale(720),
        marginVertical: moderateScale(10), ///Margin between image and card
        flexDirection: 'row',
        shadowColor: colors.customerDetailsCardShadowColors,
        shadowOffset: { width: moderateScale(0), height: moderateScale(1) },
        shadowOpacity: moderateScale(0.8),
        shadowRadius: moderateScale(5),
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
        borderColor: colors.createpostBorderColors1,
        borderWidth: moderateScale(2),
        borderRadius:moderateScale(15),
        backgroundColor: colors.customerDetailsbgColors,
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
        borderRadius:15,
        marginTop:moderateScale(1) 
      },
       
      
      innercard: {
        height: moderateScale(450),
        marginVertical: moderateScale(35), ///Margin between image and card
        flexDirection: 'row',
        shadowColor: colors.customerDetailsCardShadowColors,
        shadowOffset: { width: moderateScale(0), height: moderateScale(1) },
        shadowOpacity: moderateScale(0.8),
        shadowRadius: moderateScale(2),
        elevation: moderateScale(5)
      },
      ineercardInfo: {
        flex: 1,
        padding: moderateScale(10),
        borderColor: colors.createpostBorderColors2,
        borderWidth: moderateScale(1.5),
        borderRadius:moderateScale(15),
        // borderBottomRightRadius: moderateScale(15),
        // borderBottomLeftRadius:moderateScale(15),
        // borderTopRightRadius: moderateScale(15),
        // borderTopLeftRadius:moderateScale(15),
        // borderTopRightRadius:moderateScale(15),
        backgroundColor: colors.customerDetailsbgColors,
    
      },
      writerMemory: {
        height: moderateScale(40),
        width: moderateScale(200),
        backgroundColor:colors.writerMemorycolors,
        marginTop:moderateScale(-28),
        borderRadius: moderateScale(15),
        alignSelf:'center'
      }, 
      writerMemoryText: 
      {
        color:colors.writerMemoryTextcolors,
        // marginHorizontal:moderateScale(5),
        marginVertical:moderateScale(7),
        fontWeight:'bold',
        alignSelf:'center',
        fontSize:18,
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
      flexDirection: 'column',
      marginVertical:moderateScale(17),
    },
    SecondChkRow:{
      flexDirection: 'column',
      
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
      marginVertical:moderateScale(10)
    },
    StoryTitle2:{
      color:colors.storyTitlecolors,
      marginVertical:moderateScale(20)
    },
    StoryTitle3:{
      color:colors.storyTitlecolors,
      marginVertical:moderateScale(20)
    },
    firsttxt:{
      marginVertical:moderateScale(-8)
    },
    btnfileupload:{
      borderWidth: moderateScale(0.5), 
      color: colors.CreatePostbtnFileUploadColors, 
      height: moderateScale(25)
    }
});