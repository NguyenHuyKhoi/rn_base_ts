import React, {FC} from 'react';
import {StyleSheet, View} from 'react-native';
interface Props {}

export const Home: FC<Props> = ({}) => {
  return <View style={styles.container} />;
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#191a1e',
  },
});
