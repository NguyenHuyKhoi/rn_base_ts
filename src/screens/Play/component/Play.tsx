import {IGame} from '@models';
import React, {FC, useCallback, useState} from 'react';
import {FlatList, ScrollView, Text, TouchableOpacity, View} from 'react-native';
import {Answer} from './Answer';
interface Props {
  data: IGame;
  onComplete: () => void;
}
export const Play: FC<Props> = ({data, onComplete}) => {
  const {quizzes} = data;
  const [quizIndex, setQuizIndex] = useState(0);
  const quiz = quizzes[quizIndex];

  const answer = useCallback(() => {
    if (quizIndex === quizzes.length - 1) {
      onComplete();
    } else {
      setQuizIndex(quizIndex + 1);
    }
  }, [onComplete, quizIndex, quizzes.length]);

  return (
    <View className="pt-10 px-2">
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {quizzes.map((item, index) => {
          const textStyle =
            index === quizIndex
              ? 'font-semibold text-blue-700'
              : 'font-normal text-black-500';
          return (
            <TouchableOpacity
              onPress={() => setQuizIndex(index)}
              className="p-3 m-2"
              key={index + ''}>
              <Text className={'text-xl ' + textStyle}>{index}</Text>
            </TouchableOpacity>
          );
        })}
      </ScrollView>
      {quiz.answers.map((item, index) => (
        <Answer answer={index + ''} key={index + ''} onPress={() => answer()} />
      ))}
    </View>
  );
};
