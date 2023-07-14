import {APP_SCREEN, RootStackParamList} from '@navigation';
import {RouteProp, useNavigation, useRoute} from '@react-navigation/native';
import {IGameConfig, IQuiz, YoutubeVideo} from '@src/model';
import React, {FC, useCallback, useEffect, useState} from 'react';
import {View} from 'react-native';
import {Config, VideoInfor} from './component';
import {Quizzes} from './component/Quizzes';
import {Button} from '@components';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {COLLECTION, FireStore} from '@src/api/firebase';
enum STEP {
  GET_VIDEO,
  GET_CONFIG,
  GET_QUIZZES,
  REVIEW,
}
interface Props {}
export const UserGameEditorScreen: FC<Props> = ({}) => {
  const navigation =
    useNavigation<
      NativeStackNavigationProp<RootStackParamList, APP_SCREEN.USER_GAME_EDITOR>
    >();

  const route =
    useRoute<RouteProp<RootStackParamList, APP_SCREEN.USER_GAME_EDITOR>>();
  const [step, setStep] = useState(STEP.GET_VIDEO);
  const game = route?.params?.game;

  useEffect(() => {
    setVideo(game?.video);
    setQuizzes(game?.quizzes || []);
    setConfig(game?.config);
  }, [game]);

  const [video, setVideo] = useState<YoutubeVideo>();
  const [quizzes, setQuizzes] = useState<IQuiz[]>([]);
  const [config, setConfig] = useState<IGameConfig>();

  const initQuizzes = useCallback((data: IGameConfig) => {
    const {quiz_num, quiz_num_answers} = data;
    const qs = new Array(quiz_num).fill(0).map(_ => ({
      answer: undefined,
      answers: ['A', 'B', 'C', 'D'].slice(0, quiz_num_answers),
    }));
    setQuizzes(qs);
  }, []);

  useEffect(() => {
    if (video === undefined) {
      setStep(STEP.GET_VIDEO);
    } else {
      setStep(STEP.GET_CONFIG);
    }
  }, [video]);

  const createGame = useCallback(async () => {
    const newGame = {
      video,
      quizzes,
      config,
    };
    await FireStore.createDocument(COLLECTION.GAME, newGame);
    //navigation.goBack();
  }, [config, quizzes, video]);

  return (
    <View className="flex-1">
      <VideoInfor video={video} onGetVideo={setVideo} />
      {step === STEP.GET_VIDEO ? undefined : step === STEP.GET_CONFIG ? (
        <Config
          data={config}
          onDone={(data: IGameConfig) => {
            if (config === undefined) {
              initQuizzes(data);
            }
            setStep(STEP.GET_QUIZZES);
            console.log('Set config', config);
            setConfig(data);
          }}
        />
      ) : step === STEP.GET_QUIZZES ? (
        <Quizzes
          data={quizzes}
          onDone={a => {
            setQuizzes(a);
            setStep(STEP.REVIEW);
          }}
        />
      ) : step === STEP.REVIEW ? (
        <View>
          <Button label="Create" onPress={createGame} />
        </View>
      ) : undefined}
    </View>
  );
};
