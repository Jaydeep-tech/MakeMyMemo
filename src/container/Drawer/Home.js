// Import React and Component
import React,{useState} from 'react';
import {View, Text, SafeAreaView,StyleSheet,Image,ScrollView,TouchableOpacity} from 'react-native';
import Swiper from 'react-native-swiper';

const Home = () => {
  return (
    <View style={styles.container}>
      <View style={styles.sliderContainer}>
        {/* <Swiper autoplay horizontal={false} height={200} activeDotColor="#ffff" style={styles.wrapper} showsButtons={true}> Vertical Slider */}
        <Swiper autoplay  activeDotColor="#ffff" style={styles.wrapper} showsButtons={true}>
          <View style={styles.slide}>
            <Image style={styles.sliderImage} source={require('../../assets/images/Slider/1.jpg')} resizeMode="cover" />
          </View>
          <View style={styles.slide}>
            <Image style={styles.sliderImage} source={require('../../assets/images/Slider/2.jpg')} resizeMode="cover" />
          </View>
          <View style={styles.slide}>
            <Image  style={styles.sliderImage} source={require('../../assets/images/Slider/3.jpg')} resizeMode="cover" />
          </View>
          <View style={styles.slide}>
            <Image  style={styles.sliderImage} source={require('../../assets/images/Slider/4.jpg')} resizeMode="cover" />
          </View>
          <View style={styles.slide}>
            <Image  style={styles.sliderImage} source={require('../../assets/images/Slider/5.jpg')} resizeMode="cover" />
          </View>
        </Swiper>
        </View>

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  sliderContainer:{
    height:215,
    width:'95%',
    marginTop:10,
    justifyContent: 'center',
    alignSelf:'center',
    borderRadius: 10,
  },
  wrapper: {},
  slide:{
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'transparent',
    borderRadius: 10,
  },
  sliderImage:{
    height:'100%',
    width:'100%',
    alignSelf:'center',
    borderRadius: 10,
  }
})

export default Home;

