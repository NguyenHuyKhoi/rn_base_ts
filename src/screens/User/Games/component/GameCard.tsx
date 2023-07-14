import {IGame} from '@src/model';
import {colors} from '@src/themes/colors';
import React, {FC} from 'react';
import {Text, TouchableOpacity, View} from 'react-native';

interface Props {
  data: IGame;
}
export const GameCard: FC<Props> = ({data}) => {
  return (
    <TouchableOpacity
      style={{
        backgroundColor: colors.bgColor(0.5),
      }}
      className="px-10 py-5 mt-2 rounded">
      <Text>{data.video.title}</Text>
    </TouchableOpacity>
  );
};
