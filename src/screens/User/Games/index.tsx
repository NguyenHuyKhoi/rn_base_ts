import firestore from '@react-native-firebase/firestore';
import {COLLECTION, FireStore} from '@src/api/firebase';
import {IGame} from '@src/model';
import React, {useCallback, useEffect, useState} from 'react';
import {ActivityIndicator, FlatList, View} from 'react-native';
import {GameCard} from './component';
import {Button} from '@components';
import {APP_SCREEN, RootStackParamList} from '@navigation';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
export const UserGamesScreen = () => {
  const navigation =
    useNavigation<
      NativeStackNavigationProp<RootStackParamList, APP_SCREEN.USER_GAMES>
    >();
  const [loading, setLoading] = useState(true);
  const [games, setGames] = useState<IGame[]>([]);

  useEffect(() => {
    const subscriber = firestore()
      .collection(COLLECTION.GAME)
      .onSnapshot(querySnapshot => {
        setLoading(true);
        const data: IGame[] = [];

        querySnapshot.forEach(documentSnapshot => {
          data.push({
            ...documentSnapshot.data(),
            id: documentSnapshot.id,
          } as IGame);
        });

        setGames(data);
        setLoading(false);
      });

    // Unsubscribe from events when no longer in use
    return () => subscriber();
  }, []);

  const deleteGame = useCallback(async (item: IGame) => {
    await FireStore.deleteDocument(COLLECTION.GAME, item.id);
  }, []);

  const create = useCallback(() => {
    navigation.navigate(APP_SCREEN.USER_GAME_EDITOR);
  }, [navigation]);
  if (loading) {
    return <ActivityIndicator />;
  }

  return (
    <View className="flex-1 bg-white mt-10">
      <FlatList
        data={games}
        keyExtractor={(item, index) => index + ''}
        renderItem={({item}) => (
          <GameCard data={item} onDelete={() => deleteGame(item)} />
        )}
      />
      <Button label="Create" onPress={create} />
    </View>
  );
};
