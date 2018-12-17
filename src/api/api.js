import axios from 'axios';
const BASE_URL = 'https://xavs-nc-knews.herokuapp.com/api/';

export const fetchTopics = async () => {
  const { data } = await axios.get(`${BASE_URL}topics`);
  return data.topics;
};

export const fetchArticles = async (topic, searchCriteria) => {
  const query = searchCriteria ? `?criteria=${searchCriteria}` : '';
  const URL =
    topic === undefined
      ? `${BASE_URL}articles${query}?limit=20`
      : `${BASE_URL}topics/${topic}/articles${query}?limit=20`;

  const { data } = await axios.get(URL);
  return data;
};

export const fetchArticleById = async articleId => {
  const { data } = await axios.get(`${BASE_URL}articles/${articleId}`);
  return data.article;
};
