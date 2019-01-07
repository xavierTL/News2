import React from 'react';
import '../styles/SideBar.css';

const SideLink = ({ text, img }) => {
  return (
    <div className="newLink">
      <div className="linkText">{text}</div>
      <div className="linkIcon">
        <img
          className="commentIcon"
          src={require('../images/' + img)}
          alt="comment icon"
        />
      </div>
    </div>
  );
};

export default SideLink;
