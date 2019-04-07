import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Button
} from "react-native";
import Icon from 'react-native-vector-icons/Ionicons'
/**
 * createSwitchNavigator - Only Show ONE SCREEN/STACK at one time
 *  1. Loading Screen
 *  2. Authentication StackNavigator
 *    - Auth Welcome Screen
 *    - SignIn Screen
 *    - Sign Up Screen
 *  3. AppDrawerNavigator
 *    - App StackNavigator (to give a common header to the tabs)
 *       - App TabNavigator
 *         - Home Tab
 *         - Settings Tab
 */


import { createSwitchNavigator, createStackNavigator, createDrawerNavigator, createBottomTabNavigator } from 'react-navigation'
import AuthLoadingScreen from './src/Screens/AuthLoadingScreen'
import WelcomeScreen from './src/Screens/WelcomeScreen'
import SignInScreen from './src/Screens/SignInScreen'
import SignUpScreen from './src/Screens/SignUpScreen'
import HomeScreen from './src/Screens/HomeScreen'
import SettingsScreen from './src/Screens/SettingScreen'
import BarcodeScanner from './src/BarcodeScanner/BarcodeScanner'
import ProfileScreen from './src/Screens/ProfileScreen'
import SearchScreen from './src/Screens/SearchScreen'
import CartScreen from './src/Screens/CartScreen'
import BarCodeScreen from './src/Screens/BarCodeScreen'


const AuthStackNavigator = createStackNavigator({
  Welcome: WelcomeScreen,
  SignIn: SignInScreen,
  SignUp: SignUpScreen,
})
const barcodeStackNavigator = createStackNavigator({

  barcodeScreen:{
    screen:BarCodeScreen,
    navigationOptions:{
      header:null,
    }
  
  },

  scan:{
    screen:BarcodeScanner,
    navigationOptions:{
      header:null,
     tabBarVisible: false
       
    }
  }
})
barcodeStackNavigator.navigationOptions = ({ navigation }) => {
  let tabBarVisible;
  if (navigation.state.routes.length > 1) {
    navigation.state.routes.map(route => {
      if (route.routeName === "scan") {
        tabBarVisible = false;
      } else {
        tabBarVisible = true;
      }
    });
  }

  return {
    tabBarVisible
  };
};





const AppTabNavigator = createBottomTabNavigator(
  {
  HomeScreen: {
    screen: HomeScreen,
    navigationOptions: {
      tabBarLabel: 'HOME',
      tabBarIcon: () => (
        <Icon name = "ios-home" size = {24}></Icon>
        )
    }
  },
  Barcode: {
    screen: barcodeStackNavigator,
    navigationOptions: {
      tabBarLabel: 'Scanner',
      tabBarIcon: () => (
        <Icon name="ios-barcode" size={24} />
      )
    }
  },
  Search: {
    screen: SearchScreen,
    navigationOptions: {
      tabBarLabel: 'Discover',
      tabBarIcon: () => (
        <Icon name="ios-search" size={24} />
      )
    }
  },
  Cart: {
    screen: CartScreen,
    navigationOptions: {
      tabBarLabel: 'Cart',
      tabBarIcon: () => (
        <Icon name="ios-cart" size={24} />
      )
    }
  },
  Settings: {
    screen: SettingsScreen,
    navigationOptions: {
      tabBarLabel: 'More',
      tabBarIcon: () => (
        <Icon name="ios-settings" size={24} />
      )
    }
  },
  Profile: {
    screen: ProfileScreen,
    navigationOptions: {
      tabBarLabel: 'Profile',
      tabBarIcon: () => (
        <Icon name="ios-person" size={24} />
      )
    }

  },
},
{
initialRouteName:"HomeScreen",
animationEnabled:"true",
swipeEnabled:"true",
tabBarPosition:"bottom",
tabBarOptions : {
    activeTintColor: 'black',
    inactiveTintColor: 'lightgray',
    // activeTintColor: '#000000',
    // activeBackgroundColor: "gray",
    // inactiveTintColor: 'gray',
    showLabel : true,
    showIcon : true,
   
  },
  }
)

const AppStackNavigator = createStackNavigator({
  AppTabNavigator: {
    screen: AppTabNavigator,
    navigationOptions: ({ navigation }) => ({
      title: "grab-n-go",
      headerLeft: (
        <TouchableOpacity onPress={() => navigation.toggleDrawer()}>
          <View style={{ paddingHorizontal: 10 }}>
            <Icon name="md-menu" size={24} />
          </View>
        </TouchableOpacity>
      )
    })
  }
})

AppTabNavigator.navigationOptions = ({ navigation }) => {
  let { routeName } = navigation.state.routes[navigation.state.index];

  // You can do whatever you like here to pick the title based on the route name
  let headerTitle = routeName;

  return {
    headerTitle,
  };
};

const AppDrawerNavigator = createDrawerNavigator({
  Home: AppStackNavigator,
  barcode:barcodeStackNavigator
})

export default createSwitchNavigator({
  AuthLoading: AuthLoadingScreen,
  Auth: AuthStackNavigator,
  App: AppDrawerNavigator
})

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
});