//React Components
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

//Packages
import { StackNavigator, DrawerNavigator } from 'react-navigation';

//Screens
import Index from './src/index';
import InfoScreen from './src/screens/info'
import Signup from './src/screens/signup';
import Drawer from './src/drawer/drawer';
import Main from './src/screens/main';


const stackNavigator = StackNavigator(
  {
    Login: { screen: Index },
    Info: { screen: InfoScreen },
    Signup: { screen: Signup },
  },
  {
    headerMode: "none"
  }
);

const RNProjectRoute = DrawerNavigator(
  {
    Stack: {
      screen: stackNavigator
    },
    Home: {
      screen: Main
    },

  },
  {
    contentComponent: Drawer,
    contentOptions: {
      activeTintColor: "#e91e63",
      style: {
        flex: 1,
        paddingTop: 15
      }
    }
  }
);

export default class App extends React.Component {
  render() {
    return <RNProjectRoute />;
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
