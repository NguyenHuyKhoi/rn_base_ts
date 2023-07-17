import {Model} from '../model';
import {YTImages, YTLocalized} from './common';
export interface YTChannelStatistics {
  viewCount: string;
  subscriberCount: string;
  videoCount: string;
  hiddenSubscriberCount: boolean;
}
export interface YTChannelSnippet {
  title: string;
  description: string;
  customUrl: string;
  publishedAt: string;
  thumbnails: YTImages;
  localized: YTLocalized;
}
export interface YTChannel extends Model {
  id: string;
  snipped: YTChannelSnippet;
  statistics: YTChannelStatistics;
}
