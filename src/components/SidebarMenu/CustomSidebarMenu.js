// Import React and Component
import React from 'react';
import { View, Text, Alert, Image } from 'react-native';
import {
  DrawerContentScrollView,
  DrawerItemList
} from '@react-navigation/drawer';
import {customSidebarMenustyle} from '../../styles';
import { images,strings } from '../../themes';

const CustomSidebarMenu = (props) => {
  return (
    <View style={customSidebarMenustyle.sideMenuContainer}>
      <View style={customSidebarMenustyle.profileHeader}>
        <View style={customSidebarMenustyle.profileHeaderPicCircle}>
          <Image
            source={images.logo} style={customSidebarMenustyle.logo} />
        </View>
        <Text style={customSidebarMenustyle.profileHeaderText}>{strings.SidebarMenuTitle}</Text>
      </View>
      <View style={customSidebarMenustyle.profileHeaderLine} />
      <DrawerContentScrollView {...props}>
        <DrawerItemList {...props} />
      </DrawerContentScrollView>
    </View>
  );
};

export default CustomSidebarMenu;

