// Import React and Component
import React from 'react';
import {View, Image, TouchableOpacity} from 'react-native';
import {images} from '../../themes'
import {navigationDrawerstyle} from '../../styles';

const NavigationDrawerHeader = (props) => {
  const toggleDrawer = () => {
    props.navigationProps.toggleDrawer();
  };

  return (
    <View style={navigationDrawerstyle.navraw}>
      <TouchableOpacity onPress={toggleDrawer}>
        <Image 
          source={images.drawermenu}
          style={navigationDrawerstyle.naviagationdrawerimg}
        />
      </TouchableOpacity>
    </View>
  );
};
export default NavigationDrawerHeader;
