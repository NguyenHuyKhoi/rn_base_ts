import React, {FC} from 'react';
import {View} from 'react-native';
import YoutubePlayer from 'react-native-youtube-iframe';
interface Props {}
export const VideoPlayer: FC<Props> = ({}) => {
  return (
    <View className="rounded-3xl overflow-hidden">
      <YoutubePlayer
        height={185}
        videoId={'82BRDUuB91h0'}
        initialPlayerParams={{
          controls: false,
        }}
        playbackRate={1.5}
      />
    </View>
  );
};
