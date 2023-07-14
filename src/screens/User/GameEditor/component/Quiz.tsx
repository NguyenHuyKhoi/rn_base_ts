import {IQuiz} from '@src/model';
import {colors} from '@src/themes/colors';
import React, {FC} from 'react';
import {Text, TouchableOpacity, View} from 'react-native';

interface Props {
  data: IQuiz;
  onChangeAnswer: (answer: number) => void;
}
export const Quiz: FC<Props> = ({data, onChangeAnswer}) => {
  const {answers, answer} = data;
  return (
    <View className="">
      {answers.map((item, index) => {
        const correct = index === answer;
        return (
          <TouchableOpacity
            onPress={() => onChangeAnswer(index)}
            style={{
              backgroundColor: correct
                ? colors.bgColor(0.5)
                : colors.bgColor(0.1),
            }}
            className="p-4 pl-6 rounded-full my-2 mx-3">
            <Text className="font-xl2">{item}</Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
};
