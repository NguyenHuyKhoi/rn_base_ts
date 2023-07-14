import {APP_SCREEN} from '@navigation';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {
  ChannelScreen,
  CMSScreen,
  PlayScreen,
  ResultScreen,
  ReviewScreen,
  UserGameEditorScreen,
} from '@screens';
import React from 'react';
import HomeTab from './HomeTab';
import {UserGamesScreen} from '@src/screens/User/Games';
const Stack = createNativeStackNavigator();
export const MainNavigator: React.FunctionComponent = () => {
  return (
    <Stack.Navigator
      initialRouteName={APP_SCREEN.USER_GAME_EDITOR}
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name={APP_SCREEN.HOME_TAB} component={HomeTab} />
      <Stack.Screen name={APP_SCREEN.PLAY} component={PlayScreen} />
      <Stack.Screen name={APP_SCREEN.RESULT} component={ResultScreen} />
      <Stack.Screen name={APP_SCREEN.REVIEW} component={ReviewScreen} />
      <Stack.Screen name={APP_SCREEN.CMS} component={CMSScreen} />
      <Stack.Screen name={APP_SCREEN.CHANNEL} component={ChannelScreen} />
      <Stack.Screen name={APP_SCREEN.USER_GAMES} component={UserGamesScreen} />
      <Stack.Screen
        name={APP_SCREEN.USER_GAME_EDITOR}
        component={UserGameEditorScreen}
      />
    </Stack.Navigator>
  );
};
