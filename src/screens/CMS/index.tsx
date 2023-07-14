import {BottomSheetCustom, IconButton} from '@components';
import {useRoute} from '@react-navigation/native';
import {gameApi} from '@src/api';
import InfiniteList from '@src/components/InfiniteList';
import {MODEL_TYPE} from '@src/model/faker';
import {spacing} from '@utils';
import React, {FC, useEffect, useRef, useState} from 'react';
import {StyleSheet, View} from 'react-native';
import GameEdit from './components/GameEdit';
interface CMSScreenProps {}
export const CMSScreen: FC<CMSScreenProps> = ({}) => {
  const route = useRoute();
  const gameEditRef = useRef(null);

  const [tab, setTab] = useState('channel');
  const [games, setGames] = useState([]);
  useEffect(() => {
    getData();
    // gameEditRef?.current?.open();
  }, []);

  const getData = () => {
    gameApi.getAll().then(setGames);
  };

  const openGameEdit = () => {
    gameEditRef?.current?.open();
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        {/* <SegmentedButtons
          style={styles.tabs}
          value={tab}
          onValueChange={setTab}
          buttons={[
            {
              value: 'game',
              label: 'Game',
              showSelectedCheck: true,
            },
            {
              value: 'channel',
              label: 'Channel',
              showSelectedCheck: true,
            },
          ]}
        /> */}
      </View>
      <InfiniteList
        type={MODEL_TYPE.GAME}
        itemStyle={{
          marginHorizontal: spacing(2),
          marginTop: spacing(3),
        }}
      />
      <BottomSheetCustom ref={gameEditRef}>
        <GameEdit game={{}} />
      </BottomSheetCustom>
      <IconButton
        mode="contained"
        style={styles.createBtn}
        icon="plus"
        containerColor={'#233255'}
        iconColor="#fff"
        onPress={openGameEdit}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#f2f2f2',
    paddingTop: spacing(3),
  },
  header: {
    flexDirection: 'column',
    alignItems: 'center',
    paddingVertical: spacing(3),
  },
  tabs: {
    marginHorizontal: spacing(5),
  },
  createBtn: {
    position: 'absolute',
    bottom: spacing(2),
    right: spacing(2),
  },
});
