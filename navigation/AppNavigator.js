import React from 'react';
import { createAppContainer, createStackNavigator } from 'react-navigation';

import HomeScreen from '../screens/HomeScreen';

export default createAppContainer(
  createStackNavigator({
    HomeScreen
  })
);
