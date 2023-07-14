import {colors} from '@src/themes/colors';
import React, {FC} from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';
interface Props {
  label: string;
  onPress?: () => void;
}
export const Button: FC<Props> = ({label, onPress}) => {
  return (
    <TouchableOpacity
      disabled={onPress === undefined}
      onPress={onPress}
      style={{backgroundColor: colors.bgColor(0.4)}}
      className="py-4 items-center justify-center rounded-full my-4 mx-3">
      <Text className="text-lg font-semibold text-blue-500">{label}</Text>
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({});
