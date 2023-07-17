import {APP_SCREEN, RootStackParamList} from '@navigation';
import {RouteProp, useNavigation, useRoute} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {colors} from '@src/themes/colors';
import React, {FC, useState} from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {ArrowUturnLeftIcon} from 'react-native-heroicons/solid';
import {Info, Play, Result, VideoPlayer} from './component';

enum STEP {
  PREPARE,
  PLAY,
  RESULT,
}

interface PlayScreenProps {}
export const PlayScreen: FC<PlayScreenProps> = () => {
  const navigation =
    useNavigation<
      NativeStackNavigationProp<RootStackParamList, APP_SCREEN.PLAY>
    >();
  const route = useRoute<RouteProp<RootStackParamList, APP_SCREEN.PLAY>>();

  const {data} = route.params;
  const [step, setStep] = useState(STEP.PREPARE);

  const {video, config, quizzes} = data;
  const onQuit = () => {
    navigation.goBack();
  };

  const goResult = () => {};
  return (
    <View style={{backgroundColor: colors.bgColor(0.3)}} className="flex-1">
      <View className="flex-row justify-between items-center pt-12 pb-6 px-5">
        <Text className="text-white font-bold text-3xl">{'Question 1/2'}</Text>
        <View
          className="rounded-xl p-2"
          style={{backgroundColor: colors.bgColor(0.8)}}>
          <Text className="font-semibold text-2xl text-white">15</Text>
        </View>
      </View>
      <View className="flex-1 bg-white p-7 rounded-t-3xl ">
        <VideoPlayer />
        {step === STEP.PREPARE ? (
          <Info
            data={data}
            onStart={() => {
              setStep(STEP.PLAY);
            }}
          />
        ) : step === STEP.PLAY ? (
          <Play
            data={data}
            onComplete={() => {
              setStep(STEP.RESULT);
            }}
          />
        ) : step === STEP.RESULT ? (
          <Result
            data={data}
            onPlay={() => {
              setStep(STEP.PREPARE);
            }}
          />
        ) : undefined}

        <View className="flex-row">
          <TouchableOpacity className="p-3 flex items-start" onPress={onQuit}>
            <ArrowUturnLeftIcon />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};
