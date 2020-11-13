import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import HomeScreen from './containers/HomeScreen';
import ElectronicsScreen from './containers/ElectronicsScreen';
import BooksScreen from './containers/BooksScreen';
import ShoppingCartIcon from './containers/ShoppingCartIcon';
import CartScreen from './containers/CartScreen';


class ShoppingCart extends Component {

  render() {
    return (
        <AppContainer />
    );
  }
}

const RootStack = createStackNavigator(
  {
    Home: HomeScreen,
    Electronics: ElectronicsScreen,
    Books: BooksScreen,
    Cart: CartScreen,
  },
  {
    defaultNavigationOptions: {
      headerTitle: 'Shopping App',
      headerRight:(
        <ShoppingCartIcon />
      )
    }
  }
);

const AppContainer = createAppContainer(RootStack);

export default ShoppingCart;
