// Import React and Component
import React from 'react';
import {View, Image, TouchableOpacity} from 'react-native';

const NavigationDrawerHeader = (props) => {
  const toggleDrawer = () => {
    props.navigationProps.toggleDrawer();
  };

  return (
    <View style={{flexDirection: 'row'}}>
      <TouchableOpacity onPress={toggleDrawer}>
        <Image 
          source={require('../assets/images/general/drawerLogo/menu.png')}
          style={{width: 25, height: 25, marginLeft: 10}}
        />
      </TouchableOpacity>
    </View>
  );
};
export default NavigationDrawerHeader;
