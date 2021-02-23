// Import React and Component
import React, { useState } from 'react';
import { View, Text, SafeAreaView, TouchableOpacity, Image, ScrollView, TextInput, } from 'react-native';
import { loginstyle } from '../../styles';
import { images, colors, strings } from '../../themes'
import LinearGradient from 'react-native-linear-gradient';
const Login = ({navigation}) => {
  return (
    <SafeAreaView style={loginstyle.safeArea}>
      <View style={loginstyle.container}>
      <LinearGradient
           // colors={["#52AAFF", "#5FFFFF"]}52AAFF
            colors={["#52AAFF", "#21D5DC"]}
            //colors={["#21D5DC", "#00CCFF"]}
            style={loginstyle.container}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 1 }} >

          <View style={loginstyle.innercard}>
                <View style={loginstyle.ineercardInfo}>
                  <View style={loginstyle.MainRow}>
                  <TouchableOpacity style={loginstyle.buttonStyle2} onPress={() => navigation.navigate('Register')}>
                      <Text style={loginstyle.buttonText}>{strings.loginbtnRegisertextTitle}</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={loginstyle.buttonStyle}>
                      <Text style={loginstyle.buttonText}>{strings.loginbtntextTitle}</Text>
                    </TouchableOpacity>
                  </View>
                  <View>
                     <Image style={loginstyle.ScreenImage} source={images.SchoolTech} resizeMode="cover" />
                  </View>
                </View>
              </View>
            </LinearGradient>
        </View>

    </SafeAreaView>
  );
};

export default Login;
