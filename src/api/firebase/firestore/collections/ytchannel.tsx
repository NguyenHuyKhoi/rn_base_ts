import {YoutubeAPI} from '@src/api/youtube';
import {COLLECTION} from '../types';
import {FSUtil} from '../utils';

export class FSYTChannel {
  static add = async (id: string, overwrite: boolean = false) => {
    try {
      const exist = await FSUtil.existDocument(COLLECTION.YT_CHANNEL, id);
      if (exist && !overwrite) {
        return;
      }
      const data = await YoutubeAPI.getChannel(id);
      if (!data) {
        return;
      }
      await FSUtil.createDocument(COLLECTION.YT_CHANNEL, data, id);
    } catch (error) {}
  };
}
