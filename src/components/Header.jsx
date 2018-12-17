import React from 'react';
import '../styles/Header.css';

const Header = () => {
  return (
    <div className="mainHeader">
      <div>
        <h1>NC NEWS</h1>
      </div>
      <img className="logo" alt="logo" src={require('../images/icon.svg')} />
    </div>
  );
};

export default Header;
