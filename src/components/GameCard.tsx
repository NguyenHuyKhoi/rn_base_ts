/* eslint-disable react-native/no-inline-styles */
import {IGame} from '@models';
import {APP_SCREEN, RootStackParamList} from '@navigation';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {colors} from '@src/themes/colors';
import React, {FC} from 'react';
import {Text, TouchableOpacity, View} from 'react-native';

interface GameCardProps {
  data: IGame;
}
export const GameCard: FC<GameCardProps> = ({data}) => {
  const navigation =
    useNavigation<
      NativeStackNavigationProp<RootStackParamList, APP_SCREEN.HOME>
    >();

  const {video, quizzes} = data;
  const {title, thumbnail, channel} = video || {};
  const press = () => {
    navigation.navigate(APP_SCREEN.PLAY, {
      data,
    });
  };
  const viewChannel = () => {
    navigation.navigate(APP_SCREEN.CHANNEL, {
      id: '1234',
    });
  };
  return (
    <TouchableOpacity className="rounded-xl" onPress={press}>
      {/* <ImageBackground source={{uri: thumbnail?.url}} className="flex-1" /> */}
      <View
        style={{backgroundColor: colors.bgColor(0.5)}}
        className="px-3 py-2">
        <TouchableOpacity onPress={viewChannel}>
          <Text className="font-semibold text-xl text-white">{`Channel: ${channel?.title}`}</Text>
        </TouchableOpacity>
        <Text className="font-semibold text-sm text-white">{title}</Text>
        <Text className="font-semibold text-sm text-white">{`${quizzes?.length} quiz`}</Text>
      </View>
    </TouchableOpacity>
  );
};
