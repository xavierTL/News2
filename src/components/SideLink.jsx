import React from 'react';
import '../styles/SideBar.css';

const SideLink = ({ text }) => {
  return (
    <div className="newLink">
      <div className="linkText">{text}</div>
      <div className="plus">+</div>
    </div>
  );
};

export default SideLink;
