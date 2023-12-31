import {APP_SCREEN} from '@navigation';
import {useNavigation} from '@react-navigation/native';
import {Channel} from '@src/model';
import {_font_lg, _font_md, sizes, spacing} from '@utils';
import React, {FC} from 'react';
import {
  Image,
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

interface ChannelCardProps {
  channel: Channel;
}
const ChannelCard: FC<ChannelCardProps> = ({channel}) => {
  const navigation = useNavigation();
  const {youtube_channel, games} = channel;
  const viewDetail = () => {
    navigation.navigate(APP_SCREEN.CHANNEL, {
      id: '1234',
    });
  };
  return (
    <TouchableOpacity style={[styles.container]} onPress={viewDetail}>
      <ImageBackground
        source={{uri: youtube_channel?.avatar?.url}}
        style={styles.thumbnail}
      />
      <View style={[styles.content, {backgroundColor: '#233255'}]}>
        <Image
          source={{uri: youtube_channel?.avatar?.url}}
          style={styles.avatar}
        />
        <View style={styles.contentRight}>
          <Text style={styles.title}>{youtube_channel?.title}</Text>
          <Text style={styles.caption}>{`${games?.length} games`}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    height: 240,
    borderRadius: spacing(2),
    overflow: 'hidden',
  },
  thumbnail: {
    flex: 1,
  },
  content: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: spacing(1),
    paddingHorizontal: spacing(2),
  },
  avatar: {
    width: sizes(40),
    height: sizes(40),
    borderRadius: sizes(25),
  },
  channel: {
    fontSize: _font_md,
    color: '#fff',
    textDecorationLine: 'underline',
  },
  contentRight: {
    flexDirection: 'column',
    marginLeft: spacing(1),
  },
  title: {
    fontSize: _font_lg,
    color: '#fff',
    fontWeight: '600',
    marginTop: spacing(1),
  },
  caption: {
    fontSize: _font_md,
    color: '#fff',
    marginTop: spacing(0.5),
  },
});

export default ChannelCard;
