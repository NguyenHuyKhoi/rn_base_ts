/* eslint-disable react-native/no-inline-styles */
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {HomeScreen} from '@screens';
import {ChannelsScreen} from '@src/screens/Channels';
import {ProfileScreen} from '@src/screens/Profile';
import {sizes} from '@utils';
import React from 'react';
import {APP_SCREEN} from './screenType';
import {IconButton} from '@components';

const Tab = createBottomTabNavigator();
export default HomeTab = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarHideOnKeyboard: true,
      }}>
      <Tab.Screen
        name={APP_SCREEN.HOME}
        component={HomeScreen}
        options={{
          tabBarShowLabel: false,
          tabBarIcon: ({focused}) => {
            return (
              <IconButton
                icon="home"
                size={sizes(30)}
                iconColor={focused ? '#2F80ED' : 'gray'}
              />
            );
          },
        }}
      />
      <Tab.Screen
        name={APP_SCREEN.CHANNELS}
        component={ChannelsScreen}
        options={{
          tabBarShowLabel: false,
          tabBarIcon: ({focused}) => {
            return (
              <IconButton
                icon="account-group"
                size={sizes(30)}
                iconColor={focused ? '#2F80ED' : 'gray'}
              />
            );
          },
        }}
      />
      <Tab.Screen
        name={APP_SCREEN.PROFILE}
        component={ProfileScreen}
        options={{
          tabBarShowLabel: false,
          tabBarIcon: ({focused}) => {
            return (
              <IconButton
                icon="account"
                size={sizes(30)}
                iconColor={focused ? '#2F80ED' : 'gray'}
              />
            );
          },
        }}
      />
    </Tab.Navigator>
  );
};
