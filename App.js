//React Components
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

//Packages
import { StackNavigator, DrawerNavigator } from 'react-navigation';

//Screens
import Index from './src/index';
import InfoScreen from './src/screens/info'


const stackNavigator = StackNavigator(
  {
    Info: { screen: InfoScreen }
  },
  {
    headerMode: "none"
  }
);

const RNProjectRoute = DrawerNavigator(
  {
    Login: {
      screen: Index
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
