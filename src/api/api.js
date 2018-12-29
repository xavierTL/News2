import axios from 'axios';
const BASE_URL = 'https://xavs-nc-knews.herokuapp.com/api/';

export const fetchTopics = async () => {
  const { data } = await axios.get(`${BASE_URL}topics`);
  return data.topics;
};

export const fetchArticles = async (topic, searchCriteria) => {
  const query = searchCriteria ? `?criteria=${searchCriteria}` : '';
  const URL = `${BASE_URL}topics/${topic}/articles${query}`;
  const { data } = await axios.get(URL);
  return data;
};

export const fetchArticleById = async articleId => {
  const { data } = await axios.get(`${BASE_URL}articles/${articleId}`);
  return data.article[0];
};

export const fetchComments = async articleId => {
  if (articleId) {
    const { data } = await axios.get(
      `${BASE_URL}articles/${articleId}/comments?limit=30`
    );
    return data;
  }
};

export const fetchUsers = async () => {
  const { data } = await axios.get(`${BASE_URL}users`);
  return data;
};

export const postComment = async newComment => {
  const { data } = await axios.post(
    `${BASE_URL}articles/${newComment.article_id}/comments`,
    newComment
  );
};

export const deleteCommentById = async id => {
  const { data } = await axios.delete(`${BASE_URL}comments/${id}`);
};

export const voteOnArticle = async (articleId, increment) => {
  const vote = { inc_votes: increment };
  const { data } = await axios.patch(`${BASE_URL}articles/${articleId}`, vote);
  return data;
};

export const postArticle = async (topic, post) => {
  const { data } = await axios.post(
    `${BASE_URL}topics/${topic}/articles`,
    post
  );
  return data;
};

export const deleteArticle = async id => {
  const { data } = await axios.delete(`${BASE_URL}articles/${id}`);
};
