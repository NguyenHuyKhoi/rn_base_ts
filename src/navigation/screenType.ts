import {IGame} from '@src/model';

export enum APP_SCREEN {
  HOME_TAB = 'HOME_TAB',
  LOGIN = 'LOGIN',
  HOME = 'HOME',
  PLAY = 'PLAY',
  CHANNEL = 'CHANNEL',
  CHANNELS = 'CHANNELS',
  PROFILE = 'PROFILE',
  AUTHENTICATION = 'AUTHENTICATION',
  MAIN_APP = 'MAIN_APP',
  USER_GAMES = 'USER_GAMES',
  USER_GAME_EDITOR = 'USER_GAME_EDITOR',
}

export type RootStackParamList = {
  [APP_SCREEN.AUTHENTICATION]: undefined;
  [APP_SCREEN.MAIN_APP]: undefined;
  [APP_SCREEN.USER_GAMES]: undefined;
  [APP_SCREEN.HOME]: undefined;
  [APP_SCREEN.PLAY]: {
    data: IGame;
  };
  [APP_SCREEN.CHANNEL]: {
    id: string;
  };
  [APP_SCREEN.USER_GAME_EDITOR]:
    | {
        game: IGame;
      }
    | undefined;
};
