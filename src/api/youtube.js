import axios from 'axios';

const KEY = 'AIzaSyD6RGJnog6hmz1DaJcInpRQIDSdQsTgJ1Q';

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    part: 'snippet',
    maxResults: 5,
    key: KEY,
  },
});
