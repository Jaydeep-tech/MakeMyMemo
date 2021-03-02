// Import React and Component
import React, { useState, useEffect } from 'react';
import { ActivityIndicator, View, StyleSheet, Image, Text } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { images, strings, colors } from '../../themes';
import { splashstyle } from '../../styles'

const SplashScreen = ({ navigation }) => {
  //State for ActivityIndicator animation
  const [animating, setAnimating] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setAnimating(false);
      navigation.replace('MainScreen')
     // navigation.replace('DrawerNavigationRoutes')
    }, 5000);
  }, []);

  return (
    <LinearGradient
      colors={[colors.linearGradientColor1, colors.linearGradientColor2]}
      style={splashstyle.container}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}>

      <View style={splashstyle.container}>
        <View style={splashstyle.header}>
          <Image
            source={images.logo} style={splashstyle.logo} />
        </View>
        <View>
          <Text style={splashstyle.title} >{strings.SplashScreenTitle1}</Text>
        </View>
        <View>
          <Text style={splashstyle.title} >{strings.SplashScreenTitle2}</Text>
        </View>
        <ActivityIndicator
          animating={animating}
          color={colors.activityIndicatorColor}
          size="large"
          style={splashstyle.activityIndicator}
        />
      </View>
    </LinearGradient>
  );
};

export default SplashScreen;
