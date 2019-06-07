import React from 'react';
import { createAppContainer, createStackNavigator } from 'react-navigation';

import HomeScreen from '../screens/HomeScreen';
import InfoScreen from '../screens/InfoScreen';

export default createAppContainer(
  createStackNavigator(
    {
      HomeScreen,
      InfoScreen
    }
  )
);
