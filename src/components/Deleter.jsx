import React from 'react';
import '../styles/buttons.css';

const Deleter = ({ article_id, deleteArticle }) => {
  return (
    <button className="deleter" onClick={() => deleteArticle(article_id)}>
      Delete
    </button>
  );
};

export default Deleter;
