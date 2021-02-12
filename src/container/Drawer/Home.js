// Import React and Component
import React, { useState } from 'react';
import { View, Text, SafeAreaView, StyleSheet, Image, ScrollView, TouchableOpacity } from 'react-native';
import Swiper from 'react-native-swiper';
import { images } from '../../themes';
import { homestyle } from '../../styles';

const Home = () => {
  return (
    <View style={homestyle.container}>
      <View style={homestyle.sliderContainer}>
        {/* <Swiper autoplay horizontal={false} height={200} activeDotColor="#ffff" style={styles.wrapper} showsButtons={true}> Vertical Slider */}
        <Swiper autoplay activeDotColor="#ffff" style={homestyle.wrapper} showsButtons={true}>
          <View style={homestyle.slide}>
            <Image style={homestyle.sliderImage} source={images.slider1} resizeMode="cover" />
          </View>
          <View style={homestyle.slide}>
            <Image style={homestyle.sliderImage} source={images.slider2} resizeMode="cover" />
          </View>
          <View style={homestyle.slide}>
            <Image style={homestyle.sliderImage} source={images.slider3} resizeMode="cover" />
          </View>
          <View style={homestyle.slide}>
            <Image style={homestyle.sliderImage} source={images.slider4} resizeMode="cover" />
          </View>
          <View style={homestyle.slide}>
            <Image style={homestyle.sliderImage} source={images.slider5} resizeMode="cover" />
          </View>
        </Swiper>
      </View>
    </View>
  );
};

export default Home;

