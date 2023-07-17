import {Model} from '../model';
import {YTImages, YTLocalized} from './common';

export interface YTVideoSnippet {
  publishedAt: string;
  channelId: string;
  title: string;
  description: string;
  thumsbnails: YTImages;
  channelTitle: string;
  categoryId: string;
  localized: YTLocalized;
}

export interface YTVideoStatistics {
  viewCount: string;
  likeCount: string;
  favoriteCount: string;
  commentCount: string;
}
export interface YTVideo extends Model {
  id: string;
  snippet: YTVideoSnippet;
  statistics: YTVideoStatistics;
}
