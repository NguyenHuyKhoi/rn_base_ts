import {Button, TextInput} from '@components';
import {COLLECTION, FireStore} from '@src/api/firebase';
import {YoutubeVideo} from '@src/model';
import {MODEL_TYPE, fake} from '@src/model/faker';
import React, {FC, useCallback, useState} from 'react';
import {View} from 'react-native';
import YoutubePlayer from 'react-native-youtube-iframe';
interface Props {
  video?: YoutubeVideo;
  onGetVideo: (data: YoutubeVideo) => void;
}
export const VideoInfor: FC<Props> = ({video, onGetVideo}) => {
  const [uri, setUri] = useState<string>();
  const retrieveVideo = useCallback(() => {
    const data = fake(MODEL_TYPE.YOUTUBE_VIDEO, false);
    onGetVideo(data as YoutubeVideo);
  }, [onGetVideo]);

  const testFB = useCallback(async () => {
    console.log('Test firebase');
    await FireStore.createDocument(COLLECTION.GAME, {a: 1, b: 2});
  }, []);

  return (
    <View className="mt-20" style={{height: 300}}>
      {video ? (
        <YoutubePlayer
          height={300}
          play={false}
          videoId={video.uri.split('=').pop() + '3'}
          onChangeState={() => {}}
        />
      ) : (
        <View className="p-4">
          <TextInput onChange={setUri} value={uri || ''} label="Video link" />
          <Button label="Find" onPress={testFB} />
        </View>
      )}
    </View>
  );
};
