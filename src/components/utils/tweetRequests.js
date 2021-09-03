import axios from 'axios';

let API_URL = process.env.REACT_APP_DEV_API;

export const tweet = token => {
  const options = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const deleteTweet = async id => {
    try {
      let res = await axios.delete(`${API_URL}/api/kebab/${id}`, options);
    } catch (error) {
      console.log(error);
    }
  };
  const getTweet = async () => {
    try {
      let res = await axios.get(`${API_URL}/api/kebab/feed`, options);
      return res;
    } catch (error) {
      console.log(error);
    }
  };
  const makeTweet = async content => {
    try {
      let res = await axios.post(`${API_URL}/api/kebab/`, content, options);
    } catch (error) {
      console.log(error);
    }
  };
  const likeTweet = async (like, id) => {
    try {
      let res = await axios.put(
        `${API_URL}/api/kebab/like/${id}`,
        like,
        options
      );
    } catch (error) {
      console.log(error);
    }
  };
  const reTweet = async (rekebab, id) => {
    try {
      let res = await axios.put(
        `${API_URL}/api/kebab/rekebab/${id}`,
        rekebab,
        options
      );
    } catch (error) {
      console.log(error);
    }
  };
  const userProfileTweets = async id => {
    try {
      let res = await axios.get(`${API_URL}/api/kebab/${id}`, options);
      return res.data;
    } catch (error) {
      return error.response.data;
    }
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
