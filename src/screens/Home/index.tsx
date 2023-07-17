import {Button, GameCard} from '@components';
import firestore from '@react-native-firebase/firestore';
import {YoutubeAPI} from '@src/api';
import {COLLECTION, FSYTVideo} from '@src/api/firebase/firestore';
import {IGame} from '@src/model';
import React, {FC, useCallback, useEffect, useState} from 'react';
import {FlatList, View} from 'react-native';
import _, {sample} from 'lodash';
interface HomeScreenProps {}
export const HomeScreen: FC<HomeScreenProps> = ({}) => {
  const [games, setGames] = useState<IGame[]>([]);

  useEffect(() => {
    const subscriber = firestore()
      .collection(COLLECTION.GAME)
      .onSnapshot(querySnapshot => {
        const data: IGame[] = [];

        querySnapshot.forEach(documentSnapshot => {
          data.push({
            ...documentSnapshot.data(),
            id: documentSnapshot.id,
          } as IGame);
        });

        setGames(data);
      });

    // Unsubscribe from events when no longer in use
    return () => subscriber();
  }, []);

  const testYT = useCallback(async () => {
    const videoIDs = [
      'VC2hgHe6FSk',
      'MwpMEbgC7DA',
      'L4mB0WxxhW8',
      'bFeRFEFm6uE',
      'jj_0tzdbIek',
    ];
    const id = sample(videoIDs);
    console.log('Add video id: ', id);
    id && (await FSYTVideo.add(id));
  }, []);

  return (
    <View className="flex-1">
      <View className="mt-20" />
      <FlatList
        data={games}
        className="mx-5"
        keyExtractor={(item, index) => index + ''}
        renderItem={({item}) => <GameCard data={item} />}
      />
      <Button label="Test" onPress={testYT} />
    </View>
  );
};
