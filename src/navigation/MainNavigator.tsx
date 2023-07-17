import {APP_SCREEN} from '@navigation';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {ChannelScreen, PlayScreen, UserGameEditorScreen} from '@screens';
import {UserGamesScreen} from '@src/screens/User/Games';
import React from 'react';
import HomeTab from './HomeTab';
const Stack = createNativeStackNavigator();
export const MainNavigator: React.FunctionComponent = () => {
  return (
    <Stack.Navigator
      initialRouteName={APP_SCREEN.HOME}
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name={APP_SCREEN.HOME_TAB} component={HomeTab} />
      <Stack.Screen name={APP_SCREEN.PLAY} component={PlayScreen} />
      <Stack.Screen name={APP_SCREEN.CHANNEL} component={ChannelScreen} />
      <Stack.Screen name={APP_SCREEN.USER_GAMES} component={UserGamesScreen} />
      <Stack.Screen
        name={APP_SCREEN.USER_GAME_EDITOR}
        component={UserGameEditorScreen}
      />
    </Stack.Navigator>
  );
};
