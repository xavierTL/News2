import React, { Component } from 'react';
import '../styles/buttons.css';

class MoreArticlesButton extends Component {
  render() {
    return (
      <div className="moreArticles">
        <button className="more">
          <div>more</div>
          <div className="arrow">v</div>
        </button>
      </div>
    );
  }
}

export default MoreArticlesButton;
