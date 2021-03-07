// Import React and Component
import React from 'react';
import { View, Text, Alert, StyleSheet, Image, TouchableOpacity,Share } from 'react-native';
// Import Navigators from React Navigation
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

// Import Screens
import SplashScreen from '../screens/splashscreen/SplashScreen';
import MainScreen from '../screens/template/MainScreen';
import CutomerDetails from '../screens/customer/CutomerDetails';
import Createpost from '../screens/createpost/Createpost';
import EditProfile from '../screens/editprofile/EditProfile';
import Register from '../container/Drawer/Register';
import DrawerNavigationRoutes from '../container/router/DrawerNavigationRoutes';
import { strings, colors, images } from '../themes';
import { customerDetailstyle } from '../styles';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
const Stack = createStackNavigator();

const AppNavigator = (props) => {

  function onShare()  {
    try {
      const result = Share.share({
        title: 'App Title',
        message: 'Message'
      });
      if (result.action === Share.sharedAction) {
        if (result.activityType) {
          console.log('shared with activity type of result.activityType')
        }
        else if (result.action === Share.dismissedAction) {
          console.log('dismissed')
        }
      }
    }
    catch (error) {
      alert(error.message);
    }
  }


  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="SplashScreen">
        {/* SplashScreen which will come once for 5 Seconds */}
        <Stack.Screen
          name="SplashScreen"
          component={SplashScreen}
          // Hiding header for Splash Screen
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name="Register"
          component={Register}
          // Hiding header for Splash Screen
          options={{ headerShown: false }}
          // options={{
          //   title: strings.RegisterHeaderTitle, headerTitleStyle: { fontWeight: 'bold', alignSelf: 'center', marginRight:70},
          //   headerStyle: { backgroundColor: colors.RegisterHaderbgColors, shadowColor: '#fff', elevation: 0.5 }, headerTintColor: colors.RegisterHaderTintColors
          // }}
        />

        <Stack.Screen
          name="Createpost"
          component={Createpost}
          options={{title: strings.createPostTitle, headerTitleStyle: {fontWeight: 'bold'},
          headerStyle: { backgroundColor: colors.headerstylebgColor }, headerTintColor: colors.drawerheaderTintColor,}}
        />

        <Stack.Screen
          name="MainScreen"
          component={MainScreen}
          options={{title: strings.TemplateTitle, headerTitleStyle: {fontWeight: 'bold'},
          headerRight: () => (
            <View>
               {/* <Icon name="filter-outline" size={25} color={colors.FilterIcnColors}
                style={customerDetailstyle.FilterIcon} /> */}

                  <Image
                    source={images.FilterIcon}
                    style={customerDetailstyle.FilterIcon}
                  />
            </View>
          ),
          headerStyle: { backgroundColor: colors.headerstylebgColor }, headerTintColor: colors.drawerheaderTintColor,}}
        />

        <Stack.Screen
          name="EditProfile"
          component={EditProfile}
          options={{
            title: strings.editProfileTitle, headerTitleStyle: { fontWeight: 'bold', alignSelf: 'center',marginRight:50 },
            headerStyle: { backgroundColor: colors.editProfileHaderbgColors, shadowColor: '#fff', elevation: 0.5 }, headerTintColor: colors.editProfileHaderTintColors
          }}
        />

        <Stack.Screen
          name="CutomerDetails"
          component={CutomerDetails}
          options={{
            title: strings.customerDetailsTitle, headerTitleStyle: { fontWeight: 'bold', alignSelf: 'center', },
            // headerLeft: () => (
            //   <TouchableOpacity onPress={() => navigation.navigate('MainScreen')}>
            //     <Image
            //       source={images.leftArr}
            //       style={customerDetailstyle.haderLefticon}
            //     /></TouchableOpacity>
            // ),
            headerRight: () => (
              <View style={customerDetailstyle.haderrow}>
                {/* <TouchableOpacity>
                  <Image
                    source={images.likenew}
                    style={customerDetailstyle.headerLeftimg}
                  />
                </TouchableOpacity> */}
                {/* <TouchableOpacity onPress={() => onShare() }>
                  <Image
                    source={images.sharenew}
                    style={customerDetailstyle.headerRightimg}
                  />
                </TouchableOpacity> */}
              </View>
            ),
            headerStyle: { backgroundColor: colors.customerDetailsHaderColors, shadowColor: '#fff', elevation: 0.5 }, headerTintColor: colors.customerDetailsHaderTintColor
          }}
        />

        {/* Navigation Drawer as a landing page */}
        <Stack.Screen
          name="DrawerNavigationRoutes"
          component={DrawerNavigationRoutes}
          // Hiding header for Navigation Drawer as we will use our custom header
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
