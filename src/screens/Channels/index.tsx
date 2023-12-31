import {userAPI} from '@src/api/features/user';
import {User} from '@src/model';
import {_font_xl, _screen_height, sizes, spacing} from '@utils';
import React, {FC, useEffect, useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
interface ChannelsScreenProps {}
export const ChannelsScreen: FC<ChannelsScreenProps> = ({}) => {
  const [user, setUser] = useState<User | null>(null);
  const [tab, setTab] = useState('all');

  useEffect(() => {
    getUser();
  }, []);

  const getUser = () => {
    userAPI.getMe().then(setUser);
  };

  return (
    <View style={[styles.container, {backgroundColor: '#233255'}]}>
      <View style={styles.header}>
        <View style={[styles.layer, {backgroundColor: '#233255'}]} />
        {user && (
          <>
            <Text style={[styles.username, {color: '#fff'}]}>{'Channels'}</Text>
          </>
        )}
      </View>
      <View style={styles.content} />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: spacing(5),
  },
  header: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    paddingVertical: spacing(4),
    marginHorizontal: spacing(2),
  },
  layer: {
    width: _screen_height,
    height: _screen_height + sizes(40),
    borderRadius: _screen_height / 2,
    position: 'absolute',
    zIndex: -1,
    left: -_screen_height / 2 - 60,
    top: -90,
  },
  content: {
    flex: 1,
    backgroundColor: '#fff',
    borderTopLeftRadius: spacing(4),
    borderTopRightRadius: spacing(4),
    paddingVertical: spacing(3),
  },
  tabs: {
    marginHorizontal: spacing(6),
  },
  logo: {
    width: sizes(300),
    height: sizes(50),
    resizeMode: 'cover',
  },
  avatarContainer: {
    borderRadius: spacing(1),
    borderWidth: sizes(1),
    overflow: 'hidden',
  },
  avatar: {
    width: sizes(40),
    height: sizes(40),
    resizeMode: 'cover',
  },
  username: {
    fontSize: _font_xl,
    fontWeight: '700',
    marginLeft: spacing(1),
    flexWrap: 'wrap',
  },
  list: {
    marginTop: spacing(2),
  },
  item: {
    marginHorizontal: spacing(3),
    marginTop: spacing(3),
  },
});
