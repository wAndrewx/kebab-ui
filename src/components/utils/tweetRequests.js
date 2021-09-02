import axios from 'axios';

let API_URL = process.env.REACT_APP_DEV_API;

export const tweet = token => {
  const options = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const deleteTweet = async id => {
    let res = await axios.delete(`${API_URL}/api/kebab/${id}`, options);
  };
  const getTweet = async () => {
    let res = await axios.get(`${API_URL}/api/kebab/`, options);
    return res.data;
  };
  const makeTweet = async content => {
    let res = await axios.post(`${API_URL}/api/kebab/`, content, options);
  };
  const likeTweet = async (like, id) => {
    let res = await axios.put(`${API_URL}/api/kebab/like/${id}`, like, options);
  };
  const reTweet = async (rekebab, id) => {
    let res = await axios.put(
      `${API_URL}/api/kebab/rekebab/${id}`,
      rekebab,
      options
    );
  };
  const userProfileTweets = async id => {
    let res = await axios.get(`${API_URL}/api/kebab/${id}`, options);
    return res.data;
  };
  return {
    deleteTweet,
    getTweet,
    makeTweet,
    likeTweet,
    reTweet,
    userProfileTweets,
  };
};
