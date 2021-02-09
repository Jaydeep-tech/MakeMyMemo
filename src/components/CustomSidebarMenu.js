// Import React and Component
import React from 'react';
import {View, Text, Alert, StyleSheet,Image,TouchableOpacity,Dimensions} from 'react-native';
import {
  DrawerContentScrollView,
  DrawerItemList
} from '@react-navigation/drawer';

const CustomSidebarMenu = (props) => {
  return (
    <View style={stylesSidebar.sideMenuContainer}>
      <View style={stylesSidebar.profileHeader}>
        <View style={stylesSidebar.profileHeaderPicCircle}>
        <Image
               source={require('../assets/images/general/logo_app/Logo.jpg')} style={stylesSidebar.logo} />
        </View>
        <Text style={stylesSidebar.profileHeaderText}>Make My Memories</Text>
      </View>
      <View style={stylesSidebar.profileHeaderLine} />

      <DrawerContentScrollView {...props}>
        <DrawerItemList {...props} />
      </DrawerContentScrollView>
    </View>
  );
};

export default CustomSidebarMenu;

const {height} = Dimensions.get("screen");
const height_logo = height * 0.12;

const stylesSidebar = StyleSheet.create({
  sideMenuContainer: {
    width: '100%',
    height: '100%',
    //backgroundColor: '#307ecc',
    backgroundColor: '#ffffff',
    //paddingTop: 40,
    color: 'white',
  },
  profileHeader: {
    flexDirection: 'row',
    backgroundColor: '#ba68c8',
    padding: 15,
    textAlign: 'center',
  },
  profileHeaderPicCircle: {
    width: 80,
    height: 80,
    borderRadius: 100,
    color: 'white',
    backgroundColor: '#ffffff',
    textAlign: 'center',
    justifyContent: 'center',
    alignItems: 'center',
  },
  profileHeaderText: {
    color: 'white',
    alignSelf: 'center',
    paddingHorizontal: 20,
    fontSize:17,
    fontWeight: 'bold',
  },
  profileHeaderLine: {
    height: 1,
    marginHorizontal: 20,
    backgroundColor: '#e2e2e2',
    marginTop: 15,
  },
  logo: {
    width: height_logo,
    height: height_logo,
    borderRadius: 150,
},
});
