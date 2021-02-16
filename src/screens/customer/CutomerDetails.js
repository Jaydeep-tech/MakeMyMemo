// Import React and Component
import React from 'react';
import { View, Text, SafeAreaView, TouchableOpacity, Image } from 'react-native';
import { customerDetailstyle } from '../../styles';

import { images, colors } from '../../themes'
const CutomerDetails = () => {
  return (
    <SafeAreaView style={customerDetailstyle.safeArea}>
      <View style={customerDetailstyle.container}>
        <Image style={customerDetailstyle.sliderImage} source={images.slider3} resizeMode="cover" />
        <View style={customerDetailstyle.cardsWrapper}>
          <View style={customerDetailstyle.card}>
            <View style={customerDetailstyle.cardInfo}>
              <Image source={images.slider3} style={customerDetailstyle.logo} />
              <View><Text style={customerDetailstyle.cardTitle}>Jaydeep Rajani</Text></View>
              <View><Text style={customerDetailstyle.cardDetails}>Software Trainee </Text></View>
              <View><Text style={customerDetailstyle.cardDetails2}>Software Trainee </Text></View>
            </View>
          </View>
          <View style={customerDetailstyle.cardInfo2}>
            <View><Text style={customerDetailstyle.cardTitle2}>Jaydeep Rajani</Text></View>
          </View>

          <View style={customerDetailstyle.card2}>
            <View style={customerDetailstyle.cardInfo3}>
              <View><Text style={customerDetailstyle.cardDetails3}>Jaydeep Rajani</Text></View>
              <View><Text style={customerDetailstyle.cardTitle3}>Jul 27,2021</Text></View>
            </View>
            <View style={customerDetailstyle.cardInfo3}>
            <View><Text style={customerDetailstyle.cardDetails3}>Jaydeep Rajani</Text></View>
              <View><Text style={customerDetailstyle.cardTitle3}>Aug 28,2021</Text></View>
            </View>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default CutomerDetails;
