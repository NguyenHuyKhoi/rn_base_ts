import {MODEL_TYPE, fake} from '@src/model/faker';
import React from 'react';
import {FlatList, View} from 'react-native';
import {GameCard} from './component';
import {Model} from '@src/model/model';

export const UserGamesScreen = () => {
  const list = fake(MODEL_TYPE.GAME);
  return (
    <View className="flex-1 bg-white">
      <FlatList
        data={list as Model[]}
        keyExtractor={(item, index) => index + ''}
        renderItem={({item}) => <GameCard data={item} />}
      />
    </View>
  );
};
