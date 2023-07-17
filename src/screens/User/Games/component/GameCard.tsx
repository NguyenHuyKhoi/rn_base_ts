import {APP_SCREEN, RootStackParamList} from '@navigation';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {IGame} from '@src/model';
import {colors} from '@src/themes/colors';
import React, {FC, useCallback} from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {TrashIcon} from 'react-native-heroicons/solid';

interface Props {
  data: IGame;
  onDelete: () => void;
}
export const GameCard: FC<Props> = ({data, onDelete}) => {
  const navigation =
    useNavigation<
      NativeStackNavigationProp<RootStackParamList, APP_SCREEN.USER_GAMES>
    >();
  const viewGame = useCallback(() => {
    navigation.navigate(APP_SCREEN.USER_GAME_EDITOR, {
      game: data,
    });
  }, [data, navigation]);

  return (
    <TouchableOpacity
      onPress={viewGame}
      style={{
        backgroundColor: colors.bgColor(0.5),
      }}
      className="flex-row mx-3 px-5 py-3 mt-2 rounded-xl">
      <View className="flex-1">
        <Text>{data.video.title}</Text>
        <Text>{data.quizzes.length} quizzes</Text>
      </View>
      <View className="">
        <TouchableOpacity className="p-2" onPress={onDelete}>
          <TrashIcon color={colors.bgColor(0.7)} />
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  );
};
