import {useNavigation} from '@react-navigation/native';
import {Game} from '@src/model';
import {spacing} from '@utils';
import React, {FC, useState} from 'react';
import {StyleSheet, View} from 'react-native';
interface GameEditProps {
  game: Game;
}
const GameEdit: FC<GameEditProps> = ({game}) => {
  const navigation = useNavigation();
  const {videoId, setVideoId} = useState();
  const getYoutubeVideo = async id => {};
  return (
    <View style={styles.container}>
      <View style={styles.videoIdContainer}>
        {/* <TextInput
          style={{}}
          label="Video id"
          value={videoId}
          onChangeText={setVideoId}
          mode="outlined"
          style={styles.videoIdInput}
        /> */}
        {/* <Button mode="contained" style={styles.videoIdSubmit} textColor="#fff">
          Get Infor
        </Button> */}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    borderRadius: spacing(2),
    paddingHorizontal: spacing(3),
  },
  videoIdContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  videoIdInput: {
    flex: 1,
  },
  videoIdSubmit: {
    marginLeft: spacing(2),
  },
});

export default GameEdit;
