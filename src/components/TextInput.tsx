import {colors} from '@src/themes/colors';
import React, {FC} from 'react';
import {TextInput as RNInput} from 'react-native';
interface Props {
  label?: string;
  number?: boolean;
  value?: string | number;
  onChange: (value: string | number | undefined) => void;
}
export const TextInput: FC<Props> = ({label, number, value, onChange}) => (
  <RNInput
    value={value === undefined ? '' : value + ''}
    onChangeText={a => {
      if (number) {
        if (a === '') {
          onChange(undefined);
        } else {
          onChange(parseInt(a, 10));
        }
      } else {
        onChange(a);
      }
    }}
    inputMode={number ? 'decimal' : 'text'}
    placeholder={label}
    placeholderTextColor={colors.text + '55'}
    className={
      'px-4 pt-2 pb-4 border border-blue-500 border-1 rounded-lg my-2 mx-3 text-xl'
    }
  />
);
