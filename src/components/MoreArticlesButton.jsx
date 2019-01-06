import React, { Component } from 'react';
import '../styles/buttons.css';

class MoreArticlesButton extends Component {
  render() {
    const { paginate } = this.props;
    return (
      <div className="moreArticles">
        <button className="more" onClick={() => paginate()}>
          <div>more</div>
        </button>
      </div>
    );
  }
}

export default MoreArticlesButton;
