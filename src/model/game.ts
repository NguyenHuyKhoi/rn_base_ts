import {Model} from './model';
import {YoutubeVideo} from './youtube';
export interface IQuiz {
  answer?: number;
  answers: string[];
}

export interface IGameConfig {
  start_time: number;
  quiz_play: number;
  quiz_end: number;
  quiz_num: number;
  quiz_num_answers: number;
}
export interface IGame extends Model {
  id: string;
  video: YoutubeVideo;
  config: IGameConfig;
  quizzes: IQuiz[];
}
