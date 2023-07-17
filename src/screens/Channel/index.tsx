import {PageLoading} from '@components';
import {useNavigation, useRoute} from '@react-navigation/native';
import {channelAPI} from '@src/api';
import {Channel} from '@src/model';
import {MODEL_TYPE} from '@src/model/faker';
import {_font_md, _font_xl, _screen_width, sizes, spacing} from '@utils';
import React, {FC, useEffect, useState} from 'react';
import {Button, Image, StyleSheet, Text, View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
interface ChannelScreenProps {}
export const ChannelScreen: FC<ChannelScreenProps> = ({}) => {
  const route = useRoute();
  const navigation = useNavigation();

  const {id} = route.params;
  const [channel, setChannel] = useState<Channel | null>(null);
  useEffect(() => {
    getData();
  }, []);

  const getData = () => {
    channelAPI.getDetail(id).then(setChannel);
  };
  const goBack = () => {
    navigation.goBack();
  };
  if (channel == null) {
    return <PageLoading />;
  }
  const {youtube_channel, games} = channel || ({} as Channel);

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
        <Button
          mode="contained"
          textColor="#fff"
          style={styles.btnFav}
          buttonColor={'#000'}>
          Subcribe to follow!
        </Button>
      </View>
      <LinearGradient
        colors={['#233255', '#fff']}
        start={{x: 0.5, y: -0.3}}
        end={{x: 0.5, y: 1}}
        style={styles.content}>
        <Text style={styles.gamesTitle}>Quizzes</Text>
        <Button
          icon="arrow-left"
          mode="outlined"
          // buttonColor={'#000'}
          style={{alignSelf: 'center'}}
          onPress={goBack}
          textColor={'#000'}>
          Back
        </Button>
      </LinearGradient>
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
  btnFav: {
    width: _screen_width * 0.8,
    marginTop: spacing(2),
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
    paddingVertical: spacing(3),
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
