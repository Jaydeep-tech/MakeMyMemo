// Import React and Component
import React, {useState, useEffect} from 'react';
import {ActivityIndicator, View, StyleSheet, Image,Dimensions,Text} from 'react-native';
import LinearGradient from 'react-native-linear-gradient'
const SplashScreen = ({navigation}) => {
  //State for ActivityIndicator animation
  const [animating, setAnimating] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setAnimating(false);
      navigation.replace('MainScreen')
    }, 5000);
  }, []);

  return (
    <LinearGradient
    colors={['#ba68c8', 'white']}
    style={styles.container}
    start={{ x: 0, y: 0 }}
    end={{ x: 1, y: 1 }}
  >
    <View style={styles.container}>
        <View style={styles.header}>
             <Image
               source={require('../../assets/images/general/logo_app/Logo.jpg')} style={styles.logo} />
        </View>
        <View>
            <Text style={{color:'#ffff',fontSize:30,fontWeight:'bold',fontStyle:'italic'}} >WELCOME TO</Text>
        </View>
        <View>
            <Text style={{color:'#ffff',fontSize:30,fontWeight:'bold',fontStyle:'italic'}} >MAKE MY MEMORIES</Text>
        </View>
      <ActivityIndicator
        animating={animating}
        color="#FFFFFF"
        size="large"
        style={styles.activityIndicator}
      />
    </View>
    </LinearGradient>
  );
};

export default SplashScreen;

const {height} = Dimensions.get("screen");
const height_logo = height * 0.28;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    //backgroundColor: '#307ecc',
  },
  activityIndicator: {
    alignItems: 'center',
    height: 250,
  },
  header: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center'
  },
  logo: {
    width: height_logo,
    height: height_logo,
    borderRadius: 150,
    },
});
