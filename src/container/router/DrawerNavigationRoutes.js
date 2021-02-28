// Import React
import React from 'react';
import { View, Text, Alert, StyleSheet, Image, TouchableOpacity } from 'react-native';
// Import Navigators from React Navigation
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';

// Import Screens
import Home from '../Drawer/Home';
import About from '../Drawer/About';
import Profile from '../Drawer/Profile';
import Contact from '../Drawer/Contact';
import Settings from '../Drawer/Settings';
import Login from '../Drawer/Login';
import CustomSidebarMenu from '../../components/SidebarMenu/CustomSidebarMenu';
import NavigationDrawerHeader from '../../components/DrawerHeader/NavigationDrawerHeader';
import { images } from '../../themes';
import { drawerRoutesstyle,profilestyle } from '../../styles';
import { colors, strings } from '../../themes';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

const HomeScreenStack = ({ navigation }) => {
  return (
    <Stack.Navigator initialRouteName="Home" screenOptions={{ headerStyle: { backgroundColor: colors.headerstylebgColor }}}>
      <Stack.Screen
        name="Home"
        component={Home}
        options={{
          headerTintColor: colors.drawerheaderTintColor,
          title: strings.homeTitle, //Set Header Title
          headerLeft: () => (
            <NavigationDrawerHeader navigationProps={navigation} />
          )
        }}
      />
    </Stack.Navigator>
  );
};

const AboutScreenStack = ({ navigation }) => {
  return (
    <Stack.Navigator
      initialRouteName="About"
      screenOptions={{
        headerLeft: () => (
          <NavigationDrawerHeader navigationProps={navigation} />
        ),
        headerStyle: { backgroundColor: colors.headerstylebgColor }
      }}>
      <Stack.Screen
        name="About"
        component={About}
        options={{
          headerTintColor: colors.drawerheaderTintColor,
          title: strings.aboutTitle, //Set Header Title
        }}
      />
    </Stack.Navigator>
  );
};


const ProfileScreenStack = ({ navigation }) => {
  return (
    <Stack.Navigator
      initialRouteName="Profile"
      screenOptions={{
        headerLeft: () => (
          <NavigationDrawerHeader navigationProps={navigation} />
        ),
        headerRight: () => (
          <View style={profilestyle.haderrow}>
            <TouchableOpacity onPress={() => navigation.navigate('EditProfile')}>
              <Image
                source={images.profileEdit}
                style={profilestyle.headerRightimg}
              />
            </TouchableOpacity>
          </View>
        ),
        headerStyle: { backgroundColor: colors.headerstylebgColor }

      }}>
      <Stack.Screen
        name="Profile"
        component={Profile}
        options={{
          headerTintColor: colors.drawerheaderTintColor,
          title: strings.profileTitle, //Set Header Title
        }}
      />
    </Stack.Navigator>
  );
};

const SettingScreenStack = ({ navigation }) => {
  return (
    <Stack.Navigator
      initialRouteName="Settings"
      screenOptions={{
        headerLeft: () => (
          <NavigationDrawerHeader navigationProps={navigation} />
        ),
        headerStyle: { backgroundColor: colors.headerstylebgColor }

      }}>
      <Stack.Screen
        name="Settings"
        component={Settings}
        options={{
          headerTintColor: colors.drawerheaderTintColor,
          title: strings.settingTitle, //Set Header Title
        }}
      />
    </Stack.Navigator>
  );
};



const ContactScreenStack = ({ navigation }) => {
  return (
    <Stack.Navigator
      initialRouteName="Contact"
      screenOptions={{
        headerLeft: () => (
          <NavigationDrawerHeader navigationProps={navigation} />
        ),
        headerStyle: { backgroundColor: colors.headerstylebgColor }

      }}>
      <Stack.Screen
        name="Contact"
        component={Contact}
        options={{
          headerTintColor: colors.drawerheaderTintColor,
          title: strings.contactTitle, //Set Header Title
        }}
      />
    </Stack.Navigator>
  );
};


