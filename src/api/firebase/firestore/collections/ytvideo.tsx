import {YoutubeAPI} from '@src/api/youtube';
import {COLLECTION} from '../types';
import {FSUtil} from '../utils';
import {FSYTChannel} from './ytchannel';

export class FSYTVideo {
  static add = async (id: string, overwrite: boolean = false) => {
    try {
      const exist = await FSUtil.existDocument(COLLECTION.YT_VIDEO, id);
      if (exist && !overwrite) {
        return;
      }
      const data = await YoutubeAPI.getVideo(id);
      if (!data) {
        return;
      }
      await FSUtil.createDocument(COLLECTION.YT_VIDEO, data, id);
      await FSYTChannel.add(data.snippet.channelId);
    } catch (error) {}
  };
}
