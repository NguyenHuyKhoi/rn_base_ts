import axiosClient from '../axiosClient';

const API_KEY = 'AIzaSyCBCcr0BwzW2Tf5MgzoWOUJeqEl22mmViQ';
const BASE_URL = 'https://youtube.googleapis.com/youtube/v3';
export class YoutubeAPI {
  static getVideo = async (id: string) => {
    try {
      const response = await axiosClient.get(`${BASE_URL}/videos`, {
        params: {
          part: ['snippet', 'statistics'],
          id,
          key: API_KEY,
        },
      });
      console.log('response: ', JSON.stringify(response, null, 2));
      return response?.data?.items?.[0];
    } catch (error) {
      return undefined;
    }
  };
  static getChannel = async (id: string) => {
    try {
      const response = await axiosClient.get(`${BASE_URL}/channels`, {
        params: {
          part: ['snippet', 'statistics'],
          id,
          key: API_KEY,
        },
      });
      return response?.data?.items?.[0];
    } catch (error) {
      return undefined;
    }
  };
}
