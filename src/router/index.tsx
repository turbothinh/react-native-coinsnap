import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Icon } from '@ui-kitten/components';
import React from 'react';
import { OverviewStack } from './OverviewStack';
import { ProfileScreen } from '../screens/Profile';

const Tab = createBottomTabNavigator();

export enum BottomTabScreen {
  Overview = 'Overview',
  Profile = 'Profile'
}

const colorActive = 'tomato';
const colorDim = 'gray';

export const BottomTab = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === BottomTabScreen.Overview) {
            iconName = focused ? 'home' : 'home-outline';
          } else if (route.name === BottomTabScreen.Profile) {
            iconName = focused ? 'person' : 'person-outline';
          }

          // You can return any component that you like here!
          return <Icon name={iconName} fill={focused ? colorActive : colorDim} style={{ width: 20, height: 20 }} />;
        },
        tabBarActiveTintColor: colorActive,
        tabBarInactiveTintColor: colorDim,
        headerShown: false
      })}
    >
      <Tab.Screen name={BottomTabScreen.Overview} component={OverviewStack} />
      <Tab.Screen name={BottomTabScreen.Profile} component={ProfileScreen} />
    </Tab.Navigator>
  );
};
