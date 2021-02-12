import {Dimensions,ToastAndroid, Platform} from "react-native";
import AsyncStorage from '@react-native-async-storage/async-storage';
import Toast from 'react-native-simple-toast';

export const screenWidth = Dimensions.get('window').width;

export const screenHeight = Dimensions.get('window').height;


export const tostermessage = (message) => {
    if (Platform.OS == "android") {
        ToastAndroid.showWithGravityAndOffset(message, ToastAndroid.LONG, ToastAndroid.BOTTOM, 25, 50);
    }
    else {
        Toast.showWithGravity(message, Toast.LONG, Toast.BOTTOM);
    }
}


export const _retrieveData = async (key) => {
    try {
      const value = await AsyncStorage.getItem(key);
      if (value !== null) {
        // We have data!!
        return value;
      }
    } catch (error) {
      // Error retrieving data
    }
  };

  export const _storeData = async (key,value) => {
    try {
      await AsyncStorage.setItem(key,value);
    } catch (error) {
      // Error saving data
    }
  };

  export const _removeData = async (key) => {
    try {
      await AsyncStorage.removeItem(key);
    } catch (error) {
      // Error saving data
    }
  };

  export const navigationUpdate= (navigation, route) => {
    let params = {
      navigation: navigation,
      route:route
    }
    return params;
  }

