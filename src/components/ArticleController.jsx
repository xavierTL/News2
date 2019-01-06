import React, { Component } from 'react';
import '../styles/controller.css';
import Sorter from './Sorter';

class ArticleController extends Component {
  render() {
    const { toggleSort, toggleAscending, isASC } = this.props;
    return (
      <div className="controlContainer">
        <Sorter toggleSort={toggleSort} />
        <button onClick={() => toggleAscending()}>
          {isASC ? 'A asc' : 'V desc'}
        </button>
      </div>
    );
  }
}

export default ArticleController;
