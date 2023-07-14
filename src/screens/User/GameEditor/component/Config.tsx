import {Button, TextInput} from '@components';
import {IGameConfig} from '@src/model';
import React, {FC, useCallback, useEffect, useState} from 'react';
import {View} from 'react-native';
interface Props {
  data?: IGameConfig;
  onDone: (value: IGameConfig) => void;
}
export const Config: FC<Props> = ({data, onDone}) => {
  const [start_time, setStart_time] = useState<number | undefined>(1);
  const [quiz_play, setQuiz_play] = useState<number | undefined>(1);
  const [quiz_end, setQuiz_end] = useState<number | undefined>(1);
  const [quiz_num, setQuiz_num] = useState<number | undefined>(2);
  const [quiz_num_answers, setQuiz_num_answers] = useState<number | undefined>(
    4,
  );
  // useEffect(() => {
  //   setStart_time(data?.start_time);
  //   setQuiz_play(data?.quiz_play);
  //   setQuiz_end(data?.quiz_end);
  //   setQuiz_num(data?.quiz_num);
  //   setQuiz_num_answers(data?.quiz_num_answers);
  // }, [data]);
  const enableSubmit =
    start_time && quiz_play && quiz_end && quiz_num_answers && quiz_num;

  const done = useCallback(() => {
    if (
      !(start_time && quiz_play && quiz_end && quiz_num_answers && quiz_num)
    ) {
      return;
    }
    const inputs = {
      start_time,
      quiz_end,
      quiz_num,
      quiz_num_answers,
      quiz_play,
    };
    console.log('Inputs: ');
    onDone(inputs);
  }, [onDone, quiz_end, quiz_num, quiz_num_answers, quiz_play, start_time]);

  return (
    <View className="flex" style={{}}>
      <TextInput
        onChange={a => setStart_time(parseInt(a, 10))}
        value={start_time}
        number
        label="Game start"
      />
      <TextInput
        onChange={a => setQuiz_play(parseInt(a, 10))}
        value={quiz_play}
        number
        label="Quiz play"
      />
      <TextInput
        onChange={a => setQuiz_end(parseInt(a, 10))}
        value={quiz_end}
        number
        label="Quiz end"
      />
      <TextInput
        onChange={a => setQuiz_num(parseInt(a, 10))}
        value={quiz_num}
        number
        label="Quiz Number"
      />
      <TextInput
        onChange={a => setQuiz_num_answers(parseInt(a, 10))}
        value={quiz_num_answers}
        number
        label="Quiz Number Answer"
      />
      <Button label="Done" onPress={enableSubmit ? done : undefined} />
    </View>
  );
};
