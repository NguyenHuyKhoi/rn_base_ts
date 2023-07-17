import {colors} from '@src/themes/colors';
import React, {FC} from 'react';
import {Text, TouchableOpacity} from 'react-native';

interface AnswerProps {
  answer: string;
  onPress: () => void;
}
export const Answer: FC<AnswerProps> = ({answer, onPress}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      className="py-4 justify-center items-center rounded-xl my-3 mx-5"
      style={{backgroundColor: colors.bgColor(0.4)}}>
      <Text className="font-semibold text-white text-2xl">{answer}</Text>
    </TouchableOpacity>
  );
};