const LoginScreenStack = ({ navigation }) => {
  return (
    <Stack.Navigator
      initialRouteName="Login">
      <Stack.Screen
        name="Login"
        component={Login}
        options={{
          headerTintColor: colors.drawerheaderTintColor,
          headerShown:false
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
        activeTintColor: colors.draweractiveTintColor,
        inactiveTintColor: colors.drawerinactiveTintColor,
        color: colors.drawertxtColor,
        itemStyle: { marginVertical: 5, color: colors.draweritemStyle },
        labelStyle: {
          // color: '#d8d8d8',
          color: colors.drawerlabelStyle,
        },
      }}
      screenOptions={{ headerShown: false }}
      drawerContent={CustomSidebarMenu}>

      <Drawer.Screen
        name="Home"
        options={{
          drawerLabel: strings.homeTitle,
          drawerIcon: ({ tintColor }) => (
            
            // <Image
            //   source={images.homeslidemenu}
            //   resizeMode="contain"
            //   // style={{ width: 20, height: 20, tintColor: tintColor }}
            //   style={drawerRoutesstyle.drawerimg}
            // />
            <Icon name="home" size={25} color='#ba68c8' 
            style={drawerRoutesstyle.drawerimg} />
          )
        }}
        component={HomeScreenStack}
      />

      <Drawer.Screen
        name="AboutScreenStack"
        options={{
          drawerLabel: strings.aboutTitle,
          drawerIcon: ({ tintColor }) => (

            // <Image
            //   source={images.aboutslidemenu}
            //   resizeMode="contain"
            //   style={drawerRoutesstyle.drawerimg}
            // />
            <Icon name="information" size={25} color='#ba68c8' 
            style={drawerRoutesstyle.drawerimg} />
          )
        }}
        component={AboutScreenStack}
      />

      <Drawer.Screen
        name="ProfileScreenStack"
        options={{
          drawerLabel: strings.profileTitle,
          drawerIcon: ({ tintColor }) => (

            // <Image
            //   source={images.profileslidemenu}
            //   resizeMode="contain"
            //   style={drawerRoutesstyle.drawerimg}
            // />

            <Icon name="account-box" size={25} color='#ba68c8' 
            style={drawerRoutesstyle.drawerimg} />
          )
        }}
        component={ProfileScreenStack}
      />


      <Drawer.Screen
        name="SettingScreenStack"
        options={{
          drawerLabel: strings.settingTitle, drawerIcon: ({ tintColor }) => (

            // <Image
            //   source={images.settingsslidemenu}
            //   resizeMode="contain"
            //   style={drawerRoutesstyle.drawerimg}
            // />
            <Icon name="upload" size={25} color='#ba68c8' 
            style={drawerRoutesstyle.drawerimg} />
          )
        }}
        component={SettingScreenStack}
      />


      <Drawer.Screen
        name="ContactScreenStack"
        options={{
          drawerLabel: strings.contactTitle, drawerIcon: ({ tintColor }) => (

            // <Image
            //   source={images.contactslidemenu}
            //   resizeMode="contain"
            //   style={drawerRoutesstyle.drawerimg}
            // />
            <Icon name="phone" size={25} color='#ba68c8' 
            style={drawerRoutesstyle.drawerimg} />
          )
        }}
        component={ContactScreenStack}
      />

      <Drawer.Screen
        name="LoginScreenStack"
        options={{
          drawerLabel: strings.loginTitle, drawerIcon: ({ tintColor }) => (

            // <Image
            //   source={images.contactslidemenu}
            //   resizeMode="contain"
            //   style={drawerRoutesstyle.drawerimg}
            // />
            <Icon name="login-variant" size={25} color='#ba68c8' 
            style={drawerRoutesstyle.drawerimg} />
          )
        }}
        component={LoginScreenStack}
      />
    </Drawer.Navigator>
  );
};

export default DrawerNavigatorRoutes;
