import {IQuiz} from '@src/model';
import React, {FC, useCallback, useEffect, useState} from 'react';
import {ScrollView, Text, TouchableOpacity, View} from 'react-native';
import {Quiz} from './Quiz';
import {Button} from '@components';
interface Props {
  data: IQuiz[];
  onDone: (a: IQuiz[]) => void;
}

export const Quizzes: FC<Props> = ({data, onDone}) => {
  const [list, setList] = useState<IQuiz[]>([]);
  const [quizIndex, setQuizIndex] = useState<number>(0);
  useEffect(() => {
    setList(data);
  }, [data]);
  const onChangeQuizAnswer = useCallback(
    (i: number, a: number) => {
      console.log('list: ', list);
      if (list[i]) {
        list[i] = {
          ...list[i],
          answer: a,
        };
        setList(list);
      }
      if (i < list.length - 1) {
        setQuizIndex(i + 1);
      }
    },
    [list],
  );

  console.log('List: ', list);
  const enableDone =
    list.length > 0 && !list.find(quiz => quiz.answer === undefined);

  return (
    <View className="flex-1">
      <View>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {list.map((item, index) => {
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
      </View>

      {list[quizIndex] && (
        <Quiz
          data={list[quizIndex]}
          onChangeAnswer={answer => onChangeQuizAnswer(quizIndex, answer)}
        />
      )}
      {enableDone && <Button label="Done" onPress={() => onDone(list)} />}
    </View>
  );
};
