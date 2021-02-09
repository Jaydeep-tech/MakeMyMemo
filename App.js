import 'react-native-gesture-handler';

// Import React and Component
import React from 'react';

// Import Navigators from React Navigation
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

// Import Screens
import SplashScreen from './src/container/Customer/SplashScreen';
import MainScreen from './src/container/Customer/MainScreen';
import DrawerNavigationRoutes from './src/container/router/DrawerNavigationRoutes';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="SplashScreen">
        {/* SplashScreen which will come once for 5 Seconds */}
        <Stack.Screen
          name="SplashScreen"
          component={SplashScreen}
          // Hiding header for Splash Screen
          options={{headerShown: false}}
        />
        
        <Stack.Screen
          name="MainScreen"
          component={MainScreen}
          
          options={{title: 'MAKE MY MEMO', headerTitleStyle: {fontWeight: 'bold'},
          headerStyle: { backgroundColor: '#ba68c8' }, headerTintColor: 'white',}}
        />
      

        {/* Navigation Drawer as a landing page */}
        <Stack.Screen
          name="DrawerNavigationRoutes"
          component={DrawerNavigationRoutes}
          // Hiding header for Navigation Drawer as we will use our custom header
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
