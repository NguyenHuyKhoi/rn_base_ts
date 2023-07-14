import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import {MainNavigator} from './MainNavigator';
import {APP_SCREEN, RootStackParamList} from './screenType';
const RootStack = createNativeStackNavigator<RootStackParamList>();

export const RootNavigation = ({token}: {token?: string}) => {
  console.log('Token: ', token);
  return (
    <RootStack.Navigator>
      <RootStack.Screen
        name={APP_SCREEN.MAIN_APP}
        component={MainNavigator}
        options={{gestureEnabled: false, headerShown: false}}
      />
    </RootStack.Navigator>
  );
};
