import axios from 'axios';
const BASE_URL = 'https://xavs-nc-knews.herokuapp.com/api/';

export const fetchTopics = async () => {
  const { data } = await axios.get(`${BASE_URL}topics`);
  return data.topics;
};
