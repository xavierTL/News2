import React, { Component } from 'react';
import '../styles/controller.css';
import Sorter from './Sorter';

class ArticleController extends Component {
  render() {
    const { toggleSort } = this.props;
    return (
      <div className="controlContainer">
        <Sorter toggleSort={toggleSort} />
      </div>
    );
  }
}

export default ArticleController;
