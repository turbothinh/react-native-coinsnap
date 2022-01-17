import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { HomeScreen } from '../screens/Home';
import { SingleCoinScreen } from '../screens/SingleCoin';

const Stack = createNativeStackNavigator();

export enum OverviewStackScreens {
  Home = 'Home',
  SingleCoin = 'Single'
}

export const OverviewStack = () => {
  return (
    <Stack.Navigator initialRouteName={OverviewStackScreens.Home}>
      <Stack.Screen name={OverviewStackScreens.Home} component={HomeScreen} />
      <Stack.Screen name={OverviewStackScreens.SingleCoin} component={SingleCoinScreen} />
    </Stack.Navigator>
  );
};
