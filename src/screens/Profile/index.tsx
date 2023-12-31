import {dispatch} from '@common';
import {IconButton, PageLoading} from '@components';
import {APP_SCREEN} from '@navigation';
import {useNavigation, useRoute} from '@react-navigation/native';
import {onLogout} from '@reducer/appReducer';
import {userAPI} from '@src/api/features/user';
import InfiniteList from '@src/components/InfiniteList';
import {Channel, User} from '@src/model';
import {MODEL_TYPE} from '@src/model/faker';
import {_font_md, _font_xl, _screen_width, sizes, spacing} from '@utils';
import React, {FC, useEffect, useState} from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
interface ProfileScreenProps {}
export const ProfileScreen: FC<ProfileScreenProps> = ({}) => {
  const route = useRoute();
  const navigation = useNavigation();

  const [user, setUser] = useState<User | null>(null);
  useEffect(() => {
    getData();
  }, []);

  const getData = () => {
    userAPI.getMe().then(setUser);
  };
  if (user == null) {
    return <PageLoading />;
  }

  const logout = () => {
    dispatch(onLogout());
  };

  const {youtube_channel, played_games} = user || ({} as Channel);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={[styles.avatarContainer, {borderColor: '#233255'}]}>
          <Image
            source={{uri: youtube_channel.avatar.url}}
            style={styles.avatar}
          />
        </View>
        <Text style={[styles.channelTitle, {color: '#233255'}]}>
          {youtube_channel.title}
        </Text>
        <Text style={[styles.channelLink, {color: '#999'}]}>
          {youtube_channel.link}
        </Text>
        <IconButton
          onPress={logout}
          icon="logout"
          size={sizes(30)}
          style={styles.logoutBtn}
          iconColor={'#999'}
        />
      </View>
      <LinearGradient
        colors={['#233255', '#fff']}
        start={{x: 0.5, y: -0.3}}
        end={{x: 0.5, y: 1}}
        style={styles.content}>
        <Text style={styles.gamesTitle}>Played quizzes</Text>
      </LinearGradient>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#f2f2f2',
    paddingTop: spacing(5),
  },
  logoutBtn: {
    position: 'absolute',
    top: spacing(0),
    right: spacing(0),
  },
  cmsBtn: {
    position: 'absolute',
    top: spacing(0),
    left: spacing(0),
  },
  header: {
    flexDirection: 'column',
    alignItems: 'center',
    paddingVertical: spacing(4),
  },
  avatarContainer: {
    borderRadius: spacing(3),
    borderWidth: spacing(0.3),
    overflow: 'hidden',
  },
  avatar: {
    width: _screen_width / 3.5,
    height: _screen_width / 3.5,
    resizeMode: 'stretch',
  },
  channelTitle: {
    fontSize: _font_xl,
    fontWeight: '700',
    marginTop: spacing(2),
  },
  channelLink: {
    fontSize: _font_md,
    fontWeight: '600',
    marginTop: spacing(0.5),
    textDecorationLine: 'underline',
  },
  content: {
    flex: 1,
    borderTopLeftRadius: spacing(4),
    borderTopRightRadius: spacing(4),
    paddingVertical: spacing(4),
    paddingHorizontal: spacing(2),
  },
  gamesTitle: {
    fontSize: _font_xl,
    color: '#fff',
    fontWeight: '600',
  },
  games: {
    marginTop: spacing(3),
  },
});
