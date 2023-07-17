/* eslint-disable react-native/no-inline-styles */
import {Button} from '@components';
import {IGame} from '@models';
import React, {FC} from 'react';
import {FlatList, Text, View} from 'react-native';
interface Props {
  data: IGame;
  onPlay: () => void;
}
export const Result: FC<Props> = ({data, onPlay}) => {
  const {quizzes} = data;
  console.log('Quizzes: ', quizzes);
  return (
    <View className="flex-1">
      <FlatList
        data={quizzes}
        className="mt-10"
        keyExtractor={(item, index) => index + ''}
        style={{
          flex: 1,
        }}
        renderItem={({item, index}) => (
          <View className="flex-row py-3 px-4 border border-1 border-black-400 rounded-xl my-3 mx-2">
            <Text className="font-semibold text-black">{index + 1}</Text>
            <Text className="font-semibold text-black ml-3">A</Text>
          </View>
        )}
      />
      <Button label="Play again" onPress={onPlay} />
    </View>
  );
};
