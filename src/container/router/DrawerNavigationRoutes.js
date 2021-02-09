// Import React
import React from 'react';
import {View, Text, Alert, StyleSheet,Image,TouchableOpacity} from 'react-native';
// Import Navigators from React Navigation
import {createStackNavigator} from '@react-navigation/stack';
import {createDrawerNavigator} from '@react-navigation/drawer';

// Import Screens
import Home from '../Drawer/Home';
import About from '../Drawer/About';
import Profile from '../Drawer/Profile';
import Contact from '../Drawer/Contact';
import Settings from '../Drawer/Settings';
import CustomSidebarMenu from '../../components/CustomSidebarMenu';
import NavigationDrawerHeader from '../../components/NavigationDrawerHeader';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

const HomeScreenStack = ({navigation}) => {
  return (
    <Stack.Navigator initialRouteName="Home" screenOptions={{headerStyle: {backgroundColor: '#ba68c8'}}}>
      <Stack.Screen
        name="Home"
        component={Home}
        options={{
          headerTintColor: '#ffffff',
          title: 'Home', //Set Header Title
          headerLeft: () => (
            <NavigationDrawerHeader navigationProps={navigation} />
          )
        }}
      />
    </Stack.Navigator>
  );
};

const AboutScreenStack = ({navigation}) => {
  return (
    <Stack.Navigator
      initialRouteName="About"
      screenOptions={{
        headerLeft: () => (
          <NavigationDrawerHeader navigationProps={navigation} />
        ),
        headerStyle: {backgroundColor: '#ba68c8'}
      }}>
      <Stack.Screen
        name="About"
        component={About}
        options={{
          headerTintColor: '#ffffff',
          title: 'About', //Set Header Title
        }}
      />
    </Stack.Navigator>
  );
};


const ProfileScreenStack = ({navigation}) => {
  return (
    <Stack.Navigator
      initialRouteName="Profile"
      screenOptions={{
        headerLeft: () => (
          <NavigationDrawerHeader navigationProps={navigation} />
        ),
        headerStyle: {backgroundColor: '#ba68c8'}
        
      }}>
      <Stack.Screen
        name="Profile"
        component={Profile}
        options={{
          headerTintColor: '#ffffff',
          title: 'Profile', //Set Header Title
        }}
      />
    </Stack.Navigator>
  );
};

const SettingScreenStack = ({navigation}) => {
  return (
    <Stack.Navigator
      initialRouteName="Settings"
      screenOptions={{
        headerLeft: () => (
          <NavigationDrawerHeader navigationProps={navigation} />
        ),
        headerStyle: {backgroundColor: '#ba68c8'}
       
      }}>
      <Stack.Screen
        name="Settings"
        component={Settings}
        options={{
          headerTintColor: '#ffffff',
          title: 'Settings', //Set Header Title
        }}
      />
    </Stack.Navigator>
  );
};



const ContactScreenStack = ({navigation}) => {
  return (
    <Stack.Navigator
      initialRouteName="Contact"
      screenOptions={{
        headerLeft: () => (
          <NavigationDrawerHeader navigationProps={navigation} />
        ),
        headerStyle: {backgroundColor: '#ba68c8'}
       
      }}>
      <Stack.Screen
        name="Contact"
        component={Contact}
        options={{
          headerTintColor: '#ffffff',
          title: 'Contact', //Set Header Title
        }}
      />
    </Stack.Navigator>
  );
};






const DrawerNavigatorRoutes = (props) => {
  return (
    <Drawer.Navigator
      drawerContentOptions={{
        //activeTintColor: '#cee1f2',
        activeTintColor: '#ba68c8',
        inactiveTintColor: 'gray',
        color: '#ba68c8',
        itemStyle: {marginVertical: 5, color: 'white'},
        labelStyle: {
         // color: '#d8d8d8',
         color: '#ba68c8',
        },
      }}
      screenOptions={{headerShown: false}}
      drawerContent={CustomSidebarMenu}>

      <Drawer.Screen
        name="Home"
        options={{drawerLabel: 'Home',
        drawerIcon: ({ tintColor }) => (

          <Image
              source={require('../../assets/images/sideMenu/home.png')}
              resizeMode="contain"
              style={{ width: 20, height: 20, tintColor: tintColor }}
          />
         )}}
        component={HomeScreenStack}
       />

        <Drawer.Screen
        name="AboutScreenStack"
        options={{drawerLabel: 'About',
        drawerIcon: ({ tintColor }) => (

          <Image
              source={require('../../assets/images/sideMenu/about.png')}
              resizeMode="contain"
              style={{ width: 20, height: 20, tintColor: tintColor }}
          />
         ) }}
        component={AboutScreenStack}
        />

      <Drawer.Screen
        name="ProfileScreenStack"
        options={{drawerLabel: 'Profile',
        drawerIcon: ({ tintColor }) => (

          <Image
              source={require('../../assets/images/sideMenu/profile.png')}
              resizeMode="contain"
              style={{ width: 20, height: 20, tintColor: tintColor }}
          />
         ) }}
        component={ProfileScreenStack}
      />

     
      <Drawer.Screen
        name="SettingScreenStack"
        options={{drawerLabel: 'Settings', drawerIcon: ({ tintColor }) => (

          <Image
              source={require('../../assets/images/sideMenu/settings.png')}
              resizeMode="contain"
              style={{ width: 20, height: 20, tintColor: tintColor }}
          />
         ) }}
        component={SettingScreenStack}
      />


    <Drawer.Screen
        name="ContactScreenStack"
        options={{drawerLabel: 'Contact', drawerIcon: ({ tintColor }) => (

          <Image
              source={require('../../assets/images/sideMenu/contact.png')}
              resizeMode="contain"
              style={{ width: 20, height: 20, tintColor: tintColor }}
          />
         ) }}
        component={ContactScreenStack}
      />
    </Drawer.Navigator>
  );
};

export default DrawerNavigatorRoutes;
