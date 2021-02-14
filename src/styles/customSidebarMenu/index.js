import { StyleSheet, Platform,Dimensions } from 'react-native';
import { colors, fonts } from '../../themes';
import { moderateScale } from '../../themes/styleConfig';

const {height} = Dimensions.get("screen");
const height_logo = height * 0.12;

export const customSidebarMenustyle = StyleSheet.create({
    
  sideMenuContainer: {
    width: '100%',
    height: '100%',
    //backgroundColor: '#307ecc',
    backgroundColor: colors.customesideMenuContainerbgcolors,
    //paddingTop: 40,
    color: colors.customesideMenuContainercolors,
  },
  profileHeader: {
    flexDirection: 'row',
    backgroundColor: colors.customesideMenuprofileHeaderbgcolors,
    padding: moderateScale(15),
    textAlign: 'center',
  },
  profileHeaderPicCircle: {
    width: moderateScale(80),
    height: moderateScale(80),
    borderRadius: moderateScale(100),
    color: colors.csmprofileHeaderPicCirclecolors,
    backgroundColor: colors.csmprofileHeaderPicCirclecolors,
    textAlign: 'center',
    justifyContent: 'center',
    alignItems: 'center',
  },
  profileHeaderText: {
    color: colors.csmprofileHeaderTextcolors,
    alignSelf: 'center',
    paddingHorizontal: moderateScale(20),
    fontSize: moderateScale(17),
    fontWeight: 'bold',
  },
  profileHeaderLine: {
    height: moderateScale(1),
    marginHorizontal: moderateScale(20),
    backgroundColor: colors.csmprofileHeaderLinecolors,
    marginTop: moderateScale(15),
  },
  logo: {
    width: height_logo,
    height: height_logo,
    borderRadius: moderateScale(150),
},
    
});