import axios from 'axios';
const BASE_URL = 'https://xavs-nc-knews.herokuapp.com/api/';

export const fetchTopics = async () => {
  const { data } = await axios.get(`${BASE_URL}topics`);
  return data.topics;
};

export const fetchArticles = async (topic, options) => {
  const { isASC, criteria, p } = options;
  const URL = `${BASE_URL}topics/${topic}/articles?criteria=${criteria}&&p=${p}&&sort_ascending=${isASC}`;
  const { data } = await axios.get(URL);
  return data;
};

export const fetchArticleById = async articleId => {
  try {
    const { data } = await axios.get(`${BASE_URL}articles/${articleId}`);
    return data.article[0];
  } catch (err) {
    console.log(err);
    return err;
  }
};

export const fetchComments = async articleId => {
  if (articleId) {
    const { data } = await axios.get(
      `${BASE_URL}articles/${articleId}/comments?limit=30&&criteria=created_at`
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
  return data;
};

export const deleteCommentById = async id => {
  const { data } = await axios.delete(`${BASE_URL}comments/${id}`);
  return data;
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
  return data;
};

export const fetchTopTen = async () => {
  const URL = `${BASE_URL}/articles?criteria=votes`;
  const { data } = await axios.get(URL);
  return data;
};

export const postNewTopic = async post => {
  const { data } = await axios.post(`${BASE_URL}topics`, post);
  return data;
};
