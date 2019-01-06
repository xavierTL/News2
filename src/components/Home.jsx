import React from 'react';
import '../styles/Home.css';

const Home = () => {
  return (
    <div className="homepage">
      <div className="homeCenter">
        <div className="homeIconCont">
          <img
            className="logo homeIcon"
            alt="logo"
            src={require('../images/home.svg')}
          />
        </div>
        <div className="homeText">
          welcome to the homepage - choose a topic from the navbar on the left.
        </div>
      </div>
    </div>
  );
};

export default Home;
