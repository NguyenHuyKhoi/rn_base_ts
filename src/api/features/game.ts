import AsyncStorage from '@react-native-async-storage/async-storage';
import {IGame} from '@src/model';
import {fake, MODEL_TYPE} from '@src/model/faker';
import {store} from '@store';
const {token} = store.getState().appReducer;

interface GameAPI {
  getAll: () => Promise<Game[]>;
  getDetail: (id: string) => Promise<Game>;
}
const gameApi: GameAPI = {
  getAll: () => {
    return new Promise(async resolve => {
      const data = await AsyncStorage.getItem('games');
      console.log('data: ', data);
      return data ? JSON.parse(data) : [];
      //  resolve(fake(MODEL_TYPE.GAME) as Game[]);
    });
  },
  getDetail: id => {
    return new Promise(resolve => {
      resolve(fake(MODEL_TYPE.GAME, false) as Game);
    });
  },
};
export {gameApi};
