import {Button} from '@components';
import {IGame} from '@models';
import React, {FC} from 'react';
import {Text, View} from 'react-native';
interface Props {
  data: IGame;
  onStart: () => void;
}
export const Info: FC<Props> = ({data, onStart}) => {
  const {config} = data;
  const {start_time, quiz_end, quiz_num, quiz_num_answers, quiz_play} = config;
  const textStyle = 'font-semibold font-black text-xl';
  return (
    <View className="flex-1 pt-10">
      <View className="flex-1">
        <Text className={textStyle}>Start time: {start_time} s</Text>
        <Text className={textStyle}>Quiz Play: {quiz_play} s</Text>
        <Text className={textStyle}>Quiz Num: {quiz_num} s</Text>
      </View>

      <Button label="Start" onPress={onStart} />
    </View>
  );
};
