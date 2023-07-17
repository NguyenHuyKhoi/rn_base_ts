import {APP_SCREEN, RootStackParamList} from '@navigation';
import {RouteProp, useNavigation, useRoute} from '@react-navigation/native';
import {IGameConfig, IQuiz, YoutubeVideo} from '@src/model';
import React, {FC, useCallback, useEffect, useState} from 'react';
import {View, TouchableOpacity} from 'react-native';
import {Config, VideoInfor} from './component';
import {Quizzes} from './component/Quizzes';
import {Button} from '@components';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {COLLECTION, FireStore} from '@src/api/firebase';
import {ArrowUturnLeftIcon} from 'react-native-heroicons/solid';
enum STEP {
  GET_VIDEO,
  GET_CONFIG,
  GET_QUIZZES,
  REVIEW,
}

enum MODE {
  VIEW,
  EDIT,
  CREATE,
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
  const [mode, setMode] = useState(MODE.EDIT);
  const game = route?.params?.game;
  useEffect(() => {
    if (game) {
      setMode(MODE.EDIT);
    } else {
      setMode(MODE.CREATE);
    }
  }, [game]);

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
  }, [config, quizzes, video]);

  const updateGame = useCallback(async () => {
    if (!game) {
      return;
    }
    const updatedGame = {
      video,
      quizzes,
      config,
    };
    await FireStore.updateDocument(COLLECTION.GAME, game?.id, updatedGame);
  }, [config, game, quizzes, video]);

  const complete = useCallback(async () => {
    if (mode === MODE.CREATE) {
      await createGame();
    } else if (mode === MODE.EDIT) {
      await updateGame();
    }
    navigation.goBack();
  }, [createGame, mode, navigation, updateGame]);

  const goBack = useCallback(() => {
    navigation.goBack();
  }, [navigation]);

  return (
    <View className="flex-1">
      <View className="mt-10 p-2">
        <TouchableOpacity className="p-2" onPress={goBack}>
          <ArrowUturnLeftIcon />
        </TouchableOpacity>
      </View>
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
          <Button
            label={
              mode === MODE.CREATE
                ? 'Create'
                : mode === MODE.EDIT
                ? 'Update'
                : 'Done'
            }
            onPress={complete}
          />
        </View>
      ) : undefined}
    </View>
  );
};
